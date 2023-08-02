const { Animals } = require('../models');

const animalData = [
  {
    name: 'Tom',
    age: '2 yr',
    breed: 'British shorthair',
    size: 'medium',
    available: 'true',
    filename: '/cats/british-cat.jpg',
    description:
      'Tom is amazing cat.',
    pets_id: 1
  },
  {
    name: 'Kitty',
    age: '1 yr',
    breed: 'Bengal',
    size: 'medium',
    available: 'true',
    filename: '/cats/bengal-cat.jpg',
    description:
      '',
    pets_id: 1
  },
  {

    name: 'Chewie',
    age: '5 yr',
    breed: 'American Wirehair',
    size: 'medium',
    available: 'true',
    filename: '/cats/american-cat-1.jpg',
    description:
      'The American Wirehair is a breed of domestic cat originating in upstate New York',
    pets_id: 1
  },
  {

    name: 'Cookie',
    age: '9 yr',
    breed: 'Arabian Mau',
    size: 'medium',
    available: 'true',
    filename: '/cats/mau-cat.jpg',
    description:
      'Egyptian Maus are a small to medium-sized. They are one of the few naturally spotted breeds of domesticated cat.',
    pets_id: 1
  },
  {
    name: 'Abby',
    age: '2 yr',
    breed: 'French Bulldog',
    size: 'small',
    available: 'true',
    filename: '/dogs/French-bulldog.jpeg',
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
    filename: '/dogs/Labrador-Retriever.jpeg',
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
    filename: '/dogs/Alaskan-Malamute.jpg',
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
    filename: '/dogs/cavalier-king-charles.jpeg',
    description:
      'here is a description.',
    pets_id: 2
  },
];

const seedAnimals = () => Animals.bulkCreate(animalData);

module.exports = seedAnimals;