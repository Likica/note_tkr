const fs = require('fs');
const path = require('path');

// Use lesson from week 11 validateAnimal
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    return true;
}

module.exports = { validateNote };