CREATE TABLE blogs(
    id SERIAL PRIMARY KEY ,
    title VARCHAR(255) NOT NULL ,
    description TEXT NOT NULL ,
    author_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE ,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
-- version2
ALTER TABLE blogs RENAME COLUMN description to content;


-- version 3
ALTER TABLE blogs ADD COLUMN update_at TIMESTAMP NOT NULL DEFAULT NOW();

-- version 4
ALTER TABLE blogs ADD COLUMN is_deleted BOOLEAN NOT NULL DEFAULT FALSE;

-- version 5
ALTER TABLE blogs RENAME COLUMN update_at to updated_at;