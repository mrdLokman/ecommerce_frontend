import React from 'react'


const SummaryItem = ({total , title, amount}) =>{
  return (
    <div className="my-7 flex justify-between" style={total && {fontWeight: 500, fontSize: '24px'}}>
        <span>{title}</span>
        <span>{amount} $</span>
    </div>
  );
}


const CartSummary = () => {
  return (
    <div className="flex-1 border border-solid h-[50vh] border-gray-300 rounded-xl p-3">
      <h1 className="font-light">ORDER SUMMARY</h1>
      <SummaryItem title={"Sub-Total"}  amount={225} />
      <SummaryItem title={"Estimated Shipping"}  amount={5.90} />
      <SummaryItem title={"Shipping Discount"}  amount={-5.90} />
      <SummaryItem total title={"Total"} amount={225} />
      <button className="w-full p-3 bg-black text-white font-bold">CHECKOUT NOW</button>
    </div>
  )
}

export default CartSummary