import React from 'react'
import { Announcement, Footer, Navbar } from '../components'
import { CartProduct, CartSummary } from '../components/mini'

const products = [
  {
    id:25647893,
    imgUrl:'https://images.stockx.com/images/Nike-Dunk-High-Game-Royal-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1624468016',
    title:'Nike Shoes',
    color:'Blue',
    size:42,
    price:136
  },
  {
    id:7895632,
    imgUrl:'https://cdna.lystit.com/200/250/tr/photos/dressinn/e76c72c6/nike-Black-Black-White-White-Sportswear-Alumni-Shorts.jpeg',
    title:'Nike Sweatshorts',
    color:'black',
    size:38,
    price:89
  }
]

const Cart = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="p2 tablet:p-5">
        <h1 className="font-light text-center text-3xl mt-3">YOUR BAG</h1>
        <div className="flex items-center justify-between p-5">
          <button className="font-semibold p-3 cursor-pointer border border-black  bg-transparent text-black">CONTINUE SHOPPING</button>
          <div className="hidden tablet:block">
            <span className="underline mx-2 cursor-pointer">Shopping Bag</span>
            <span className="underline mx-2 cursor-pointer">Your wishlist(2)</span>
          </div>
          <button className="font-semibold p-3 cursor-pointer border-none bg-black text-white">CHECKOUT</button>
        </div>
        <div className="flex flex-col tablet:flex-row justify-between p-3">
          <div className="flex-[3]">
            {
              products.map((item, index)=>{
                return (
                  <>
                    <CartProduct key={item.id}  product={item} />
                    {index<products.length-1 && <hr className=" bg-gray-300 border-none h-[1px]" />}
                  </>
                  
                );
              })
            }
            
          </div>
          <CartSummary />
        </div>
      </div>
      <Footer /> 
    </div>
  )
}

export default Cart