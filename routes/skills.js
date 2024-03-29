var express = require("express");
var router = express.Router();

const skillCtrl = require("../controllers/skills");

/* GET users listing. */
router.get("/", skillCtrl.index);
router.get("/new", skillCtrl.new);
router.get("/:id", skillCtrl.show);
router.get("/:id/edit", skillCtrl.edit);
router.post("/", skillCtrl.create);
router.delete("/:id", skillCtrl.delete);
router.put("/:id", skillCtrl.update);

module.exports = router;
