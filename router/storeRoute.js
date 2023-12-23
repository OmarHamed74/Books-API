var express = require("express");
var router = express.Router();
var storeCon = require("../controller/storeController");

router.get("/stores", storeCon.getStoreList);
router.post("/stores/save", storeCon.saveStore);

module.exports = router;
