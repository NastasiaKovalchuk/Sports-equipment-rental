const express = require('express');
// const Request = require('../db/models/requestModel');
const Admin = require('../db/models/adminModel');


const router = express.Router();

router.get('/login', (req, res) => {
  res.render('adminLogin');
});

router.post('/login', async (req, res) => {
  const { login, password } = req.body;
  try {
    const admin = await Admin.findOne({ login });
    if (admin) {
      req.session.name = admin.login;
      return res.render('mainPage');
    }
  } catch (err) {
  console.log(err);
}
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});


// router.get('/requests', isAdmin, async (req, res, next) => {
//   const { status } = req.query;
//   try {
//     if (!status) {
//       const request = await Request.find().lean();
//       request.sort((a,b) => b.createdAt - a.createdAt); 
//       return res.render('requests', { request: request.map((el) => ({...el, createdAt: new Date(el.createdAt).toLocaleDateString()})) });
//     }
//     if (status == 'all') {
//       const request = await Request.find().lean();
//       request.sort((a,b) => b.createdAt - a.createdAt); 
//       return res.render('search', { request: request.map((el) => ({...el, createdAt: new Date(el.createdAt).toLocaleDateString() })), layout: false });
//     }
//     const request = await Request.find({ status }).lean();
//     request.sort((a,b) => b.createdAt - a.createdAt); 
//     return res.render('search', { request: request.map((el) => ({...el, createdAt: new Date(el.createdAt).toLocaleDateString() })), layout: false });
//   } catch (err) {
//     err.status = 404;
//     err.message = 'There is no search with this status';
//     next(err);
//   }
// });

// router.post('/requests', search);

// router.get('/requests/s/', (req, res) => {
//   // const { id } = req.params;
//   res.sendStatus(200);
//   // res.redirect(`/admin/requests/${id}`);
// });

// router.get('/requests/:idreq', showReq);

// // router.get('/requests/:idreq/edit', editReq);

// router.post('/requests/:idreq', updReq);
// const showReq = async (req, res) => {
//   id = req.params.idreq;
//   const request = await Request.findOne({ _id: id });
//   res.render('admin/request', { request });
// };
// const editReq = async (req, res) => {
//   id = req.params.idreq;
//   const request = await Request.findOne({ _id: id });
//   console.log(request._id);
//   console.log('Зашел в ручку');
//   // res.render('admin/editForm', { id: request._id });
//   res.render('admin/editForm', { layout: false });
// };
// const updReq = async (req, res) => {
//   let request = await Request.findById(req.params.idreq);
//   const _id = req.body._id;
//   console.log('Зашел в ручку');
//   try {
//     // console.log(req.body);
//     await Request.findByIdAndUpdate(req.params.idreq, { adminComment: req.body.adminComment, status: req.body.status });
//     request = await Request.findById(req.params.idreq);
//   } catch (error) {
//     console.log('не вышло');
//   }
//   res.render(`admin/request`, { request });
// };

// const search = async (req, res) => {
//   let { search } = req.body;
//   search = search.toLowerCase();
//   let flag = false;

//   const requests = await Request.find();
//   const validArrNames = [];
//   const validArrCompany = [];
//   const validArrPhones = [];
//   const validArrEmail = [];
//   const validArrDescr = [];
//   const validArrCom = [];
//   // поиск по имени
//   for (let i = 0; i < requests.length; i++) {
//     if (requests[i].name.toLowerCase().includes(search)) {
//       validArrNames.push(requests[i]);
//       flag = true;
//     }
//   }
//   // поиск по компании
//   for (let i = 0; i < requests.length; i++) {
//     if (search == requests[i].companyName.toLowerCase()) {
//       validArrCompany.push(requests[i]);
//       flag = true;
//     }
//   }
//   // поиск по номеру телефона
//   for (let i = 0; i < requests.length; i++) {
//     if (search == requests[i].phone.toLowerCase()) {
//       validArrPhones.push(requests[i]);
//       flag = true;
//     }
//   }
//   // поиск по номеру email
//   for (let i = 0; i < requests.length; i++) {
//     if (search == requests[i].email.toLowerCase()) {
//       validArrEmail.push(requests[i]);
//       flag = true;
//     }
//   }
//   // поиск по совпадению в описании
//   for (let i = 0; i < requests.length; i++) {
//     if (requests[i].description.toLowerCase().includes(search)) {
//       validArrDescr.push(requests[i]);
//       flag = true;
//     }
//   }
//   for (let i = 0; i < requests.length; i++) {
//     if (requests[i].adminComment) {
//       if (requests[i].adminComment.toLowerCase().includes(search)) {
//         validArrCom.push(requests[i]);
//         flag = true;
//       }
//     }
//   }

//   res.render('search', {
//     flag, validArrNames, validArrCompany, validArrPhones, validArrEmail, validArrDescr, validArrCom, layout: false,
//   });
// };

module.exports = router;






