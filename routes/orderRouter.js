const express = require('express');
const Order = require('../db/models/orderModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const query = {
    user: req.user.id,
  };
  if (req.query.start) {
    query.date = {
      //больше или равно
      $gte: req.query.start
    }
  }
  if (req.query.end) {
    if (!query.date) {
      query.date = {}
    }
    query.date['$lte'] = req.query.end
  }
  if (req.query.order) {
    query.order = +req.query.order
  }
  try {
    const orders = await Order.find(query)
      .sort({ date: -1 }) // сортировка по дате
      .skip(+req.query.offset) //скролл
      .limit(+req.query.limit)
    res.status(200).json(orders);
  } catch (e) {
    console.log(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const lastOrder = await Order
      .findOne({ user: req.user.id })
      .sort({ date: -1 });

    const maxOrder = lastOrder ? lastOrder.order : 0;
    const order = await Order.create({
      list: req.body.list,
      user: req.user.id,
      order: maxOrder + 1

    });
    res.status(201).json(order);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
