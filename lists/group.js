const { Text, Relationship } = require("@keystonejs/fields");

const Group = (keystone) => {
    return keystone.createList("group", {
        fields: {
            lead: {
                type: Relationship,
                ref: 'user'
            },
            project: {
                type: Relationship,
                ref: 'project'
            },
            stuff_member: {
                type: Relationship,
                ref: 'stuff'
            },
            name: {
                type: Text,
            },
        },
    });
};

module.exports = Group;
