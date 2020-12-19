exports.up = function (knex) {
    return knex.schema.createTable("group", function (table) {
        table.increments();
        table.string("name");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("group");
};
