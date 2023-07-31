const express = require('express');
const { Cat } = require('../models');

const app = express();

//think these only have to be on the server.js file - just the const app needs to be here.
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
//app.use(express.static('public'));

 // GET all cats for cat page
 app.get('/api/cat', async (req, res) => {
   try {
     const catData = await Cat.findAll({
      // needed for handlebars?
       include: [
        {
          model: Cat,
          attributes: [
            'id',
            'name',
            'age',
            'breed',
            'available',
            'pet_id',
            'filename',
            'description'
          ]
        }
      ]
    });

  //getting data ready for  handlebars
     const cats = catData.map((cat) =>
       cat.get({ plain: true })
     );

  //handlebars
     res.render('homepage', {
       cats,
       loggedIn: req.session.loggedIn,
     });
   } catch (err) {
     console.log(err);
     res.status(500).json(err);
   }
 });

 // GET one cat
app.get('api/cat/:id', async (req, res) => {

   // If the user is not logged in, redirect the user to the login page
   if (!req.session.loggedIn) {
     res.redirect('/login');
   } else {
     // If the user is logged in, allow them to view the cats
     try {
       const catData = await Cat.findByPk(req.params.id, {
          include: [
            {
              model: Cat,
              attributes: [
                'id',
            'name',
            'age',
            'breed',
            'available',
            'pet_id',
            'filename',
            'description'
              ]
            }
          ]
       });
      
       const cat = catData.get({ plain: true });
       res.render('cat', { cat, loggedIn: req.session.loggedIn });
     } catch (err) {
       console.log(err);
       res.status(500).json(err);
     }
   }
 });

 app.put('/:id', async (req, res) => {
  const catData = await Cat.update(
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

  return res.json(catData);
});

 app.get('/login', (req, res) => {
   if (req.session.loggedIn) {
     res.redirect('/');
     return;
   }

   res.render('login');
 });

module.exports = catroutes;
