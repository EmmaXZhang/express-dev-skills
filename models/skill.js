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

module.exports = {
  getAll,
  getOne,
};
