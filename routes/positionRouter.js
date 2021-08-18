const express = require('express');
const Position = require('../db/models/positionModel');

const router = express.Router();

router.route('/:id')
.get(async (req, res) => {
  const position = await Position.findById(req.params.id);
  res.render('eachPosition', { position });
});

// router.get('/:categoryId', async (req, res) => {
//   try {
//     const allPosition = await Position.find({
//       category: req.params.categoryId,
//       user: req.user.id,
//     });
//     res.status(200).json(allPosition);
//   } catch (e) {
//     console.log(e);
//   }
// });

module.exports = router;

