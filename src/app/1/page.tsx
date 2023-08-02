'use client'

import Search from '@/components/search'
import Cart from '@/components/cart'
import Checkout from '@/components/checkout'
import FilterAllProducts from '@/components/filter'
import Product from '@/types/Product'
import { CartIcon,BuyNowIcon } from "@/components/icons"
import { useState } from 'react'
import "./style.css"
const allProductInfo:Product[] = require('../../../public/products.json');

const One = ()=>{
  const [cartItems,setCartItems] = useState<Product[]>([]);
  const [productData,setProductData] = useState(allProductInfo)
  const displayedProducts = productData.length > 0 ?  productData : allProductInfo

  const addToCart = (item:Product)=>{
    setCartItems(p=>[...p,item])
  }
  const [showCheckout,setShowCheckout] = useState<boolean>(false);
  const toggleCheckout = ()=>{
    setShowCheckout(p=>!p)
  }
  const buyNow = (product:Product)=>{
    addToCart(product)
    setShowCheckout(true)
  }
  const ProductCard = ({product}:{product:Product})=>{
    const backgrounds={
      0:"bg-black",
      1:"bg-sky-300",
      2:"bg-red-800",
      3:"bg-yellow-700",
      4:"bg-yellow-300",
      5:"bg-green-300",
      6:"bg-red-300"
    }
    const getRandom = () =>{
      return Math.floor(Math.random() * 6) as 0|1|2|3|4|5|6
    }
    const productDescription = Array.isArray(product.desc) && product.desc.length > 0 ? product.desc.map((desc,index) => (<p key={'description-'+index}>{desc}</p>)) : product.desc
    return(
      <div className='flex sm:w-[47%] w-full min-h-[400px] relative border-2 border-purple-500 rounded-[15px] my-2 mx-2'>
        <div className={'block w-2/5 h-full border rounded-[15px] '+backgrounds[getRandom()??0]}></div>
        <div className='w-3/5 p-3'>                       
          <h6 className='text-4xl capitalize text-purple-500 text-center mb-2 break-words'>{product.name}</h6>
          <div className='h-32 relative overflow-y-auto my-2'>
            <p className='text-base opacity-90'>{productDescription ?? 'no product description'}</p>
          </div>
          <div className='absolute bottom-0 w-[55%] py-2'>
            <p className='text-2xl text-purple-600 text-bold my-3 p-1 font-bold'>${product.price.toFixed(2)}</p>
            <div className='flex text-black p-1 items-center justify-center'>
              <div className='w-1/2 mr-1'>
                <button onClick={()=>buyNow(product)}className='btn-flat p-1 w-full'>
                  <span className='flex capitalize text-center text-xs justify-center items-center opacity-85 hover:opacity-100'>buy<BuyNowIcon/></span>
                </button>
              </div>
              <div className='w-1/2 ml-1'>
                <button onClick={()=>addToCart(product)} className='btn-flat-alt p-1 w-full'>
                  <span className='flex capitalize text-center text-xs justify-center items-center opacity-85 hover:opacity-100'>add to cart<CartIcon/></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  const ShowProducts = ({products}:{products:Product[]})=>{
    return(
      <div>
        <h2 className='text-7xl mt-6 mb-2 text-center font-black -tracking-wide'>All Products</h2>
        <p className='text-lg opacity-90 text-center mb-6'>
          a list of about 200 random products you can search and filter
        </p>
        <FilterAllProducts products={displayedProducts} handler={setProductData}/>
        <div>
          <div className='flex flex-wrap justify-center'>
            {products.map((element,index)=>(
              <ProductCard 
                key={'product-'+index+'-'+element.id}
                product={element}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  return(
    <section className=' overflow-x-hidden'>
      <nav className='bg-purple-700 h-24 w-screen fixed top-[0px] z-10'>
        <div className='flex h-full justify-center items-center flex-reverse w-full'>
          <Search products={displayedProducts} handler={setProductData}/>
          <Cart cartItems={cartItems} openCheckout={toggleCheckout}/>
        </div>
      </nav>
      <div className='block h-24 w-screen'></div>
      <div className="container mx-auto px-4">
        <ShowProducts products={displayedProducts}/>
      </div>
      {showCheckout && <Checkout products={cartItems} modalToggle={toggleCheckout}/>}
    </section>
  )
}
export default One;