const { Animals } = require('../models');

const animalData = [
  {
    name: 'Tom',
    age: '2 yr',
    breed: 'British shorthair',
    size: 'medium',
    available: 'true',
    filename: 'brittish-short_hair_cat.jpeg',
    description:
      'Tom is amazing cat. The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, thick coat, and broad face. The most familiar colour variant is the "British Blue", with a solid grey-blue coat, pineapple eyes, and a medium-sized tail.',
    pets_id: 1
  },
  {
    name: 'Kitty',
    age: '1 yr',
    breed: 'Bengal',
    size: 'medium',
    available: 'true',
    filename: 'bengal-cat.jpeg',
    description:
      '',
    pets_id: 1
  },
  {

    name: 'Chewie',
    age: '5 yr',
    breed: 'American Wirehair',
    size: 'medium',
    available: 'true',
    filename: 'american-wirehair-cat.webp',
    description:
      'The American Wirehair is a breed of domestic cat originating in upstate New York, which is characterised by its wiry fur and crinkly whiskers caused by a genetic mutation. As of 2017, though the breed is well-known, it is ranked as the most rare of the 41 Cat Fanciers.',
    pets_id: 1
  },
  {

    name: 'Cookie',
    age: '9 yr',
    breed: 'Arabian Mau',
    size: 'medium',
    available: 'true',
    filename: 'mau-egyptien-cat.jpeg',
    description:
      'Egyptian Maus are a small to medium-sized short-haired cat breed. They are one of the few naturally spotted breeds of domesticated cat. The spots of the Mau occur on only the tips of the hairs of its coat. It is considered a rare breed',
    pets_id: 1
  },
  {
    name: 'Abby',
    age: '2 yr',
    breed: 'French Bulldog',
    size: 'small',
    available: 'true',
    filename: 'French-bulldog.jpeg',
    description:
      'here is a description.',
    pets_id: 2
  },
  {

    name: 'Basil',
    age: '1 yr',
    breed: 'Labrador Retriever',
    size: 'medium',
    available: 'true',
    filename: 'Labradoe Retriver.jpeg',
    description:
      'here is a description.',
    pets_id: 2
  },
  {

    name: 'Buffy',
    age: '5 months',
    breed: 'Alaskan Malamute',
    size: 'large',
    available: 'true',
    filename: 'Alaskan Malamute.jpg',
    description:
      'here is a description.',
    pets_id: 2
  },
  {

    name: 'Coco',
    age: '9 months',
    breed: 'Cavalier King Charles Spaniel',
    size: 'small',
    available: 'true',
    filename: 'cavalier-king-charles.jpeg',
    description:
      'here is a description.',
    pets_id: 2
  },
];

const seedAnimals = () => Animals.bulkCreate(animalData);

module.exports = seedAnimals;