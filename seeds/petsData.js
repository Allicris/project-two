const { Pets } = require('../models');

const petsData = [
  {
    name: 'Cats',
    title: 'checkout our cats',
    filename: 'Cats_Many_oets_page.jpg',
    description:
          'Beautiful furry friends.'

  },
  {
    name: 'Dogs',
    title: 'checkout our dogs',
    filename: 'dogs-many-pets-page.jpg',
    description:
          'dogs are better than humanZ'
  }
];

const seedPets = () => Pets.bulkCreate(petsData);

module.exports = seedPets;
