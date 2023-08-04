const { Animals } = require('../models');

const animalData = [
  {
    name: 'Tom',
    age: '2 yr',
    breed: 'British Shorthair',
    size: 'Medium',
    available: 'Maybe not, maybe yes.Who knows 🐈?',
    filename: '/animals/british-cat.jpg',
    description:
      'Tom is amazing cat. Affectionate, easy-going, and calm.',
    pets_id: 1
  },
  {
    name: 'Kitty',
    age: '1 yr',
    breed: 'Bengal',
    size: 'Medium',
    available: 'Yes',
    filename: '/animals/bengal-cat.jpg',
    description:
      'Bengal cats are beautiful, wild-looking, and smart cats.',
    pets_id: 1
  },
  {

    name: 'Chewie',
    age: '5 yr',
    breed: 'American Wirehair',
    size: 'Medium',
    available: 'Reserved',
    filename: '/animals/american-cat-1.jpg',
    description:
      'The American Wirehair is a breed of domestic cat originating in upstate New York',
    pets_id: 1
  },
  {

    name: 'Cookie',
    age: '9 yr',
    breed: 'Arabian Mau',
    size: 'Medium',
    available: 'Application processing',
    filename: '/animals/mau-cat.jpg',
    description:
      'Egyptian Maus are a small to medium-sized. They are one of the few naturally spotted breeds of domesticated cat.',
    pets_id: 1
  },
  {
    name: 'Abby',
    age: '2 yr',
    breed: 'French Bulldog',
    size: 'Small',
    available: 'No',
    filename: '/animals/French-bulldog.jpeg',
    description:
      'This breed is lively, lovable, and playful. ',
    pets_id: 2
  },
  {

    name: 'Basil',
    age: '1 yr',
    breed: 'Labrador Retriever',
    size: 'Medium',
    available: 'Yes',
    filename: '/animals/Labrador-Retriever.jpeg',
    description:
      'Labs are known for their intelligence, fine character, and good temperament.',
    pets_id: 2
  },
  {

    name: 'Buffy',
    age: '5 months',
    breed: 'Alaskan Malamute',
    size: 'Large',
    available: 'Accepting applications',
    filename: '/animals/Alaskan-Malamute.jpg',
    description:
      'Friendly, loyal, playful, affectionate, bright, courageous',
    pets_id: 2
  },
  {

    name: 'Coco',
    age: '9 months',
    breed: 'Cavalier King Charles Spaniel',
    size: 'Small',
    available: 'Yes',
    filename: '/animals/cavalier-king-charles.jpeg',
    description:
      'Playful, affectionate, patient, graceful, sociable, gentle',
    pets_id: 2
  },
];

const seedAnimals = () => Animals.bulkCreate(animalData);

module.exports = seedAnimals;