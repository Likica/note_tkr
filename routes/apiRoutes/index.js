const router = require('express').Router();
//add notesRoute
const notesRoute = require('./notesRoute');

router.use(notesRoute);

//export module
module.exports = router
