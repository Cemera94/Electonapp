import { useSelector } from "react-redux"
import CardProductComponent from "../components/CardProductComponent"

function FavoritesPage() {

    const { favorites } = useSelector(state => state.favoriteStore)

    return (
        <div className="container mx-auto flex flex-wrap justify-center mt-[40px] mb-[40px] gap-[20px]">
            {favorites.map((item, index) => {
                return <CardProductComponent key={index} item={item} />
            })}
        </div>
    )
}

export default FavoritesPage