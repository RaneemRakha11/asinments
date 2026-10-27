CREATE TABLE users
(
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(255) NOT NULL,
    email      VARCHAR(255) NOT NULL UNIQUE CHECK ( position('@' IN email) > 0 ),
    pass_hash  VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- version 2
ALTER TABLE users ADD COLUMN updated_at TIMESTAMP DEFAULT NOW();