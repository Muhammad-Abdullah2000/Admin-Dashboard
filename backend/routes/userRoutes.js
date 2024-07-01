const express = require("express");
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const { createUser, loginUser } = require('../controller/userController');
const User = require('../models/User');


router.route('/createuser').post(createUser);

router.route('/login').post(loginUser);

router.post('/getuser', fetchuser, async (req, res) => {

    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router