const skill = require("../models/skill");

//display all skills
function index(req, res) {
  res.render("skills/index", { skills: skill.getAll() });
}

//display one skill. call getOne() by passing req.params.id parameter
function show(req, res) {
  res.render("skills/show", { skill: skill.getOne(req.params.id) });
}

function newSkill(req, res) {
  res.render("skills/new", { title: "New Skill" });
}

function create(req, res) {
  //create new content to database
  skill.create(req.body);
  //back to list of skills
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  //delete from database
  skill.deleteOne(req.params.id);
  //back to list of skills
  res.redirect("/skills");
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
};
