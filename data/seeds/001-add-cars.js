
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: "123QWE456RTY789UI", make: "Honda", model: "Civic", mileage: 30000, transmissiontype: "automatic", status: "clean"},
        {vin: "980MNB765VCX432XZ", make: "Toyota", model: "Camry", mileage: 60000, transmissiontype: "automatic", status: "salvage"},
        {vin: "567FHG383SLS283ER", make: "Audi", model: "A4", mileage: 30000, transmissiontype: "automatic", status: "clean"},
      ]);
    });
};
