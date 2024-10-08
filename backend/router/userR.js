const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const {registerUser, loginUser, logoutUser, getUsers, getUser, updateUser, deleteUser} = require('../controllers/userC');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/users', getUsers);
router.get('/user/:id', getUser);

module.exports = router;

// router.get('/user/:id', getUser);

