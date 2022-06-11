const { check, validationResult } = require("express-validator");

const validationRules = () => {
    return [
        check("title").trim().isLength({ min: 2, max: 256 }).withMessage("title must be between 2 and 256 characters long"),
        check("body").trim().isLength({ min: 2, max: 356 }).withMessage("body must be between 2 and 356 characters long")
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