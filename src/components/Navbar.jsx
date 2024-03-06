// image
import logo from "../assets/logo 1.png"

// react-icons
import { RiUserLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { setSearchValue } from "../store/productSlice";


// motion
import { motion } from "framer-motion";

function Navbar() {

    const { totalProduct } = useSelector(state => state.cartStore)
    const { totalFavorite } = useSelector(state => state.favoriteStore)

    const dispatch = useDispatch();

    const searchValue = useRef();

    function handleSearchValue() {
        dispatch(setSearchValue(searchValue.current.value))
        searchValue.current.value = "";
    }


    return (
        <div className='mx-auto bg-mainBlue'>
            <div className='container mx-auto flex flex-col gap-[20px] lg:flex-row justify-between items-center py-[10px] lg:py-[30px]'>

                {/* search component */}
                <Link to={'/'}><img src={logo} alt="electonlogo" className="" /></Link>


                <div className="flex rounded-[20px] bg-textWhite">
                    <input
                        type="text"
                        placeholder="Search any things"
                        className="py-[18px] px-[25px] rounded-[20px] outline-none placeholder:text-black text-[14px]"
                        ref={searchValue}
                    />

                    <Link
                        to={`/products/search/${searchValue}`}
                        className=""
                    >
                        <motion.div
                            whileTap={{ scale: 1.05 }}
                            drag="x"
                            dragConstraints={{ left: -100, right: 100 }}>
                            <button
                                className="px-[40px] py-[18px] bg-mainOrange text-textWhite rounded-[20px] text-[14px]"
                                onClick={() => handleSearchValue()}
                            >Search</button>
                        </motion.div>
                    </Link>
                </div>

                {/* general info */}

                {/* Login Clerk */}
                <div className="flex gap-[30px] text-textWhite">
                    {/* Login */}
                    <div className="flex items-center gap-[12px]">
                        <RiUserLine size={20} color="#fff" />
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" appearance={{
                                variables: {
                                    colorText: '#000'
                                }
                            }} />
                        </SignedIn>
                    </div>
                    {/* Favorite */}
                    <div className="flex items-center gap-[12px]">
                        <div className="flex items-center gap-[3px]">
                            <CiHeart size={30} color="#fff" />
                            <span className="text-[10px] bg-mainOrange rounded-full w-[15px] h-[15px] flex justify-center items-center">{totalFavorite}</span>
                        </div>
                        <Link to='/favorites'>Favorite</Link>
                    </div>
                    {/* Cart */}
                    <div className="flex items-center gap-[12px]">
                        <div className="flex items-center gap-[3px]">
                            <IoCartOutline size={30} color="#fff" />
                            <span className="text-[10px] bg-mainOrange rounded-full w-[15px] h-[15px] flex justify-center items-center">{totalProduct}</span>
                        </div>
                        <Link to='/cart'>Cart</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar