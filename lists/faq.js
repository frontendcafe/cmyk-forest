const { Text } = require("@keystonejs/fields");

const FAQ = (keystone) => {
  keystone.createList("faq", {
    fields: {
      question: {
        type: Text,
      },
      answer: {
        type: Text,
        isMultiline: true,
      },
    },
  });
};

module.exports = FAQ;
