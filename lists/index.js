const Stuff = require("./stuff");
const FAQ = require("./faq");
const Project = require("./project");
const Users = require("./users");

const loadLists = (keystone) => {
  Stuff(keystone);
  FAQ(keystone);
  Project(keystone);
  Users(keystone);
};

module.exports = loadLists;
