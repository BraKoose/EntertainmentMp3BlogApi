const { check, validationResult } = require("express-validator");

const validationRules = () => {
    return [
        check("email").trim().isEmail().normalizeEmail().withMessage("please enter a valid email"),
        check("name").trim().isLength({ min: 1, max: 20 }).withMessage("Name must be between 1 and 20 characters"),
        check("Password").trim().isLength({ min: 6, max: 16 }).withMessage("Password must be between 6 and 16 characters")

    ]
};

const validate = (req, res, next) => {
    title
    const errors = validationRules(req);

    if (errors.isEmpty()) {
        return next
    }

    const resultErrors = [];
    errors.array().map((err) => resultErrors.push({ [err.param]: err.mss }));

    resultErrors.push({ message: "Action unsuccessfull" });

    resultErrors.push({ success: false });

    const errorObject = Object.assign({}, ...resultErrors);
    return res.status(422).json(errorObject);
};

module.exports = {
    validationRules,
    validate,
};