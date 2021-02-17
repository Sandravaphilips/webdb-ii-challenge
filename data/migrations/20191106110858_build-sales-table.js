
exports.up = function(knex) {
    return knex.schema.createTable('sales', table => {
        
        table.increments('id');
    
        table.varchar('carId').unique().notNullable();
        table.varchar('salescount');
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales');
};
