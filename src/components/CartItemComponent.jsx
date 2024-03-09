import { Rating } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { removeItemHandler, setPriceHandler } from "../store/cartSlice";

// icons
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

// motion
import { motion } from "framer-motion";


function CartItemComponent({ single, index }) {

    const dispatch = useDispatch();

    const { totalPrice } = useSelector(state => state.cartStore)

    return (
        <div className=" w-full mb-[20px]">
            <div className="grid grid-cols-4 place-items-center w-full relative">
                <div className="flex flex-col lg:flex-row gap-[20px] w-full lg:w-full px-[20px] lg:px-[0px]">
                    <Link to={`/productDetails/${single.id}`} className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]">
                        <img src={single.thumbnail} alt="" className="w-full h-full object-cover rounded-[20px]" />
                    </Link>
                    <div className="flex flex-col justify-between">
                        <h3 className="text-mainBlue font-bold text-sm lg:text-lg">
                            {single.title}
                        </h3>
                        <span className="invisible lg:visible text-[18px] text-slate-400">
                            {single.category}
                        </span>
                        <span className="invisible lg:visible">
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
                    <span className="lg:text-xl text-textColor">
                        ${single.price}
                    </span>
                </div>
                <div>
                    <div className="flex gap-3">
                        <div className="bg-slate-200 flex gap-3">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 1.15 }}
                            >
                                <button onClick={() => dispatch(setPriceHandler({ increment: -1, index }))} className="px-[16px] border border-slate-300">
                                    -
                                </button>
                            </motion.div>
                            <p>{single.count}</p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 1.15 }}
                            >
                                <button onClick={() => dispatch(setPriceHandler({ increment: 1, index }))} className="px-[16px] border border-slate-300">
                                    +
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <span className="lg:*:text-xl text-textColor">
                        ${single.cartTotal}
                    </span>
                    <button className="absolute top-0 right-0" onClick={() => dispatch(removeItemHandler(index))}><AiOutlineDelete size={20} /></button>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default CartItemComponent