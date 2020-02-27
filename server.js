const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')


const app = express();

// BodyParser Middleware

app.use(bodyParser.json());



// DB Config

const db = require('./config/keys').mongoURL;

// connect to mongodb
mongoose
.connect(db)
.then(()=> console.log('MongoDB Connected....'))
.catch(err => console.log(err));

// Use Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server Started on port ${port}`));