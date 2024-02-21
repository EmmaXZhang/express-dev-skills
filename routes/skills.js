var express = require("express");
var router = express.Router();
var skillsCtrl = require("../controllers/skills");

/* GET users listing. */
router.get("/", skillsCtrl.index);
//new content
router.get("/new", skillsCtrl.new);
//create new content
router.post("/", skillsCtrl.create);

router.get("/:id", skillsCtrl.show);

//delete
router.delete("/:id", skillsCtrl.delete);

//edit
router.get("/:id/edit", skillsCtrl.edit);
//udpate
router.put("/:id", skillsCtrl.update);

module.exports = router;
