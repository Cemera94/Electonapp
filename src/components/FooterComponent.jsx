import SubscribeComponent from './SubscribeComponent.jsx'
import logo from '../assets/logo-1 1.png'

// icons
import { SlSocialGoogle } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { PiWhatsappLogoThin } from "react-icons/pi";

// constant
import { findProduct, aboutUs, getHelp } from '../constats/footerList.js'
import FooterListComponent from './FooterListComponent.jsx';


function FooterComponent() {
    return (
        <div className=' bg-[#E2F4FF] py-[42px] px-[30px] lg:px-[0px]'>
            {/* Subscribe */}
            <div className='container mx-auto'>
                <SubscribeComponent />
            </div>

            {/* Content */}
            <div className='container mx-auto mt-[40px] flex flex-col lg:flex-row items-center lg:gap-[100px] gap-[30px]'>
                {/* left side */}
                <div className='w-full lg:w-[25%] flex lg:flex-col gap-[30px] text-mainBlue justify-center items-center lg:items-start'>
                    <img src={logo} alt="logo" className='w-[150px] h-[40px]' />
                    <div className='hidden lg:block'>
                        <p>64 st james boulevard</p>
                        <p>hoswick , ze2 7zj</p>
                    </div>
                    <div className='h-[1px] bg-slate-400'>
                    </div>
                    <div className='flex gap-[20px] items-center'>
                        <SlSocialGoogle size={20} />
                        <SlSocialFacebook size={20} />
                        <PiWhatsappLogoThin size={25} />
                    </div>
                </div>

                {/* right side */}
                <div className='flex  w-full lg:w-[75%] justify-between items-start gap-[30px] flex-wrap'>
                    <FooterListComponent title='Find product' item={findProduct} />
                    <FooterListComponent title='About us' item={aboutUs} />
                    <FooterListComponent title='Get help' item={getHelp} />
                </div>
            </div>
        </div>
    )
}

export default FooterComponent