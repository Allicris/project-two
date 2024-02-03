const User = require('./User');
const Animals = require('./Animals');
const Pets = require('./Pets');

Pets.hasMany(Animals, {
  foreignKey: 'pets_id',
});

Animals.belongsTo(Pets, {
  foreignKey: 'pets_id',
});

module.exports = { User, Pets, Animals };