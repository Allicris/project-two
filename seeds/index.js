const sequelize = require('../config/connection');
const seedAnimals = require('./animalsData');
const seedPets = require('./petsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPets ();

  await seedAnimals();

  process.exit(0);
};

seedAll();