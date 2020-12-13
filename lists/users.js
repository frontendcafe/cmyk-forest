const { Text } = require("@keystonejs/fields");

const Users = (keystone) => {
    return keystone.createList("users", {
        fields: {
            full_name: {
                type: Text,
            },
            email: {
                type: Text,
                isUnique: true,
            },
            role: {
                type: Text,
            },
            skills: {
                type: Text,
                isMultiline: true,
            },
            available_time: {
                type: Text,
            },
            experience: {
                type: Text,
            },
            github: {
                type: Text,
            },
            linkedin: {
                type: Text,
            },
            discord_id: {
                type: Text,
            },
            about: {
                type: Text,
                isMultiline: true,
            },
            questions: {
                type: Text,
                isMultiline: true,
            },
        },
    });
};

module.exports = Users;

// Documentation on field types :
// https://www.keystonejs.com/blog/field-types
