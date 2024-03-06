import { PiPaperPlaneTilt } from "react-icons/pi";
import { PiHeadphonesLight } from "react-icons/pi";


function SubscribeComponent() {
    return (
        <div className="flex justify-around bg-[#fff] py-[40px] rounded-[20px]">
            <h3 className="text-mainBlue text-[30px] font-bold">Subscribe newsletter</h3>
            <div className="flex items-center justify-between bg-mainOrange text-white rounded-[10px] py-[15px] px-[20px] w-[300px]">
                <input type="text" placeholder="Enter your email" className="outline-none bg-transparent placeholder:text-textWhite" />
                <PiPaperPlaneTilt size={20} />
            </div>
            <div className="flex items-center gap-[20px]">
                <PiHeadphonesLight size={30} color="#eda415" />
                <div>
                    <p>Call us 24/7 :</p>
                    <p>(+62) 0123 567 789</p>
                </div>
            </div>
        </div>
    )
}

export default SubscribeComponent