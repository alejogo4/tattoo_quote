const {Router} = require('express');
const router = Router();
const {createUser,addSource,getUser,getUsers} = require("../Controllers/user.controller");

router.route("/")
    .post(createUser)
    .get(getUsers)

router.route("/:id")
    .get(getUser)

router.route("/source").put(addSource);


module.exports = router;