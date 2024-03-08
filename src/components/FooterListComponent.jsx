import { FaCircle } from "react-icons/fa";

function FooterListComponent({ title, item }) {
    return (
        <div className="flex flex-col justify-between gap-[10px] lg:w-[200px]">
            <h3 className="text-[19px] text-mainBlue font-bold mb-[10px] w-[50px]">{title}</h3>
            {item.map((el, index) => {
                return <div key={index} className="text-mainBlue">
                    <ul className="w-[120px]">
                        <li className="flex items-center gap-[10px] w-full"><FaCircle color="#D9D9D9" />{el}</li>
                    </ul>
                </div>
            })}
        </div>
    )
}

export default FooterListComponent