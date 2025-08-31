import axios from "axios"

function getproducts(){
    return axios.get("https://dummyjson.com/products")
    //const inventory=token.then((data) => {return data.products})
    //return inventory
    //return iinventory
}

function GetProductData(id){
    return axios.get("https://dummyjson.com/products/"+id)
}

const apiData=[]


const iinventory=[{id:"1", price:"15.00", desc:"White Coffee Mug", category:"Mugs", image:"https://codeyogi.io/coffee-mug.jpeg"} ,
          {id:"2", price:"19.00", desc:"Blue Coffee Mug", category:"Mug", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/mug-blue.jpg"},
          {id:"3", price:"15.00", desc:"Brown Coffee Mug",  category:"Mug", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/mug-coffee-600x600.jpg"},  
          {id:"4", price:"34.00", desc:"Green Tshirt",  category:"Tshirt", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/tshirt5-600x600.jpg"},
          {id:"5", price:"18.00", desc:"Yellor Coffee Mug",  category:"Mug", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/mug-yellow-600x600.jpg"},
          {id:"6", price:"34.00", desc:"Light-Blue Tshirt",  category:"Tshirt", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/tshirt2-600x600.jpg"},  
          {id:"7", price:"14.00", desc:"Red Coffee Mug",  category:"Mug", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/mug-red-600x600.jpg"}, 
          {id:"8", price:"25.00", desc:"Orange Tshirt",  category:"Tshirt", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/tshirt7-600x600.jpg"}, 
          {id:"9", price:"25.00", desc:"Blue Tshirt", category:"Tshirt", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/tshirt4-600x600.jpg"}];

export default getproducts
export {iinventory, apiData, GetProductData} 