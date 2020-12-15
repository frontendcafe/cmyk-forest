const Stuff = require("./stuff");
const FAQ = require("./faq");
const Project = require("./project");

const loadLists = (keystone) => {
  Stuff(keystone);
  FAQ(keystone);
  Project(keystone);
};

module.exports = loadLists;
