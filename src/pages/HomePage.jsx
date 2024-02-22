import { useEffect } from "react"
import ProductsService from "../services/productsService"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../store/productSlice";

import CardProductComponent from "../components/CardProductComponent.jsx"

import { FaList } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";

function HomePage() {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.productStore)

    useEffect(() => {
        ProductsService.getAllProducts()
            .then((res) => dispatch(setProducts(res.data.products)))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="container mx-auto mt-[30px] mb-[30px] flex flex-col">
            <div className="flex justify-end gap-[20px] mr-[50px]">
                <FaList size={25} />
                <IoGridOutline size={25} />
            </div>
            {/* Our cards */}
            <div className="flex flex-wrap gap-[30px] items-center justify-center mt-[40px]">
                {products.map((item, index) => {
                    return <CardProductComponent key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}

export default HomePage