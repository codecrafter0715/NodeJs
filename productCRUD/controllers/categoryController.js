const categories = require('../data/categories')
const products = require('../data/products')

const addCategory = (req,res) =>{

    newCat = {
        id:Date.now(),
        name:req.body.name
    }
    categories.push(newCat)
    res.send({message:"Category added successfully",success:true})

}

const getAllCategories  = (req,res) =>{
    res.status(200).send({categories:categories, success:true})
    
}

const getProductsByCategoaryID  = (req,res) =>{
    cat_ID = req.params.ID
    const cat_index = categories.findIndex(c => c.id == cat_ID)

if(cat_index == -1){
    res.status(400).send({message:"Category not found"})
}else{
    const filteredProdByCat = products.filter(p=>p.category_Id == cat_ID);
    if(filteredProdByCat.length > 0){
    res.status(200).send({filteredProdByCat:filteredProdByCat, success:true})
    }else{
    res.status(200).send({message:"Products are not available"})

    }
}
}


const updateCategory  = (req,res) =>{}
const deleteCategory  = (req,res) =>{}

module.exports = {addCategory,
    getAllCategories,
    getProductsByCategoaryID,
    updateCategory,
    deleteCategory}