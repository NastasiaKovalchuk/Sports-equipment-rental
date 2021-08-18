const express = require('express');
const User = require('../db/models/userModel');
const bcrypt = require('bcryptjs');
const router = express.Router();


router.route('/signup')
  .get((req, res) => {
    res.render('signupForm')
  })
  .post(async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        res.status(409);
        res.render('signupForm', { error: 'Email уже зарегистрирован' });
      } else {
        const hashPassword = bcrypt.hashSync(password, 7);
        const user = await User.create({ username, email, password: hashPassword });
        // res.locals.user = true;
        req.session.name = user.username;
        req.session.email = user.email;
        res.status(200);
        res.redirect('/');
      }
    } catch (err) {
      console.log(err);
    }
  });

router.route('/login')
  .get((req, res) => {
    res.render('loginForm');
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    if (!password || !email) {
      res.render('loginForm', { error: 'Неверный логин или пароль' });
    }
    try {
      const user = await User.findOne({ email });
      if (user) {
        console.log(user);
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
          res.locals.user = user;
          req.session.name = user.username;
          req.session.email = user.email;
          return res.redirect('/')
        }
      }
      return res.render('loginForm', { error: 'Неверный пароль' });
    } catch (err) {
      console.log(err);
    }
  });

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});



module.exports = router;
