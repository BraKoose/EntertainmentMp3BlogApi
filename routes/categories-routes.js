const router = require("express").Router();

const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");

const { addOne,
    removeOne } = require("../controllers/comments-controller")




router.post("/comment", ensureAuthenticated, async (req, res) => {
    await addOne(req, res);
});





router.delete("/categories/:id", ensureAuthenticated, async (req, res) => {
    await removeOne(req, res);
});


module.exports = router;