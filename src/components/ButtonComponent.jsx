import { Link } from "react-router-dom"

function ButtonComponent({ textBtn, color, onClick }) {
    return (
        <div>
            <button className={`px-[30px] py-[12px] text-textWhite rounded-[20px]`} style={{ backgroundColor: color }} onClick={onClick}><Link to={'/cart'}>{textBtn}</Link></button>
        </div>
    )
}

export default ButtonComponent