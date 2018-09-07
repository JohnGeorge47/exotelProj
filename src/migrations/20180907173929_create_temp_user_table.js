exports.up = function(knex, Promise) {
  return knex.schema.createTable("temp_user", function(t) {
    t.increments("id").primary();
    t.string("username").notNullable();
    t.string("otp");
    t.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {};
