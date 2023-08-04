const { Pets } = require('../models');

const petsData = [
  {
    name: 'Cats',
    title: 'Checkout our cats',
    filename: 'Cats_Many_oets_page.jpg',
    description:
          'Beautiful furry friends.'

  },
  {
    name: 'Dogs',
    title: 'Checkout our dogs',
    filename: 'dogs-many-pets-page.jpg',
    description:
          'Dogs are better than humanZ'
  }
];

const seedPets = () => Pets.bulkCreate(petsData);

module.exports = seedPets;
