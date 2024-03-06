import { useEffect, useState } from "react"
import ProductsService from "../services/productsService";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../store/productSlice";
import CardProductComponent from "../components/CardProductComponent";

// motion
import { motion } from "framer-motion";


function ProductsOfCategoryPage() {

    const { category } = useParams();

    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.productStore)


    useEffect(() => {
        ProductsService.getProductsByCategory(category)
            .then(res => dispatch(setCategories(res.data.products)))
            .catch((err) => console.log(err))
    }, [category])

    return (
        <motion.div
            className="container mx-auto flex flex-wrap gap-[30px] items-center justify-center mt-[50px] mb-[50px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            {categories.map((item, index) => {
                return <CardProductComponent key={item.id} item={item} />
            })}
        </motion.div>
    )
}

export default ProductsOfCategoryPage