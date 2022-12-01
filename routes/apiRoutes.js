const router = require('express').Router();
let store = require('../db/db.json');
const fs = require('fs');

//GET 'api/notes'
router.get('/notes', (req, res) => {
    store = JSON.parse(fs.readFileSync('./db/db.json'));
        res.json(store);
});

router.post('/notes', (req, res) => {
    let note = {
        title: req.body.title,
        text: req.body.text,
        id: Math.random()
    }
    store.push(note)
    fs.writeFileSync('./db/db.json', JSON.stringify(store))
    res.json(store)
});

//Add Bonus delete feature

module.exports = router;