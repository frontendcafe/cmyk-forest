exports.up = function(knex) {
  return knex.schema.alterTable('group', function (table) {
    table.integer('lead').unsigned()
    table.foreign('lead').references('user.id')

    table.integer('project').unsigned()
    table.foreign('project').references('project.id')

    table.integer('stuff_member').unsigned()
    table.foreign('stuff_member').references('stuff.id')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('user', function(table) {
    table.dropForeign('lead')
    table.dropColumn('lead')

    table.dropForeign('project')
    table.dropColumn('project')

    table.dropForeign('stuff_member')
    table.dropColumn('stuff_member')
  })
};