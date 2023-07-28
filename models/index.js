const User = require('./User');
const Cat = require('./Cat');
const Dog = require('./Dog');
const Pets = require('./Pets')

Pets.hasMany(Cat, {
    foreignKey: 'pets_id',
});

Pets.hasMany(Dog, {
    foreignKey: 'pets_id',
});


Cat.belongsTo(Pets, {
    foreignKey: 'pets_id',
});

Dog.belongsTo(Pets, {
    foreignKey: 'pets_id',
});

module.exports = { User, Pets, Cat, Dog };
