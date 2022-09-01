const {Router} = require("express");
const router = Router();
const{ getDispositivo} =  require("../controller/dispositivo.controller");

router.get('/', getDispositivo);

module.exports = router;