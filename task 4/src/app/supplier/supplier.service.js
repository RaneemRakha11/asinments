const supplierRepository = require('./supplier.repository.js')

const addSupplier = async (name,contactNumber,supplierId) => {
    const supplierExist = await supplierRepository.findSupplierById(supplierId)
    if(supplierExist){
        throw new Error('supplier already exists')
    }
    const createdSupplier = await supplierRepository.addSupplier(name,contactNumber);
    return createdSupplier;
}

const getAllSuppliers = async () => {
    const allSupplier = await supplierRepository.getAllSuppliers()
    return allSupplier;
}

const updateSupplier = async (name,contactNumber,supplierId) => {
    const supplierExist = await supplierRepository.findSupplierById(supplierId)
    if(!supplierExist){
        throw new Error(`supplier not found`)
    }
    const updatedSupplier = await supplierRepository.updateSupplier(name,contactNumber,supplierId);
    return updatedSupplier;
}

const deleteSupplier = async (supplierId) => {
    const supplierExist = await supplierRepository.deleteSupplier(supplierId);
    if(!supplierExist){
        throw new Error(`supplier not found`)
    }
    return supplierExist
}

module.exports = {addSupplier, getAllSuppliers, updateSupplier,deleteSupplier};