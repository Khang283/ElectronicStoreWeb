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
        return axios.get(`/api/v1/countproduct/${type}`)
    }
    getProducCompany(company, limit) {
        return axios.get(`/api/v1/product?limit=${limit}&company=${company}`)
    }
}

export default new ProductServices();