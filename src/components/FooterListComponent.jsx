import { FaCircle } from "react-icons/fa";

function FooterListComponent({ title, item }) {
    return (
        <div className="flex flex-col justify-between">
            <h3 className="text-[19px] text-mainBlue font-bold">{title}</h3>
            {item.map((el, index) => {
                return <div key={index} className="text-mainBlue">
                    <ul>
                        <li className="flex items-center gap-[10px]"><FaCircle color="#D9D9D9" />{el}</li>
                    </ul>
                </div>
            })}
        </div>
    )
}

export default FooterListComponent