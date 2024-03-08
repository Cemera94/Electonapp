import { useEffect, useState } from "react"
import ProductsService from "../services/productsService"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../store/productSlice";

import CardProductComponent from "../components/CardProductComponent.jsx"

import { FaList } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";

// motion
import { motion } from "framer-motion";


function HomePage() {

    const [view, setView] = useState("grid");

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.productStore)

    useEffect(() => {
        ProductsService.getAllProducts()
            .then((res) => dispatch(setProducts(res.data.products)))
            .catch((err) => console.log(err))
    }, [])



    return (
        <div className="container mx-auto mt-[30px] mb-[30px] flex flex-col px-[10px] lg:px-[0px]">
            <div className="flex justify-end gap-[20px] lg:mr-[50px]">
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}>
                    <FaList
                        size={30}
                        onClick={() => setView("list")}
                        style={{
                            backgroundColor:
                                view === 'list' ? '#EDA415' : null,
                            color:
                                view === 'list' ? '#fff' : null
                        }}
                        className="cursor-pointer p-[10px] rounded-[10px] w-[40px] h-[40px]"
                    />
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.15 }}
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}>
                    <IoGridOutline
                        size={30}
                        onClick={() => setView("grid")}
                        style={{
                            backgroundColor:
                                view === 'grid' ? '#EDA415' : null,
                            color:
                                view === 'grid' ? '#fff' : null
                        }}
                        className="cursor-pointer p-[10px] rounded-[10px] w-[40px] h-[40px]"
                    />
                </motion.div>

            </div>
            {/* Our cards */}

            <div className={view === `grid`
                ? "flex flex-wrap gap-[30px] items-center justify-center mt-[50px]"
                : "flex flex-col gap-[20px] mt-[50px]"}>
                {products.map((item, index) => {
                    return <CardProductComponent key={item.id} item={item} view={view} />
                })}
            </div>
        </div>
    )
}

export default HomePage