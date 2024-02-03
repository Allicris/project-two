const router = require('express').Router();
const { Animals, Pets } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const dbPetsData = await Pets.findAll({
      include: [
        {
          model: Animals,
          attributes: ['filename', 'name'],
        },
      ],
    });
    const pets = dbPetsData.map((pet) =>
      pet.get({ plain: true })
    );
      res.render('homepage', {
        pets,
        loggedIn: req.session.loggedIn,
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/pets/:id', withAuth, async (req, res) => {
  try {
    const dbPetsData = await Pets.findByPk(req.params.id, {
      include: [
        {
          model: Animals,
          attributes: [
            'id',
            'name',
            'age',
            'breed',
            'available',
            'size',            
            'filename',
            'description',
          ],
        },
      ],
    });

    const pets = dbPetsData.get({ plain: true });
    res.render('pets', {
      pets,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/animals/:id', withAuth, async (req, res) => {
  try {
    const dbAnimalsData = await Animals.findByPk(req.params.id);

    const animals = dbAnimalsData.get({ plain: true });

    res.render('animals', {
      animals,
       loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
