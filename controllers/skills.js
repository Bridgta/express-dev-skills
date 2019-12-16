const Skills = require("../models/skill");

// const index = (req, res) => {
//     res.render(skills/index, {
//         skills: Skills.getAllSkills()
//     });
// }

const index = (req, res) => {
  console.log(req.query);
  3;
  res.render("skills/index", {
    skills: Skills.getAll(),
    reqTime: req.time
  });
};

const show = (req, res) => {
  const skill = skill.getOne(req.params.id);
  if (skill) {
    res.render("skills/show", {
      skill,
      skillId: req.params.id,
      skillNum: parseInt(req.params.id) + 1
    });
  } else {
    res.redirect("/skills");
  }
};

const newSkill = (req, res) => {
  res.render("skills/new");
};

const create = (req, res) => {
  Skill.create(req.body.skill);
  res.redirect("/skills");
};

const deleteSkill = (req, res) => {
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
};

const update = (req, res) => {
  Skill.update(req.params.id, req.body);
  res.redirect("/skills/" + req.params.id);
};

const edit = (req, res) => {
  const skill = Skill.getOne(req.params.id);
  if (skill) {
    res.render("skills/edit", {
      skill,
      skillId: req.params.id,
      skillNum: parseInt(req.params.id) + 1
    });
  } else {
    res.redirect("/skills");
  }
};

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};
