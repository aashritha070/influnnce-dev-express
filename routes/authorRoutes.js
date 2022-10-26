const router = require('express').Router();
const { updateUserData, deleteUserData, updateUserPassword, fetchUserData } = require("../controllers/authorControllers");

router.post('/edit', (req, res) => updateUserData(req, res));

router.post('/delete', (req, res) => deleteUserData(req, res));

router.post('/password', (req, res) => updateUserPassword(req, res));

router.post('/fetch', (req, res) => fetchUserData(req, res));

module.exports = router;