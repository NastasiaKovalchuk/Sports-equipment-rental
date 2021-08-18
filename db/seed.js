require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('./connect');
const Category = require('./models/categoryModel');
const Position = require('./models/positionModel');
const Admin = require('../db/models/adminModel');

// const positions = [
//   {
//     name: 'Серфинг',
//     fullName: "Доска для серфинга 8'500 SCHOOL, OLAIAN",
//     costday: 570,
//     costmonth: 7700,
//     category: '611ce50bac5cd02bf109e515',
//     img: 'https://contents.mediadecathlon.com/p1862537/kb84b4d111a3c166a6af1e0df5084f511/1862537_default.jpg',
//   },
//   {
//     name: 'Серфинг',
//     fullName: "Компактная надувная доска SURF 500 6'6, OLAIAN",
//     costday: 570,
//     costmonth: 7700,
//     category: '611ce50bac5cd02bf109e515',
//     img: 'https://contents.mediadecathlon.com/p1996590/k05e14235c6991e8bb1bdd7696e621a1b/1996590_default.jpg',
//   },
//   {
//     name: 'Серфинг',
//     fullName: "Доска для серфинга из пеноматериала 6'500, OLAIAN",
//     costday: 390,
//     costmonth: 4500,
//     category: '611ce50bac5cd02bf109e515',
//     img: 'https://contents.mediadecathlon.com/p1740730/kff9b79b5e73cdaca7387d285a8955a92/doska-dl-serfinga-500-soft-6.jpg',
//   },
//   {
//     name: 'Серфинг',
//     fullName: "Жесткая доска для серфинга EVOLUTIVE 7'2 500, OLAIAN",
//     costday: 640,
//     costmonth: 11500,
//     category: '611ce50bac5cd02bf109e515',
//     img: 'https://contents.mediadecathlon.com/p1517255/k954116739c8f269305e088f7fab17dbb/1517255_default.jpg',
//   },
//   {
//     name: 'Серфинг',
//     fullName: "Доска для серфинга 6' 900 SOFTBOARD, OLAIAN",
//     costday: 450,
//     costmonth: 7200,
//     category: '611ce50bac5cd02bf109e515',
//     img: 'https://contents.mediadecathlon.com/p1740855/k3e879c4ba2c156a37ee33d580cd5419b/1740855_default.jpg',
//   },
// ];



async function main() {
  await mongoose.connect('mongodb://localhost:27017/RentService', {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  await Admin.create({ login: "admin", password: "admin" });
  // await Position.insertMany(positions);
  // await mongoose.disconnect();
}

main();
