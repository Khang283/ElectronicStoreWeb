import axios from "axios";

class ProductServices {
    getType(type) {
            return axios.get(`/api/v1/product/${type}`)
        }
}

export default new ProductServices();