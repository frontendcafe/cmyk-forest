const { Text, Select, Checkbox, Url, Relationship } = require("@keystonejs/fields");

const Users = (keystone) => {
    return keystone.createList("user", {
        fields: {

            group: {
                type: Relationship,
                ref: 'group'
            },
            project: {
                type: Relationship,
                ref: 'project'
            },

            full_name: {
                type: Text,
            },

            email: {
                type: Text,
            },

            role: {
                type: Text,
            },
            level: {
                type: Select,
                options: "Level 1 (HTML/CSS/JavaScript), Level 2 (Level 1 + React)",
                dataType: "string"
            },

            skills: {
                type: Text,
                isMultiline: true,
            },
            available_time: {
                type: Select,
                options: "2, 4, 6, 8, 10, 12",
                dataType: "string"
            },
            experience: {
                type: Select,
                options: "Yes, No",
                dataType: "string"
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

            questions: {
                type: Text,
                isMultiline: true,
            },
            about: {
                type: Text,
                isMultiline: true,
            },

        },
    });
};

module.exports = Users;