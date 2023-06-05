DROP TABLE IF EXISTS users CASCADE;
-- CREATE USERS
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name: VARCHAR(50) NOT NULL,
  last_name: VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255),
  admin: BOOLEAN DEFAULT FALSE
);