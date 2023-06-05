DROP TABLE IF EXISTS properties CASCADE;
-- CREATE PROJECTS
CREATE TABLE properties (
  id SERIAL PRIMARY KEY,
  principal_address BOOLEAN DEFAULT TRUE,
  street_number INT NOT NULL,
  street_name VARCHAR(50) NOT NULL,
  street_type VARCHAR(20) NOT NULL,
  city VARCHAR(50) NOT NULL,
  province VARCHAR(15) DEFAULT 'BC',
  country VARCHAR(40) DEFAULT 'Canada',
  postal_code VARCHAR (7) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);