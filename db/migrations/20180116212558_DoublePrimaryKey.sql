
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
CREATE TABLE test_duplicate (
  id SERIAL PRIMARY KEY,
  second_id SERIAL UNIQUE NOT NULL
);


-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

