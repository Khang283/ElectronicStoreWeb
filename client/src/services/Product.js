import axios from "axios";

class ProductServices {
    getType(type) {
            return axios.get(`/api/v1/product/${type}`)
        }
    getProductById (id) {
        return axios.get(`http://localhost:8080/api/v1/product?productId=${id}`)
    }
}

export default new ProductServices();