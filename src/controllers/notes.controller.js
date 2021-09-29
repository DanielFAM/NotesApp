const notesCtrl = {};

const Note = require('../models/notes');

notesCtrl.renderNoteForm = (req, res) => {
    res.send('Add note');
};

notesCtrl.createNewNote = async (req, res) => {
    const newNote = new Note(req.body);
    await newNote.save();
    res.json({ Status: 'Note created' });
};

notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.renderEditForm = (req, res) => {
    res.send('render edit form');
};

notesCtrl.updateNote = async (req, res) => {
    await Note.findByIdAndUpdate(req.params.id, req.body);
    res.json({ Status: 'Note updated' });
};

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndRemove(req.params.id);
    res.json({ Status: 'Note deleted' });
};

/*
router.get('/:id', async (req, res) => {
    const Note = await note.findById(req.params.id);
    res.json(Note);
});

});*/

module.exports = notesCtrl;