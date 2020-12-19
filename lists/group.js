const { Text } = require("@keystonejs/fields");

const Group = (keystone) => {
    return keystone.createList("group", {
        fields: {
            name: {
                type: Text,
            },
        },
    });
};

module.exports = Group;
