const brands = require('../data/brands');


function addbrands(req, res) {
    const bName = req.body.brand_name;
    const brand_i = brands.findIndex(b => b.brand_name.toLowerCase() === bName.toLowerCase());

    if (brand_i === -1) {
        const newBrand = {
            id: Date.now(),  // Use `id` to match your `brands` array
            brand_name: bName
        };
        brands.push(newBrand);
        res.status(201).send({ message: "Brand added successfully", success: true });
    } else {
        res.status(400).send({ message: "Brand already exists", success: false });
    }
}
function getAllbrands(req, res) {
    res.status(200).send({ brands, success: true });
}

function getbrandsByID(req, res) {
    const id = parseInt(req.params.ID);
    const brand = brands.find(b => b.id === id);
    if (!brand) {
        res.status(404).send({ message: "Brand not found", success: false });
    } else {
        res.status(200).send({ brand, success: true });
    }
}

function updatebrands(req, res) {
    const id = parseInt(req.params.ID);
    const index = brands.findIndex(b => b.id === id);
    if (index === -1) {
        return res.status(404).send({ message: "Brand not found", success: false });
    }
    brands[index].brand_name = req.body.brand_name;
    res.send({ message: "Brand updated", success: true });
}

function deletebrands(req, res) {
    const id = parseInt(req.params.ID);
    const index = brands.findIndex(b => b.id === id);
    if (index === -1) {
        return res.status(404).send({ message: "Brand not found", success: false });
    }
    brands.splice(index, 1);
    res.send({ message: "Brand deleted", success: true });
}

function getbrandsByQuery(req, res) {
    const name = req.query.name?.toLowerCase();
    const filtered = brands.filter(b => b.brand_name.toLowerCase().includes(name));
    res.send({ brands: filtered, success: true });
}

module.exports = {
    addbrands,
    getAllbrands,
    getbrandsByID,
    updatebrands,
    deletebrands,
    getbrandsByQuery
};
