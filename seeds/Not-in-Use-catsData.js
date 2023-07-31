const { Cat } = require('../models');

const catsData = [
  {
    name: 'Tom',
    age: '2 yo',
    breed: 'British Longhair',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.'
  },
  {

    name: 'Kitty',
    age: '1 yo',
    breed: 'Bengal',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.'
  },
  {

    name: 'Chewie',
    age: '5 yo',
    breed: 'American Wirehair',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.'
  },
  {

    name: 'Cookie',
    age: '9 yo',
    breed: 'Arabian Mau',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.'
  },
];

const seedCat = () => Cat.bulkCreate(catsData);

module.exports = seedCat;