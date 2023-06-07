DROP TABLE IF EXISTS bookings CASCADE;
-- CREATE bookings
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
  -- start_date DATE,
  -- end_date DATE,