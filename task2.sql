CREATE TABLE objects (
    id SERIAL PRIMARY KEY,
    time_stamp TIMESTAMP,
    parent INTEGER,
    FOREIGN KEY (parent) REFERENCES objects(id)
);


CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    object_id INTEGER UNIQUE,
    server VARCHAR(255),
    email VARCHAR(255),
    FOREIGN KEY (object_id) REFERENCES objects(id)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    contact_id INTEGER,
    name VARCHAR(255),
    FOREIGN KEY (contact_id) REFERENCES contacts(id)
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    object_id INTEGER,
    address TEXT,
    FOREIGN KEY (object_id) REFERENCES objects(id)
);
