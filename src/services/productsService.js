import axios from "axios";

class ProductsService {
    static getAllCategories = () => axios.get('/products/categories')

    static getAllProducts = () => axios.get('/products')

    static getSingleProduct = (id) => axios.get(`products/${id}`)

    static getProductsByCategory = (category) => axios.get(`/products/category/${category}`);

    static getSearchProduct = (searchValue) => axios.get(`/products/search?q=${searchValue}`);

}

export default ProductsService;