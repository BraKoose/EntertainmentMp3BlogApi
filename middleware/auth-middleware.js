const passport = require("passport");

const ensureAuthenticated = passport.authenticate("jwt", { session: false });

const ensureAuthorized = (roles) => (req, res, next) => {
    if (roles.includes(req.user.roles)) {
        return next();
    }

    return res.status(401).json({
        message: "Unathorized!",
        success: false
    })
};

module.exports = {
    ensureAuthenticated,
    ensureAuthorized
}