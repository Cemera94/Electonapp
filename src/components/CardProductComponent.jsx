import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

// motion
import { motion } from "framer-motion";


function CardProductComponent({ item, view }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }} className={view === 'list' ? 'w-full flex flex-col lg:flex-row gap-[10px] lg:gap-[0px] justify-between items-center bg-[#E2F4FF]  px-[30px] py-[20px] rounded-[30px]' :
                'w-[300px] h-full border border-mainBlue rounded-[20px] flex flex-col  justify-between text-center cursor-pointer gap-[20px]'}>
            <div className='relative'>
                <img src={item.thumbnail} alt={item.title} className={view === 'grid'
                    ? 'w-full h-[150px] object-cover rounded-t-[20px] '
                    : 'w-[300px] h-[150px] object-cover rounded-[20px]'} />
                <div className={view === 'list'
                    ? 'bg-black absolute top-0 right-0 left-0 bottom-0 opacity-[70%] hover:opacity-0 rounded-[20px] transition-all'
                    : 'bg-black absolute top-0 right-0 left-0 bottom-0 opacity-[70%] hover:opacity-0 rounded-t-[20px] transition-all'
                }></div>
            </div>
            <h1 className='font-bold'>{item.title}</h1>
            <span className='text-mainBlue'>${item.price}</span>
            <div className='hidden lg:block'>
                <Rating
                    name="half-rating-read"
                    precision={0.5}
                    value={item.rating}
                    readOnly
                />
            </div>
            <motion.div>
                <Link to={`/productDetails/${item.id}`}><button className={view === 'list'
                    ? 'w-[200px] bg-mainOrange py-[10px] rounded-[20px] text-textWhite'
                    : 'w-full bg-mainOrange py-[6px] rounded-b-[20px] text-textWhite'
                }>View Details</button></Link>
            </motion.div>


        </motion.div>
    )
}

export default CardProductComponent