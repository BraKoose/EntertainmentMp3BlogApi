const router = require("express").Router();

const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");

const { addOne,
    removeOne,
    updateOne,
    getAll,
    getOne,
    getTopVideos } = require("../controllers/video-controller")


router.get("/videos", async (req, res) => {
    // #swagger.tags = ['Posts']

    await getAll(req, res);
});

router.post("/videos", ensureAuthenticated,
    ensureAuthorized(["admin"]), async (req, res) => {
        /*  #swagger.tags = ['Posts']
       #swagger.security = [{
       "Authorization": []
       }]
       #swagger.parameters['obj'] = {
           in: 'body',
           required: true,
           schema: { $ref: "#/definitions/VideoModel" }
   } */
        await addOne(req, res);
    });


router.put("/videos/:id", ensureAuthenticated,
    ensureAuthorized(["admin"]), async (req, res) => {
        /*  #swagger.tags = ['Posts']
       #swagger.security = [{
       "Authorization": []
       }]
       #swagger.parameters['obj'] = {
           in: 'body',
           required: true,
           schema: { $ref: "#/definitions/VideoModel" }
   } */s
        await updateOne(req, res);
    });

router.get("/videos/:id", async (req, res) => {
    // #swagger.tags = ['Posts']  
    await getOne(req, res);
});

router.delete("/videos/:id", ensureAuthenticated,
    ensureAuthorized(["admin"]), async (req, res) => {
        /*  #swagger.tags = ['Posts']
      #swagger.security = [{
      "Authorization": []
      }]
  */
        await removeOne(req, res);
    });

router.get("/videos/top", async (req, res) => {
    // #swagger.tags = ['Posts']

    await getTopvideos(req, res);
});



module.exports = router;
