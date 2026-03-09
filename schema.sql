-- Create country table for country-api-postgres
CREATE TABLE IF NOT EXISTS country (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  capital VARCHAR(255),
  currency VARCHAR(100)
);
