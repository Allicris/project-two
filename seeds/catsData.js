const { Cat } = require('../models');

const catsData = [
  {

    name: 'Tom',
    age: '2 yo',
    breed: 'British Longhair',
    available: 'true'
  },
  {

    name: 'Kitty',
    age: '1 yo',
    breed: 'Bengal',
    available: 'true'
  },
  {

    name: 'Chewie',
    age: '5 yo',
    breed: 'American Wirehair',
    available: 'true'
  },
  {

    name: 'Cookie',
    age: '9 yo',
    breed: 'Arabian Mau',
    available: 'true'
  },
];

const seedCat = () => Cat.bulkCreate(catsData);

module.exports = seedCat;