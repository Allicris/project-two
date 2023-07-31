const { Animals } = require('../models');

const animalData = [
  {
    name: 'Tom',
    age: '2 yr',
    breed: 'British Longhair',
    size: 'medium',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.',
    pets_id: 1
  },
  {

    name: 'Kitty',
    age: '1 yr',
    breed: 'Bengal',
    size: 'medium',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.',
    pets_id: 1
  },
  {

    name: 'Chewie',
    age: '5 yr',
    breed: 'American Wirehair',
    size: 'medium',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.',
    pets_id: 1
  },
  {

    name: 'Cookie',
    age: '9 yr',
    breed: 'Arabian Mau',
    size: 'medium',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.',
    pets_id: 1
  },
  {
    name: 'Abby',
    age: '2 yr',
    breed: 'French Bulldog',
    size: 'small',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.',
    pets_id: 2
  },
  {

    name: 'Basil',
    age: '1 yr',
    breed: 'Labrador Retriever',
    size: 'medium',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.',
    pets_id: 2
  },
  {

    name: 'Buffy',
    age: '5 months',
    breed: 'Alaskan Malamute',
    size: 'large',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.',
    pets_id: 2
  },
  {

    name: 'Coco',
    age: '9 months',
    breed: 'Cavalier King Charles Spaniel',
    size: 'small',
    available: 'true',
    filename: 'placeherepictureofdog.jpg',
    description:
      'here is a description.',
    pets_id: 2
  },
];

const seedAnimals = () => Animals.bulkCreate(animalData);

module.exports = seedAnimals;