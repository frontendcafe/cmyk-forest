const Stuff = require("./stuff");
const FAQ = require("./faq");
const Project = require("./project");
const Users = require("./users");
const Group = require("./group");
const ProjectDetails = require('./projectDetail')

const loadLists = (keystone) => {
  Stuff(keystone);
  FAQ(keystone);
  Project(keystone);
  Users(keystone);
  Group(keystone);
  ProjectDetails(keystone)
};

module.exports = loadLists;