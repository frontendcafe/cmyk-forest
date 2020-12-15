exports.up = function (knex) {
    return knex.schema.createTable('project_detail', function (table) {
        table.increments()
        // table.foreign("group_id").references("id").inTable("groups");
        table.string('name');
        table.text('project_description');
        table.string('board_link');
        table.string('css_framework');
        table.string('repository_link');
        table.string('technical_description');
    })

};

exports.down = function (knex) {
    return knex.schema.dropTable('project_details')
};
