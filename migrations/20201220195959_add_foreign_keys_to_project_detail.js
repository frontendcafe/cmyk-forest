exports.up = function (knex) {
  return knex.schema.alterTable("project_detail", function (table) {
    table.integer("group").unsigned();
    table.foreign("group").references("group.id");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("project_detail", function (table) {
    table.dropForeign("group");
    table.dropColumn("group");
  });
};
