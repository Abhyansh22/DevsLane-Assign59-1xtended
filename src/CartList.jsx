import React, { useState, useEffect } from 'react'
import CartRow from './CartRow'
//import Alldata from './Alldata';
import cart from './cart';
import { GetProductData } from './DummyData';
import { useParams } from 'react-router';


function CartList(props){
  const { id } = useParams()
  const [product, setProduct] = useState({})


  useEffect(function () {
    if (id) {
      GetProductData(+(id)).then((item) => {
        setProduct(item)
        cart.push(item)
      })
    }
  }, [id])
  
  console.log(cart)
  return (
    <div>
      {cart.map(function (product) {
        return <CartRow title={product.title} price={product.price} image={product.thumbnail} />
      })}
    </div>
  )
}

export default CartList