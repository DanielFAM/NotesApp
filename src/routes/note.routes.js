const { Router } = require("express");

const router = Router();
const note = require('../models/notes');

router.get('/', async (req, res) => {
    const notes = await note.find();
    res.json(notes);
});

router.get('/:id', async (req, res) => {
    const Note = await note.findById(req.params.id);
    res.json(Note);
});

router.post('/', async (req, res) => {
    const newNote = new note(req.body);
    await newNote.save();
    res.json({ Status: 'Note created' });
});

router.put('/:id', async (req, res) => {
    await note.findByIdAndUpdate(req.params.id, req.body);
    res.json({ Status: 'Note updated' });
});

router.delete('/:id', async (req, res) => {
    await note.findByIdAndRemove(req.params.id);
    res.json({ Status: 'Note deleted' });
});

module.exports = router;