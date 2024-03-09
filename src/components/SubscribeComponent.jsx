import { PiPaperPlaneTilt } from "react-icons/pi";
import { PiHeadphonesLight } from "react-icons/pi";


function SubscribeComponent() {
    return (
        <div className="flex flex-col lg:flex-row justify-around items-center text-center gap-[20px] bg-[#fff] py-[40px] rounded-[20px] px-[5px]">
            <h3 className="text-mainBlue lg:text-[30px] text-[20px] font-bold">Subscribe newsletter</h3>
            <div className="flex  items-center justify-between bg-mainOrange text-white rounded-[10px] lg:py-[15px] lg:px-[20px] lg:w-[300px] py-[10px] px-[16px] ">
                <input type="text" placeholder="Enter your email" className="outline-none bg-transparent placeholder:text-textWhite text-center" />
                <PiPaperPlaneTilt size={20} />
            </div>
            <div className="flex items-center gap-[20px]">
                <PiHeadphonesLight size={30} color="#eda415" />
                <div className="text-[14px] lg:text-[20px]">
                    <p>Call us 24/7 :</p>
                    <p>(+62) 0123 567 789</p>
                </div>
            </div>
        </div>
    )
}

export default SubscribeComponent