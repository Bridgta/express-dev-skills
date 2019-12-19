const Skills = [
  { skill: "Learn CSS", done: true },
  { skill: "Project in JavaScript", done: true },
  { skill: "Understand Express", done: false }
];
const getAll = function() {
  return Skills;
};

function getOne(id) {
  return Skills[id];
}

function create(skill) {
  Skills.push({ skill, done: Boolean });
}

function deleteOne(id) {
  Skills.splice(id, 1);
}

function update(id, skill) {
  Skills[id] = skill;
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};
