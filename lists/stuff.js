const { Text, Password } = require("@keystonejs/fields");

const Stuff = (keystone) => {
  return keystone.createList("stuff", {
    fields: {
      username: {
        type: Text,
      },
      email: {
        type: Text,
        isUnique: true,
      },
      password: {
        type: Password,
      },
      discord_id: {
        type: Text,
      },
    },
  });
};

module.exports = Stuff;
