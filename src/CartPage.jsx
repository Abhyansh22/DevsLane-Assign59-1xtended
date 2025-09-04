import React, { use, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import CartList from './CartList'
import { FiArrowLeft } from "react-icons/fi";
import { getProduct } from './Api';
import cart from './cart';
import CartTotal from './CartTotal';


function CartPage() {
    const { id } = useParams()
    
    

    return (

        <div className='flex flex-col '>  
            <Link to={`/`}><FiArrowLeft className=' hover:text-orange-500 hover:border-orange-500 border rounded-[50%] w-7 h-7 ml-[15vw] mt-[1vh] justify-self-start' /></Link>
            <div className='flex flex-col items-center w-screen'>
                
                <div className='flex gap-2 border-[0.5px] overflow-hidden border-gray-300 bg-gray-200 h-13 mt-5 w-[330px] md:w-[70%] items-center'>
                    <p className='pl-15 md:pl-[16%] md:pr-[38%]'>Products</p>
                    <p className='pl-5 md:pr-[6%]'>Price</p>
                    <p className='md:pr-[8%]'>Quantity</p>
                    <p>Subtotal</p>
                </div>
                <div className='flex flex-col items-center'>
                    <CartList ID={id} />
                    <Link className='w-[180px] self-end bg-orange-600 h-10 text-white rounded text-center mb-3'><p className='mt-2'>Update cart</p></Link>
                </div>
                
            </div>
            <div className='flex justify-end w-[70vw]  mx-auto mt-5'>
                <CartTotal/>
            </div>


        </div>
    )
}

export default CartPage