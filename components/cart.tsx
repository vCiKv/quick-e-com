"use client"
import Product from '@/types/Product'
import { BagIcon, } from "@/components/icons"
import useToggle from "@/hooks/useToggle"

const Cart = ({cartItems,openCheckout}:{cartItems:Product[],openCheckout:()=>void})=>{
  const [showCart,toggleCart] = useToggle(false)
  const getCarNumber = cartItems.length 
  let totalCart = 0
  return(
    <div onClick={toggleCart} className='text-center m-2 h-[38px] cursor-pointer'>
      <div className='rounded-full border bg-white w-9 h-9 mx-auto p-1'>
        <BagIcon/>
        {showCart &&
        <div className='max-h-64 bg-white w-72 p-3 mt-4 rounded-lg z-5 relative'>
          <div className='flex flex-col'>
            <div className='max-h-44 block overflow-y-auto'>
              {cartItems.map(element=>{
                totalCart += element.price
                return( <CartItem key={'cart-'+element.id} name={element.name} price={element.price}/>)
              })}
            </div>  
            <CartTotal total={totalCart}/>
        
            <div className='p-3 text-underline text-purple-500 cursor-pointer' onClick={()=>openCheckout()}>
              <div>Checkout</div>
            </div>
          </div>
        </div>
        }
      </div>
      <span className='relative top-[-20px] left-[15px] rounded-full border text-xm bg-rose-900 w-6 h-6 text-white text-center scale-75 block'>{getCarNumber}</span>
    </div>
  )
}
export const CartItem = ({name,price}:{name:string,price:number})=>{
  return(
    <div className='flex justify-between w-full text-center border-2 border-purple-500 rounded-lg mb-1'>
      <p className='text-xl capitalize text-purple-500 p-2 text-ellipsis'>{name}</p>
      <p className='bg-purple-500 p-2 border-0 text-white w-4/12'>${price.toFixed(2)}</p>
    </div>
  )
}
export const CartTotal = ({total}:{total:number})=>{
  return(
    <div className='bg-purple-500 font-semibold text-white flex justify-between w-full text-center border-2 border-purple-500 rounded-lg mb-1'>
      <p className='text-xl capitalize p-2'>Total</p>
      <p className='p-2 border rounded-lg w-4/12'>${total.toFixed(2)}</p>
    </div>  
  )
}
export default Cart