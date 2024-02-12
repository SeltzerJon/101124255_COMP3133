
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Restaurant = require('./models/User');


const testDataPath = path.join(__dirname, 'User.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));


const DB_CONNECTION_STRING = "mongodb+srv://jon:DIfxiDkVY0OQvbWe@cluster0.j4ebflz.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(DB_CONNECTION_STRING, {
useNewUrlParser: true,
 useUnifiedTopology: true,
});

async function seedDatabase() {
  try {
    
    await Restaurant.deleteMany();

    const insertedData = await Restaurant.insertMany(testData);
    console.log('Data inserted successfully:', insertedData);
  } catch (error) {
    console.error('Error seeding database:', error.message);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();