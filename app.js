const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); //For accessing from other domain/server/ by client
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');

//Middlewares
/*app.use('/', () => {
    console.log("This is middleware running");
});*/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/posts', postsRoute);

//Routes    
app.get('/', (req, res) => {
    res.send('Hello world');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, () => console.log("Connected to DB!"));

//listening to the server
app.listen(8000);