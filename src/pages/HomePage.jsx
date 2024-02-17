import { useEffect } from "react"
import ProductsService from "../services/productsService"
import { useDispatch } from "react-redux"
import { setProducts } from "../store/productSlice";

function HomePage() {

    const dispatch = useDispatch();

    useEffect(() => {
        ProductsService.getAllProducts()
            .then((res) => dispatch(setProducts(res.data.products)))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>

        </div>
    )
}

export default HomePage