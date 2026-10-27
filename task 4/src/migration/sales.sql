CREATE TABLE sales
(
    id            SERIAL PRIMARY KEY,
    product_id    INT REFERENCES products (id) NOT NULL,
    quantity_sold INT                          NOT NULL DEFAULT 0,
    sale_date     DATE                                  DEFAULT NOW()
)