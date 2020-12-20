exports.up = function(knex) {
  return knex.schema.alterTable('user', function (table) {
    table.integer('project').unsigned()
    table.foreign('project').references('project.id')

    table.integer('group').unsigned()
    table.foreign('group').references('group.id')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('user', function(table) {
    table.dropForeign('project')
    table.dropColumn('project')

    table.dropForeign('group')
    table.dropColumn('group')
  })
};