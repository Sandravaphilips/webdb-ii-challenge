
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        
        table.increments('id');
    
        table.varchar('vin', 50).unique().notNullable();
        table.varchar('make', 50).notNullable();
        table.varchar('model').notNullable();
        table.varchar('mileage').notNullable();
        table.text('transmissiontype');
        table.text('status');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('fruits');
};
