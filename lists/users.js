const { Text } = require("@keystonejs/fields");

const Users = (keystone) => {
    return keystone.createList("users", {
        fields: {
            full_name: {
                type: Text,
            },
            email: {
                type: Text,
            },
            role: {
                type: Text,
            },
            skills: {
                type: Text,
                isMultiline: true,
            },
            available_time: {
                type: Select,
                options: "2, 4, 6, 8, 10, 12",
            },
            experience: {
                type: Checkbox,
            },
            github: {
                type: Url,
            },
            linkedin: {
                type: Url,
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
// https://www.keystonejs.com/keystonejs/fields/#fields
