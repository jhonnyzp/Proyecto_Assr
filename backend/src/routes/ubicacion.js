const {Router} = require("express");
const router = Router();
const{ getUbicacion} =  require("../controller/ubicacion.controller");

router.get('/', getUbicacion);

module.exports = router;