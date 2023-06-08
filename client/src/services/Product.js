import axios from "axios";

class ProductServices {
    getType(type, limit) {
            return axios.get(`/api/v1/product/${type}?limit=${limit}`)
        }
    getProductById (id) {
        return axios.get(`/api/v1/product?productId=${id}`)
    }
    getTypePage (type, page, limit) {
        return axios.get(`/api/v1/product/${type}?page=${page}&limit=${limit}`)
    }
    countProduct (type) {
        return axios.get(`http://localhost:3000/api/v1/countproduct/${type}`)
    }
}

export default new ProductServices();