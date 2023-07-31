const sequelize = require('../config/connection');
//const seedCat = require('./catsData');
const seedAnimals = require('./animalsData');
const seedPets = require('./petsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  //await seedCat();

  await seedPets ();

  await seedAnimals();

  process.exit(0);
};

seedAll();