
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
CREATE TABLE test_user (
  id SERIAL PRIMARY KEY,
  email VARCHAR(256) UNIQUE NOT NULL,
  password VARCHAR(2000) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back
DROP TABLE weather;
