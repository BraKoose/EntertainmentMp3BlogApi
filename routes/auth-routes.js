const router = require("express").Router();

const { ensureAuthenticated } = require("../middleware/auth-middleware");

const { login,
    register,
    verify,
    forgotPassword,
    resetPassword,
    changePassword
} = require("../controllers/auth-controller");

const { validationRules,
    validate } = require("../validations/user-validator")

const { validationRules: passwordValidationRules,
    validate: passwordValidate } = require("../validations/change-password-validator");

router.post("/login", async (req, res) => {
    /*
   #swagger.tags = ['Auth']
  #swagger.parameters['obj'] ={
      in: 'body',
      required: true,
      scheme:{$ref: '#/definitions/LoginModel'}
  }
*/
    await login(req.body, res);
});

router.post("/register", validationRules(), validate, async (req, res) => {
    /*  #swagger.tags = ['Auth']
        #swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/RegisterModel" }
    } */

    await register(req.body, "user", res);
});

router.post("/verify", async (req, res) => {
    /*  #swagger.tags = ['Auth']
      #swagger.parameters['obj'] = {
          in: 'body',
          required: true,
          schema: { $ref: "#/definitions/VerifyEmailModel" }
  } */
    await verify(req.body, res);
});

router.post("/forgotPassword", async (req, res) => {
    /*  #swagger.tags = ['Auth']
      #swagger.parameters['obj'] = {
          in: 'body',
          required: true,
          schema: { $ref: "#/definitions/ForgotPassWordModel" }
  } */
    await forgotPassword(req.body, res);
});

router.post("/resetPassword", async (req, res) => {
    /*  #swagger.tags = ['Auth']
       #swagger.parameters['obj'] = {
           in: 'body',
           required: true,
           schema: { $ref: "#/definitions/ResetPasswordModel" }
   } */

    await resetPassword(req.body, res);
});

router.post("/changePassword", ensureAuthenticated, async (req, res) => {
    /*  #swagger.tags = ['Auth']
      #swagger.security = [{
      "Authorization": []
      }]
      #swagger.parameters['obj'] = {
          in: 'body',
          required: true,
          schema: { $ref: "#/definitions/ChangePasswordModel" }
  } */
    await changePassword(req.body, res);
});

module.exports = router;