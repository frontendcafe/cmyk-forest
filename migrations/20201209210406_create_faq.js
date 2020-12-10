exports.up = function(knex) {
  return knex.schema.createTable('faq', function(table) {
    table.increments()
    table.string('question')
    table.text('answer')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('faq')
};