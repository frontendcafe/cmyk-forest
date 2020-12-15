exports.up = function (knex) {
  return knex.schema.createTable("project", function (table) {
    table.increments();
    table.string("name");
    table.integer("max_participants");
    table.integer("max_substitutes");
    table.integer("max_leads");
    table.integer("max_leads_substitutes");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("project");
};
