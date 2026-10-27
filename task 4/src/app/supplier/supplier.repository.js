const pool = require('../../common/db/db.js')

const findSupplierById = async (id) => {
    const {rows} = await pool.query(`SELECT *
                                     FROM suppliers
                                     WHERE id = $1`, [id]);
    return rows[0];
}

const addSupplier = async (name, contactNumber) => {
    const {rows} = await pool.query(`INSERT INTO suppliers (name, contact_number)
                                     VALUES ($1, $2) RETURNING id,name,contact_number`, [name, contactNumber]);
    return rows[0];
}

const getAllSuppliers = async () => {
    const {rows} = await pool.query(`SELECT *
                                     FRom suppliers
                                     ORDER BY id`);
    return rows;
}

const updateSupplier = async (name, contactNumber, id) => {
    const {rows} = await pool.query(`UPDATE suppliers
                                     SET name           = $1,
                                         contact_number = $2
                                     WHERE id = $3 RETURNING id ,name,contact_number`, [name, contactNumber, id]);
    return rows[0]
}

const deleteSupplier = async (id) => {
    const {rows} = await pool.query(`DELETE
                FROM suppliers
                WHERE id = $1 RETURNING id,name,contact_number`, [id]);
    return rows[0];
}
module.exports = {findSupplierById, addSupplier, getAllSuppliers, updateSupplier , deleteSupplier}