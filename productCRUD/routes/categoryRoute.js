const express = require('express');
const CategoryController = require('../controllers/categoryController')

const router = express.Router();

router.get('/getAllCategories',CategoryController.getAllCategories)

router.get('/getProductsByCategoaryID/:ID', CategoryController.getProductsByCategoaryID)

router.post('/addCategory', CategoryController.addCategory)

router.delete('/deleteCategory/:ID', CategoryController.deleteCategory)

router.put('/updateCategory/:ID', CategoryController.updateCategory)


module.exports = router;