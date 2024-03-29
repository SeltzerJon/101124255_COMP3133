const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurantRoutes');


const app = express();
const port = 3000;

const DB_CONNECTION_STRING = '';
mongoose.connect(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/restaurants', restaurantRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
