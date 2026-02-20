CREATE TABLE IF NOT EXISTS restaurants (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

INSERT INTO restaurants (name) VALUES ('Kebapçı'), ('Cafe'), ('Pastane');