const express = require("express");
const { createImage, getImages, photo,getImageById } = require("../controllers/image");
const { getUserById } = require("../controllers/user");
const router = express.Router();


router.param("userId",getUserById);
router.param("imageId",getImageById);

router.post("/image/create/:userId",createImage);
router.get("/image/getimages",getImages);
router.get("/image/photo/:imageId",photo);


module.exports = router;

