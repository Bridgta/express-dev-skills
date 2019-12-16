const Skills = [
  { skill: "Learn CSS", done: true }, // id: 'a1' ,
  { skill: "Project in JavaScript", done: true }, // id: 'a2'
  { skill: "Understand Express", done: false } // id: 'a3'
];
const getAll = function() {
  return Skills;
};

function getOne(id) {
  return Skills[id];
  // return todos.find(todo => todo.id === id);
}

function create(skill) {
  // todos.push(todo);
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
