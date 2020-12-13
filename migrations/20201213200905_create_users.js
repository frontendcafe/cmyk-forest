exports.up = function (knex) {
    return knex.schema.createTable("users", function (table) {
        table.increments("id").primary();
        // I'm not sure if this is the right way of adding FK but I leave them here just in case:

        // table.foreign("project_id").references("id").inTable("projects");
        // table.foreign("group_id").references("id").inTable("groups");

        table.string("full_name");
        table.string("email");
        table.string("role");
        table.string("skills");
        table.integer("available_time");
        table.boolean("experience");
        table.string("github");
        table.string("linkedin");
        table.string("discord_id");
        table.text("about");
        table.text("questions");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("users");
};
