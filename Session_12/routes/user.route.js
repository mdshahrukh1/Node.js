const express = require('express');
const { registerUser, loginUser, getallUsers, updateUSerbyID, getUserbyID } = require('../controllers/user.controller');
const router = express.Router();

router.post('/', registerUser);

router.post('/login', loginUser);

router.get('/', getallUsers);

router.get('/:id', getUserbyID);

router.put('/:id', updateUSerbyID);



router.post('/', (req, res)=> {
    res.send('New user Created');
});

router.get('/', (req, res)=> {
    res.send('Get All Users Triggered');
    res.send({message: 'Get All Users Triggered'}); // JSON Data
});

module.exports = router;