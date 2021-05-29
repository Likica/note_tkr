const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const { validateNote } = require('../../lib/notes');

const notes = require('../../db/db.json');
//add GET route
router.get('/notes', function (req, res) {
    res.json(notes);
})

//add post route
router.post('/notes', function (req, res) {
    let request = req.body
    if (validateNote(request) === true) {
        notes.push(request);
        res.json(notes);
        fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes))
    } else {
        res.send(`no note posted`)
    }
})







module.exports = router;