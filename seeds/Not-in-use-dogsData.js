const { Dog } = require('../models');

const dogsData = [
  {
    name: 'Abby',
    age: '2 yo',
    breed: 'French Bulldog',
    size: 'small',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.'
  },
  {

    name: 'Basil',
    age: '1 yo',
    breed: 'Labrador Retriever',
    size: 'medium',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.'
  },
  {

    name: 'Buffy',
    age: '5 months',
    breed: 'Alaskan Malamute',
    size: 'large',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.'
  },
  {

    name: 'Coco',
    age: '9 months',
    breed: 'Cavalier King Charles Spaniel',
    size: 'small',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.'
  },
];

const seedDog = () => Dog.bulkCreate(dogsData);

module.exports = seedDog;