\c todo

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tasks;

CREATE TABLE users (
    id serial PRIMARY KEY ,
    name text NOT NULL UNIQUE,
    password text NOT NULL
);

CREATE TABLE tasks (
    id serial PRIMARY KEY,
    user_id NOT NULL REFERENCES users ON DELETE CASCADE,
    description text
);



