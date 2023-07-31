//const User = require('./User');
//const Cat = require('./Cat');
//const Dog = require('./Dog');
const Animals = require('./Animals');
const Pets = require('./Pets');

Pets.hasMany(Animals, {
  foreignKey: 'pets_id',
});

Animals.belongsTo(Pets, {
  foreignKey: 'pets_id',
});

//module.exports = { User, Pets, Cat, Dog };
module.exports = { Pets, Animals };