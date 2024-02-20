const skill = require("../models/skill");

//display all skills
function index(req, res) {
  res.render("skills/index", { skills: skill.getAll() });
}

//display one skill. call getOne() by passing req.params.id parameter
function show(req, res) {
  res.render("skills/show", { skill: skill.getOne(req.params.id) });
}

module.exports = {
  index,
  show,
};
