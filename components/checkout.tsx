import { CartItem,CartTotal } from "@/components/cart"
import Product from '@/types/Product'
import Modal from "./modal"
const Checkout=({products,modalToggle}:{products:Product[],modalToggle:()=>void})=>{
  let cartTotal = 0
  return(
    <Modal modalToggle={()=>modalToggle()} canBackgroundExit>
      <div className="container mx-auto">
        <h3 className="text-4xl px-4 my-2 text-center text-purple-500">Checkout</h3>
        <div className="h-3/5 my-2 block overflow-y-auto">
          {products.map(element=>{
            cartTotal += element.price
            return(
              <CartItem key={'checkout-'+element.id}name={element.name} price={element.price}/>
            )
          })}

        </div>
        <hr className="my-4 border-purple-500" />
        <div>
          <CartTotal total={cartTotal}/>
        </div>
      </div>
    </Modal>
  )
}
export default Checkout