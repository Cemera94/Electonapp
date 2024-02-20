import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import ProductsService from "../services/productsService";

function ProductDetails() {

    const [activeImage, setActiveImage] = useState(0)
    const [singleProduct, setSingleProduct] = useState({});
    const [loader, setLoader] = useState(false);

    const { id } = useParams();


    useEffect(() => {
        ProductsService.getSingleProduct(id)
            .then((res) => {
                setSingleProduct(res.data);
                setLoader(true);
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="container mx-auto flex mt-[50px] gap-[50px]">

            {loader ?
                <>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <div className="w-[400px] h-[400px] border border-mainBlue rounded-[20px]">
                            <img src={singleProduct.images[activeImage]} alt="" className="rounded-[20px] h-full object-cover" />
                        </div>
                        <div className="flex gap-8">
                            {singleProduct.images.map((image, index) => {
                                return <img key={index} src={image} className="w-[100px] h-[100px] rounded-[10px] border border-mainBlue" onClick={() => setActiveImage(index)}></img>
                            })}
                        </div>

                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-2xl text-mainBlue font-bold">{singleProduct.title}</h2>
                        <span className="text-2xl text-textColor font-bold">${singleProduct.price}</span>
                        <span className="text-[12px]">REWIEVS {singleProduct.rating}</span>
                    </div>
                </>
                : <div>Nisu stigli podaci</div>}


        </div>
    )
}

export default ProductDetails