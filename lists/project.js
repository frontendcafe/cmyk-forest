const { Text, Integer } = require("@keystonejs/fields");

const Project = (keystone) => {
  return keystone.createList("project", {
    fields: {
      name: {
        type: Text,
      },
      max_participants: {
        type: Integer,
      },
      max_substitutes: {
        type: Integer,
      },
      max_leads: {
        type: Integer,
      },
      max_leads_substitutes: {
        type: Integer,
      },
    },
  });
};

module.exports = Project;
