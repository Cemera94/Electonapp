import { Rating } from "@mui/material"
import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import CartItemComponent from "../components/CartItemComponent"
import ButtonComponent from "../components/ButtonComponent"

// mui 
import {
    MenuItem,
    TextField,
} from "@mui/material";

// constants
import country from "../constats/country"

// motion
import { motion } from "framer-motion";


function CartPage() {

    const [currentCoupon, setCurrentCoupon] = useState(null)
    const { cart, totalPrice } = useSelector(state => state.cartStore)

    const coupon = useRef();

    function handleCoupon() {

        setCurrentCoupon(coupon.current.value);
        setDisableInput(true);

        coupon.current.value = "";

    }


    return (
        <div className="container mx-auto px-[10px] flex flex-col lg:flex-row gap-[30px] w-full mt-[50px] mb-[50px]">
            <div className="w-full lg:w-[70%]">
                <div className="grid grid-cols-4  bg-[#E2F4FF] py-[15px] place-items-center mb-[30px] w-full">
                    <h3>Product</h3>
                    <h3>Price</h3>
                    <h3>Quantity</h3>
                    <h3>Subtotal</h3>
                </div>
                {/* left side */}
                {cart.map((single, index) => {
                    return <CartItemComponent single={single} key={index} index={index} cart={cart} />
                })}
            </div>

            {/* right side */}
            <div className="flex flex-col w-full lg:w-[30%] ">
                <div className="sticky top-3">
                    <div className="bg-[#E2F4FF] w-full py-[15px] flex justify-center  mb-[30px]">
                        <h3>Cart Total</h3>
                    </div>
                    <div className="px-[20px] flex flex-col gap-[30px]">
                        <div className="flex justify-between border-b-2 pb-[30px] text-xl">
                            <h3 className="">Subtotal</h3>
                            <span>${totalPrice}</span>
                        </div>
                        <div className="flex justify-between border-b-2 pb-[30px]">
                            <input
                                type="text"
                                placeholder="Enter coupon code"
                                ref={coupon}
                                className="outline-none"
                            />
                            <motion.div
                                whileTap={{ scale: 1.15 }}
                                drag="x"
                                dragConstraints={{ left: -100, right: 100 }}>
                                <button className="text-mainBlue" onClick={() => handleCoupon()}>Apply</button>
                            </motion.div>
                        </div>
                        <div className="flex justify-between">
                            <TextField
                                id="select-country"
                                select
                                label="Country"
                                helperText="Please select your Country"
                                className="w-full"
                            >
                                {country.map((option, index) => (
                                    <MenuItem key={index} value={option.name}>
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className="flex justify-between text-xl">
                            <span>Total amount</span>
                            <span>
                                {currentCoupon === 'Jovan' ? <span>{totalPrice / 2}$</span> : <span>{totalPrice}$</span>}
                            </span>
                        </div>
                        <div className="flex justify-center">
                            <ButtonComponent color={'#eda415'} textBtn={'Proceed to checkout'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage