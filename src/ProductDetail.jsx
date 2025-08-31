import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//import {apiData} from "./DummyData";
import ProductCard from './ProductCard'
import { GetProductData } from "./DummyData";

function ProductDetail(){
    const identifier = useParams()

    const [product,setProduct] = useState({})
    useEffect(function(){
        const tokenProduct = GetProductData(identifier.id)
        tokenProduct.then(function(response){
            //const product=response.data
            setProduct(response.data)
        })
        
    },[identifier.id])

    
    //console.log("PD component refreshed",identifier.id)
    if(!product){
        return (
            <div className="text-indigo-700 text-center">Loading Product</div>
        )
    }
    return(
        <div className="flex flex-col">
            <div >
                <ProductCard description={product}></ProductCard>
            </div>
            <div className='flex justify-between'>
            {identifier.id>1 && <Link to={"/ProductDetail/"+(+identifier.id-1)} className="py-2 px-4 border-red-500 border-2 hover:bg-red-500 hover:text-white">Previous</Link>}
            {identifier.id<30 && <Link to={"/ProductDetail/"+(+identifier.id+1)} className="py-2 px-4 border-red-500 border-2 hover:bg-red-500 hover:text-white self-end" >Next</Link>}
            </div>
        </div>
    )
}
export default ProductDetail