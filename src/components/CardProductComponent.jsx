import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

function CardProductComponent({ item }) {
    return (
        <div className='w-[300px] h-full border border-mainBlue rounded-[20px] flex flex-col  justify-between text-center cursor-pointer gap-[20px]'>
            <div className='relative'>
                <img src={item.thumbnail} alt={item.title} className='w-full h-[150px] object-cover rounded-t-[20px] ' />
                <div className='bg-black absolute top-0 right-0 left-0 bottom-0 opacity-[70%] hover:opacity-0 rounded-t-[20px] transition-all'></div>
            </div>
            <h1 className='font-bold'>{item.title}</h1>
            <span className='text-mainBlue'>${item.price}</span>
            <div>
                <Rating
                    name="half-rating-read"
                    precision={0.5}
                    value={item.rating}
                    readOnly
                />
            </div>
            <Link to={`/productDetails/${item.id}`}><button className='w-full bg-mainOrange py-[6px] rounded-b-[20px] text-textWhite'>View Details</button></Link>

        </div>
    )
}

export default CardProductComponent