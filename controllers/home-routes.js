const router = require('express').Router();
const { Animals, Pets } = require('../models');
const withAuth = require('../utils/auth');

// GET all Pets for homepage (cat and dog single group)
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
    // req.session.save(() => {
    //   // We set up a session variable to count the number of times we visit the homepage
    //   if (req.session.countVisit) {
    //     // If the 'countVisit' session variable already exists, increment it by 1
    //     req.session.countVisit++;
    //   } else {
    //     // If the 'countVisit' session variable doesn't exist, set it to 1
    //     req.session.countVisit = 1;
    //   }
      res.render('homepage', {
        pets,
        loggedIn: req.session.loggedIn,
        // We send over the current 'countVisit' session variable to be rendered
        // countVisit: req.session.countVisit,
      });
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all the cats or dogs depending on which pet card was clicked
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
      // We are not incrementing the 'countVisit' session variable here
      // but simply sending over the current 'countVisit' session variable to be rendered
      countVisit: req.session.countVisit,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one animal that has been clicked
router.get('/animals/:id', withAuth, async (req, res) => {
  try {
    const dbAnimalsData = await Animals.findByPk(req.params.id);

    const animals = dbAnimalsData.get({ plain: true });

    res.render('animals', {
      animals,
       loggedIn: req.session.loggedIn,
      // We are not incrementing the 'countVisit' session variable here
      // but simply sending over the current 'countVisit' session variable to be rendered
      countVisit: req.session.countVisit,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
