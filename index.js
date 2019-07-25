const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
// Database setup
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true, useCreateIndex: true }).then(() => console.log('connected'));
// Middlewares setup
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// If we are in production serve our clients build folder. This folder is creat in roduction only
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
// Routes Setup
const routes = require('./routes');
app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => { console.log(`server started on port ${PORT}`) })