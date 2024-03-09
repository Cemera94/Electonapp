import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import ProductsService from "../services/productsService";
import { setPriceHandler, setProductCart } from "../store/cartSlice";

// icons
import { IoMdCheckmark } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoIosHeart } from "react-icons/io";
import ButtonComponent from "../components/ButtonComponent";

// dispatch
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../store/favoriteSlice";
import { Rating } from "@mui/material";

// motion
import { motion } from "framer-motion";

function ProductDetails() {

    const [activeImage, setActiveImage] = useState(0)
    const [singleProduct, setSingleProduct] = useState({});
    const [loader, setLoader] = useState(false);
    const [isFavorite, setIsFavorite] = useState(null);

    const { id } = useParams();

    const { favorites } = useSelector(state => state.favoriteStore);

    const dispatch = useDispatch();


    useEffect(() => {
        ProductsService.getSingleProduct(id)
            .then((res) => {
                const updatedProduct = { ...res.data, count: 1 };
                setSingleProduct(updatedProduct);
                setLoader(true);
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        favorites.find((item) => {
            if (item.id === parseInt(id)) {
                setIsFavorite(item.id);
                return;
            }
        })
    }, [favorites])

    const addToCart = (product) => {
        dispatch(setProductCart(product))
    }

    const addToFavorites = (favorite) => {
        dispatch(addToFavorite(favorite))
        favorites.find((item) => {
            if (item.id === favorite.id) {
                setIsFavorite(null);
                return;
            }
        })
    }

    const quantityHandler = (el) => {
        const updatedProduct = { ...singleProduct };


        if (el.target.name === 'decrement') {
            if (updatedProduct.count === 1) {
                return
            } else {
                updatedProduct.count -= 1;
            }
        } else if (el.target.name === 'increment') {
            updatedProduct.count += 1;
        }

        setSingleProduct(updatedProduct);
        dispatch(setProductCart(singleProduct))
    }

    return (
        <div className="container mx-auto px-[20px] flex flex-col lg:flex-row mt-[50px] gap-[50px] justify-center mb-[40px]">

            {loader ?
                <>
                    <motion.div className="flex flex-col gap-4 justify-center items-center" initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <div className="lg:w-[400px] lg:h-[400px] border border-mainBlue rounded-[20px]">
                            <img src={singleProduct.images[activeImage]} alt="" className="rounded-[20px] h-full object-cover" />
                        </div>
                        <div className="flex gap-8">
                            {singleProduct.images.map((image, index) => {
                                return <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 1.15 }}
                                ><img
                                    src={image}
                                    className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-[10px] border border-mainBlue cursor-pointer" onClick={() => setActiveImage(index)}>
                                    </img></motion.div>
                            })}
                        </div>
                    </motion.div>

                    <motion.div className="flex flex-col gap-[20px] items-center lg:items-start" initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <h2 className="text-2xl text-mainBlue font-bold">{singleProduct.title}</h2>
                        <span className="text-2xl text-textColor font-bold">${singleProduct.price}</span>
                        <span className="text-[12px] flex items-center gap-[10px] justify-center">REWIEVS <Rating
                            name="half-rating-read"
                            precision={0.5}
                            value={singleProduct.rating}
                            readOnly
                        /></span>
                        <h3 className="flex gap-3">Availability:  {singleProduct.stock > 0 ? <span className="flex items-center gap-3 text-green-500 font-bold"> <IoMdCheckmark size={20} color="green" /> In stock</span> : <span className="text-red-500 font-bold">X Out of stock</span>}</h3>
                        <p>Hurry up! Only {singleProduct.stock} product left in stock</p>
                        <div className="w-full h-[1px] bg-slate-400 mt-[10px]">
                        </div>
                        <h3 className="font-bold text-xl">Total price: {singleProduct.price}$</h3>
                        <div className="flex gap-3">
                            <p>Quantity:</p>
                            <div className="bg-slate-300 flex gap-3">
                                <button name="decrement" className="px-[16px] border border-slate-400" onClick={(el) => quantityHandler(el)}>-</button>
                                <p>{singleProduct.count}</p>
                                <button name="increment" className="px-[16px] border border-slate-400" onClick={(el) => quantityHandler(el)}>+</button>
                            </div>
                        </div>
                        <div className="flex gap-[20px]">
                            <motion.div whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 1.15 }}
                            >
                                <ButtonComponent textBtn={'Add to cart'} color={'#eda415'} onClick={() => { addToCart(singleProduct) }} />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 1.15 }}
                                onClick={() => { addToFavorites(singleProduct) }}
                                className="bg-slate-300  px-[24px]  rounded-full py-[8px] cursor-pointer" >
                                {isFavorite === parseInt(id) ? <IoIosHeart color="red" size={30} /> : <CiHeart size={30} />}
                            </motion.div>
                        </div>
                    </motion.div>
                </>
                : <div>Nisu stigli podaci</div>}


        </div>
    )
}

export default ProductDetails