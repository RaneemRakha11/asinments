const pool = require('../../common/db/db.js')

const createProduct = async (price, name, stock, supplierId) => {
    const {rows} = await pool.query(`INSERT INTO products (price, name, stock, supplier_id)
                                     VALUES ($1, $2, $3,
                                             $4) RETURNING id,name,price,supplier_id `, [price, name, stock, supplierId]);
    return rows[0];
}
const getAllProducts = async () => {
    const {rows} = await pool.query(`SELECT *
                                     FROM products ORDER BY id`);
    return rows;
}

const getProductById = async (id) => {
    const {rows} = await pool.query(`SELECT *
                                     FROM products
                                     WHERE id = $1`, [id]);
    return rows[0];
}
const updateProduct = async (name, price, stock, id) => {
    const {rows} = await pool.query(`UPDATE products
                                     SET name  = $1,
                                         price = $2,
                                         stock = $3
                                     WHERE id = $4 RETURNING id,name,stock,supplier_id`, [name, price, stock, id]);
    return rows[0];
}

const deleteProduct = async (id) => {
   const {rows} = await pool.query(`DELETE
                FROM products
                WHERE id = $1 RETURNING id, name, price, stock, supplier_id`, [id]);
   return rows[0];
}

module.exports = {createProduct, getAllProducts, getProductById, updateProduct,deleteProduct}