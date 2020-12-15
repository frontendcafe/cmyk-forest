exports.up = function (knex) {
  return knex.schema.createTable("stuff", function (table) {
    table.increments();
    table.string("email");
    table.string("password");
    table.string("username");
    table.string("discord_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("stuff");
};
