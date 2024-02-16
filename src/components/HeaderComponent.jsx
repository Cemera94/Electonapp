import React from 'react'

// icons
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

function HeaderComponent() {
    return (
        <div className='container mx-auto flex flex-col sm:flex-row py-[10px] gap-3 justify-between h-[70px] items-center text-[14px]'>
            <p>Need help? Call us: (+98) 0234 456 789</p>

            <div className='flex gap-9 items-center'>
                <div className='flex items-center gap-3 text-[14px]'>
                    <CiLocationOn size={24} />
                    <span>Our Store</span>
                </div>
                <div className='flex items-center gap-3 text-[14px]'>
                    <CiDeliveryTruck size={24} />
                    <span>Track Your Order</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent