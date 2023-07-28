const sequelize = require('../config/connection');
const seedCat = require('./catsData');
const seedDog = require('./dogsData');
const seedPets = require('./petsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCat();

  await seedDog();

  await seedPets ();

  process.exit(0);
};

seedAll();