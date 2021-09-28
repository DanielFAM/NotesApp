const { Router } = require("express");

const router = Router();
const user = require('../models/users');

router.get('/', async (req, res) => {
    const users = await user.find();
    res.json(users);
});

router.post('/', async (req, res) => {
    const newUser = new user(req.body);
    await newUser.save();
    res.json({ Status: 'User created' });
});


router.delete('/:id', async (req, res) => {
    await user.findByIdAndRemove(req.params.id);
    res.json({ Status: 'User deleted' });
});

module.exports = router;