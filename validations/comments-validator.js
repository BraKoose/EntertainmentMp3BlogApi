const { check, validationResult } = require("express-validator");

const validationRules = () => {
    return [
        check("body").trim().isLength({ min: 2, }).withMessage("comments must be aleast 2 characters long")
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