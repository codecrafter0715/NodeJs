const express = require('express');
const router = express.Router();
const brands = require('../controllers/brandsController');

router.get('/getAllBrands', brands.getAllbrands);
router.get('/getBrandByID/:ID', brands.getbrandsByID);
router.post('/addBrand', brands.addbrands);
router.delete('/deleteBrand/:ID', brands.deletebrands);
router.put('/updateBrand/:ID', brands.updatebrands);
router.get('/getBrandsByQuery', brands.getbrandsByQuery);

module.exports = router;
