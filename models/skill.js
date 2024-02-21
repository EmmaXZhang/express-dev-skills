const skills = [
  {
    id: 1,
    name: "Program languages",
    level: "Medium Level",
  },
  {
    id: 2,
    name: "Problem solving",
    level: "Advanced Level",
  },
  {
    id: 3,
    name: "Verson control",
    level: "Medium Level",
  },
  {
    id: 4,
    name: "Web development",
    level: "Advanced Level",
  },
];

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function create(newSkill) {
  //assign new id to req.body's id
  newSkill.id = skills.length + 1;
  //create new skill to database
  skills.push(newSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  const index = skills.findIndex((skill) => skill.id === id);
  skills.splice(index, 1);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};
