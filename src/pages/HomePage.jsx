import { useEffect } from "react"
import ProductsService from "../services/productsService"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../store/productSlice";

import CardProductComponent from "../components/CardProductComponent.jsx"

function HomePage() {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.productStore)

    useEffect(() => {
        ProductsService.getAllProducts()
            .then((res) => dispatch(setProducts(res.data.products)))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="container mx-auto mt-[30px] mb-[30px]">
            <div>
                <p>List/grid view</p>
            </div>
            {/* Our cards */}
            <div className="flex flex-wrap gap-[30px] items-center justify-center">
                {products.map((item, index) => {
                    return <CardProductComponent key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}

export default HomePage