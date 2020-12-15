const Stuff = require("./stuff");
const FAQ = require("./faq");

const loadLists = (keystone) => {
  Stuff(keystone);
  FAQ(keystone);
};

module.exports = loadLists;
