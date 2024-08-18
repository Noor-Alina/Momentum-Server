/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('workouts', (table) => {
      table.increments('workout_id').primary();
      table.string('workout_name').notNullable();
      table.string('workout_type').notNullable();
      table.string('muscle').notNullable();
      table.string('equipment').notNullable();
      table.enu('difficulty', ['beginner', 'intermediate', 'advanced']).defaultTo('beginner');
      table.text('instructions').notNullable();
      table.string('image_path').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    });
  };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('workouts');
  };
  
