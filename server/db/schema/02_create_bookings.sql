DROP TABLE IF EXISTS bookings CASCADE;
-- CREATE PROJECTS
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  start_date DATE,
  end_date DATE,
  description VARCHAR(255),
  property_id INTEGER REFERENCES property(id) ON DELETE CASCADE
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);