import { Rating } from "@mui/material"
import { useSelector } from "react-redux"

function CartPage() {

    const { singleProduct } = useSelector(state => state.productStore)



    return (
        <div className="container mx-auto flex gap-[30px] w-full mt-[50px]">
            <div className="w-[70%]">
                <div className="grid grid-cols-4  bg-[#E2F4FF] py-[15px] place-items-center mb-[30px] w-full">
                    <h3>Product</h3>
                    <h3>Price</h3>
                    <h3>Quantity</h3>
                    <h3>Subtotal</h3>
                </div>
                {/* left side */}
                {singleProduct.map((single, index) => {
                    return <div key={index} className=" w-full mb-[20px]">
                        <div className="grid grid-cols-4 place-items-center w-full">
                            <div className="flex gap-[20px]">
                                <img src={single.thumbnail} alt="" className="w-[120px] h-[120px] object-cover rounded-[20px]" />
                                <div className="flex flex-col justify-between">
                                    <h3 className="text-mainBlue font-bold text-xl">
                                        {single.title}
                                    </h3>
                                    <span className="text-[18px] text-slate-400">
                                        {single.category}
                                    </span>
                                    <span>
                                        <Rating
                                            name="half-rating-read"
                                            precision={0.5}
                                            value={single.rating}
                                            readOnly
                                        />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span className="text-xl text-textColor">
                                    ${single.price}
                                </span>
                            </div>
                            <div>
                                <div className="flex gap-3">
                                    <div className="bg-slate-200 flex gap-3">
                                        <button className="px-[16px] border border-slate-300" onClick={() => { countHandler(single.count) }}>-</button>
                                        <p>{single.count}</p>
                                        <button className="px-[16px] border border-slate-300">+</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className="text-xl text-textColor">
                                    ${single.price}
                                </span>
                            </div>
                        </div>
                    </div>
                })}
            </div>

            {/* right side */}
            <div className="flex w-[30%]">
                <div className="">
                    <h3>Cart Total</h3>
                </div>
            </div>
        </div>
    )
}

export default CartPage