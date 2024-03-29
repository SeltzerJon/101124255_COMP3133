
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Restaurant = require('./models/restaurant.js');



const testDataPath = path.join(__dirname, 'testData.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));

const DB_CONNECTION_STRING = '';
mongoose.connect(DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



async function seedDatabase() {
  try {
    await Restaurant.deleteMany({});
    await Restaurant.insertMany(testData);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();
