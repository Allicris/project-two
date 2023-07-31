const express = require('express');
const { Dog } = require('../models');
const withAuth = require("../utils/auth");

const app = express();

//think these only have to be on the server.js file - just the const app needs to be here.
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
//app.use(express.static('public'));

 // GET all cats for cat page
 app.get('/api/dog', async (req, res) => {
   try {
     const dogData = await Dog.findAll({
      // needed for handlebars?
       include: [
        {
          model: Dog,
          attributes: [
            'id',
            'name',
            'age',
            'breed',
            'size',
            'available',
            'pet_id',
            'filename',
            'description'
          ]
        }
      ]
    });

  //getting data ready for  handlebars
     const dog = dogData.map((dog) =>
       dog.get({ plain: true })
     );

  //handlebars
     res.render('homepage', {
       dog,
       loggedIn: req.session.loggedIn,
     });
   } catch (err) {
     console.log(err);
     res.status(500).json(err);
   }
 });

 // GET one cat
 app.get('api/dog/:id', withAuth, async (req, res) => {
     try {
       const dog = await Dog.findByPk(req.params.id, {
          include: [
            {
              model: Dog,
              attributes: [
                'id',
            'name',
            'age',
            'breed',
            'available',
            'size',
            'pet_id',
            'filename',
            'description'
              ]
            }
          ]
       });
      
       const dogData = dog.get({ plain: true });
       res.render('dog', { dog, loggedIn: req.session.loggedIn });
     } catch (err) {
       console.log(err);
       res.status(500).json(err);
     }
   }
 );

 app.put('/:id', async (req, res) => {
  const dog = await Dog.update(
    {
      name: req.body.name,
      age: req.body.age,
      breed: req.body.breed,
      available: req.body.available,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(dog);
});

 app.get('/login', (req, res) => {
   if (req.session.loggedIn) {
     res.redirect('/');
     return;
   }

   res.render('login');
 });

module.exports = dogroutes;
