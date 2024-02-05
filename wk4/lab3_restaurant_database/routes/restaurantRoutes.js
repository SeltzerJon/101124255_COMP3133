const express = require('express');
const router = express.Router();
const Restaurant = require('./models/restaurant'); 

router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ cuisine: req.params.cuisine });
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/restaurants', async (req, res) => {
  try {
    const sortBy = req.query.sortBy || 'ASC';
    const sortOrder = sortBy === 'ASC' ? 1 : -1;

    const restaurants = await Restaurant.find({})
      .select('_id cuisines name city restaurant_id')
      .sort({ restaurant_id: sortOrder });

    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/restaurants/:cuisine', async (req, res) => {
    try {
      const cuisine = req.params.cuisine;
      const cityToExclude = 'Brooklyn';
  
      const restaurants = await Restaurant.find({
        cuisines: cuisine,
        city: { $ne: cityToExclude }
      })
        .select('cuisines name city -_id')
        .sort({ name: 1 }); 
  
      res.json(restaurants);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  module.exports = router;
