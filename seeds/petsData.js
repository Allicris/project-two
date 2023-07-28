const { Pets } = require('../models');

const petsData = [
    {
        name: 'Cats',
        title: 'checkout our cats',
        filename: 'placeherepictureofcat.jpg',
        description:
          'here is a description.'

    },
    {
        name: 'Dogs',
        title: 'checkout our dogs',
        filename: 'placeherepictureofdog.jpg',
        description:
          'here is a description.'
    }
];

const seedPets = () => Pets.bulkCreate(petsData);

module.exports = seedPets;
