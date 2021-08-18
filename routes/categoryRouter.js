const express = require('express');
const Category = require('../db/models/categoryModel');
const Position = require('../db/models/positionModel');

const router = express.Router();

router.get('/', async function (req, res) {
  try {
    const categories = await Category.find();
    res.render('allCategories', categories);
  } catch (e) {
    console.log(e);
  }
});

router.get('/:name', async (req, res) => {
  const name = req.params.name;
  switch (name) {
    case 'winter':
      const categoryWinter = await Category.findOne({ season: 'winter' });
      const allpositionsWinter = await Position.find({ category: categoryWinter._id});
      // console.log(allpositionsWinter);
      res.render('seasonPositions', { allpositionsWinter });
      break;
    case 'water':
      const categoryWater = await Category.findOne({ season: 'water' });
      const allpositionsWater = await Position.find({ category: categoryWater._id});
      res.render('seasonPositions', {allpositionsWater})
      break;
    case 'summer':
      const categorySummer = await Category.findOne({ season: 'summer' });
      const allpositionsSummer = await Position.find({ category: categorySummer._id});
      // console.log(allpositionsSummer);
      res.render('seasonPositions', { allpositionsSummer })
      break;
    default:
      console.log('База данных пуста');
  }
})


router.get('/:id', async function (req, res) {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (e) {
    console.log(e);
  }
});


module.exports = router;
