import axios from "axios";

class ProductServices {
    getType(type) {
            return axios.get(`/api/v1/product/${type}`)
        }
    getProductById (id) {
        return axios.get(`/api/v1/product?productId=${id}`)
    }
    getTypePage (type, page) {
        return axios.get(`/api/v1/product/${type}?page=${page}`)
    }
    countProduct (type) {
        return axios.get(`/api/v1/countproduct/${type}`)
    }
}

export default new ProductServices();