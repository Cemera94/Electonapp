import { useState } from "react"
import ProductsService from "../services/productsService";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryComponent() {

    // Lokalno smestiti kategorije

    const [categories, setCategories] = useState([]);
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        ProductsService.getAllCategories()
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="bg-slate-100 py-[10px]">
            <div className="container mx-auto flex flex-col lg:flex-row gap-[20px] items-center">
                <button onClick={handleToggle} className="bg-mainOrange px-[16px] py-[8px] rounded-[10px] text-textWhite text-[14px]">{toggle ? 'Hide Category' : 'Show Category'}</button>
                <div className="xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 gap-[10px] grid grid-cols-2">
                    {toggle ? categories.map((item, index) => {
                        return <Link to={`/products/${item}`} key={index} onClick={handleToggle}><div className="bg-blue-100 px-[20px] py-[10px] flex items-center justify-center rounded-[10px] cursor-pointer hover:bg-mainOrange transition-all hover:text-textWhite">{item}</div></Link>
                    }) : <div></div>}
                </div>
            </div>

        </div>
    )
}

export default CategoryComponent