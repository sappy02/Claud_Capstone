const Property = require('../models/property')  

// const fetchProperties = async(req,res) => {
//     // 1. Find all properties
//     // 2. Return all properties
//     const properties = await Property.find();
//     res.json({properties: properties });
// }

// module.exports = fetchProperties;

const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        res.json({ property });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json({ properties: properties });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {getPropertyById, getAllProperties};
