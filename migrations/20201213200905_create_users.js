exports.up = function (knex) {
    return knex.schema.createTable("user", function (table) {
        table.increments("id").primary();

        table.string("full_name");
        table.string("email");
        table.string("role");
        table.text("skills");
        table.integer("available_time");
        table.boolean("experience");
        table.string("github");
        table.string("linkedin");
        table.string("discord_id");
        table.text("about");
        table.text("questions");
        table.text("level");

    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("users");
};
