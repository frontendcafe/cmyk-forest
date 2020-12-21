const { Text, Url, Relationship } = require("@keystonejs/fields");

const ProjectDetails = (keystone) => {
  keystone.createList("project_detail", {
    fields: {
      group: {
        type: Relationship,
        ref: "group",
      },
      name: {
        type: Text,
      },
      product_description: {
        type: Text,
        isMultiline: true,
      },
      board_link: {
        type: Url,
      },
      css_framework: {
        type: Text,
      },
      repository_link: {
        type: Url,
        isUnique: true,
      },
      technical_description: {
        type: Text,
        isMultiline: true,
      },
    },

    plural: "Project Details",
  });
};

module.exports = ProjectDetails;
