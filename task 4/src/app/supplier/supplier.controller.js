const supplierService = require('./supplier.service.js')

const addSupplier = async (req,res,next) => {
    try{
        const {name,contactNumber,supplierId} = req.body;
        const createdSupplier = await supplierService.addSupplier(name,contactNumber,supplierId);
        res.status(201).json({message:"supplier added successfully.",success:true,data:createdSupplier});
    }catch (err){
        next(err)
    }
}

const getAllSuppliers = async (req,res,next) => {
    try {
        const allSuppliers = await supplierService.getAllSuppliers();
        res.status(200).json({message:"All suppliers successfully.",success:true,data:allSuppliers});
    }catch (err){
        next(err)
    }
}

const updateSupplier = async (req,res,next) => {
    try {
        const {name,contactNumber,supplierId} = req.body;
        const updatedSupplier = await supplierService.updateSupplier(name,contactNumber,supplierId);
        res.status(201).json({message:"supplier updated successfully.",success:true,data:updatedSupplier});
    }catch (err){
        next(err)
    }
}

const deleteSupplier = async (req,res,next) => {
    try {
        const {id} = req.params;
        const deletedSupplier = await supplierService.deleteSupplier(id);
        res.status(201).json({message:"supplier deleted successfully.",success:true,data:deletedSupplier});
    }catch (err){
        next(err)
    }
}
module.exports = {addSupplier,getAllSuppliers,updateSupplier,deleteSupplier}