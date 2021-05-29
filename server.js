//dependencies
const express = require('express');
//initiate server
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes/index');
const htmlRoutes = require('./routes/htmlRoutes/index');

//MIDDLEWARE
//parse incoming string or array of data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//add static to include css and js files within PUBLIC folder along with html
app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`API Server now on port ${PORT}!`);
});
