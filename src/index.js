const express = require('express');
const app = express();
// isitraukiam mongoose
const mongoose = require('mongoose');

const { mongoDbString } = require('./config/config');

// console.log(' mongoDbString', mongoDbString);
// prisijungimas prie duomenu bazes
mongoose.connect(mongoDbString);

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.listen(3000);

app.get('/', (req, res) => res.render('index'));
