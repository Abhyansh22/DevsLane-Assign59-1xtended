import React, {useEffect, useState} from "react";
import Product from "./Product";
import getproducts from "./DummyData";
//import {apiData} from "./DummyData";

function ProductList(){
  const [inventory, setInventory]= useState([])
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState("default")

  useEffect(function(){
    const token=getproducts()
    //console.log("Inside code running")
    token.then(function(response) {console.log(response.data.products)
      //let d = response.data.products
      setInventory(response.data.products)
      //apiData.push(...d)
    })
    
  },[])


  function optionChange(event){
    setSelected(event.target.value)
  }
  function textChange(event){
    setQuery((event.target.value).toLowerCase())
  }

  //const inventory = getproducts()
  const filteredInventory =inventory.filter(function (item){
    if(item.title.toLowerCase().indexOf(query)!=-1){
      return true;
    }else{
      return false;
    }
  })

  if (selected=="category"){
    filteredInventory.sort(function(x,y){
      return((x.category<y.category)?-1:1)
    })
  }else if(selected=="ltoh"){
    filteredInventory.sort(function(x,y){
      return((+x.price-(+y.price))<0 ?-1:1)
    })
  }else if(selected=="htol"){
    filteredInventory.sort(function(x,y){
      return((+x.price-(+y.price))>0 ?-1:1)
    })
  }

    return(
        <div className="flex flex-col">
            <div className='flex gap-4 self-end '>
                <input type='text'onChange={textChange} className='border-gray-200 border-2 rounded-md px-6' placeholder='Search'/>
                <select onChange={optionChange} className='border-gray-200 border-2 py-2 pl-3 pr-8 bg-gray-100 text-gray-600' name="sortTag">
                    <option value="default">Default Sorting</option>
                    <option value="category">Sort by category</option>
                    <option value="ltoh">Sort by price: low to high</option>
                    <option value="htol">Sort by price: high to low</option>
                </select>
            </div>
            <div className="flex flex-wrap justify-between grow">
                {filteredInventory.map(function(item){
                    return(<Product key = {item.id} id={item.id} price={item.price} title={item.title} category={item.category} thumbnail={item.thumbnail}></Product>)
                })}
            </div>
        </div>
    )
}

export default ProductList