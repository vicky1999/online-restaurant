const mongoose=require('mongoose');

const DishSchema=mongoose.Schema({
    name: String,
    type: String,
    description: String,
    price: String
});

module.exports=mongoose.model("Dishes",DishSchema);