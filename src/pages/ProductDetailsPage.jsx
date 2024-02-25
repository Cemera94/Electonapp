import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import ProductsService from "../services/productsService";
import { setProductCart } from "../store/cartSlice";

// icons
import { IoMdCheckmark } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import ButtonComponent from "../components/ButtonComponent";

// dispatch
import { useDispatch } from "react-redux";

function ProductDetails() {

    const [activeImage, setActiveImage] = useState(0)
    const [singleProduct, setSingleProduct] = useState({});
    const [loader, setLoader] = useState(false);

    const { id } = useParams();

    const dispatch = useDispatch();


    useEffect(() => {
        ProductsService.getSingleProduct(id)
            .then((res) => {
                setSingleProduct(res.data);
                setLoader(true);
            })
            .catch(err => console.log(err))
    }, [])

    const addToCart = (product) => {
        dispatch(setProductCart(product))
    }


    return (
        <div className="container mx-auto px-[20px] flex flex-col lg:flex-row mt-[50px] gap-[50px] justify-center mb-[40px]">

            {loader ?
                <>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <div className="lg:w-[400px] lg:h-[400px] border border-mainBlue rounded-[20px]">
                            <img src={singleProduct.images[activeImage]} alt="" className="rounded-[20px] h-full object-cover" />
                        </div>
                        <div className="flex gap-8">
                            {singleProduct.images.map((image, index) => {
                                return <img key={index} src={image} className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-[10px] border border-mainBlue" onClick={() => setActiveImage(index)}></img>
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col gap-[20px] items-center lg:items-start">
                        <h2 className="text-2xl text-mainBlue font-bold">{singleProduct.title}</h2>
                        <span className="text-2xl text-textColor font-bold">${singleProduct.price}</span>
                        <span className="text-[12px]">REWIEVS {singleProduct.rating}</span>
                        <h3 className="flex gap-3">Availability:  {singleProduct.stock > 0 ? <span className="flex items-center gap-3 text-green-500 font-bold"> <IoMdCheckmark size={20} color="green" /> In stock</span> : <span className="text-red-500 font-bold">X Out of stock</span>}</h3>
                        <p>Hurry up! Only {singleProduct.stock} product left in stock</p>
                        <div className="w-full h-[1px] bg-slate-400 mt-[10px]">
                        </div>
                        <h3 className="font-bold text-xl">Total price: {singleProduct.price}$</h3>
                        <div className="flex gap-3">
                            <p>Quantity:</p>
                            <div className="bg-slate-300 flex gap-3">
                                <button className="px-[16px] border border-slate-400">-</button>
                                <p>1</p>
                                <button className="px-[16px] border border-slate-400">+</button>
                            </div>
                        </div>
                        <div className="flex gap-[20px]">
                            <ButtonComponent textBtn={'Add to cart'} color={'#eda415'} onClick={() => { addToCart(singleProduct) }} />
                            <button className="bg-slate-300 h-full px-[12px] py-[8px] lg:py-[0px] rounded-full"><CiHeart size={30} /></button>
                        </div>
                    </div>
                </>
                : <div>Nisu stigli podaci</div>}


        </div>
    )
}

export default ProductDetails