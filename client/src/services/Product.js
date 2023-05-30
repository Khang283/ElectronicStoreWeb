import axios from "axios";

class ProductServices {
    getType(type) {
        return axios.get(`http://localhost:8080/api/v1/product/${type}`)
        }
}

export default new ProductServices();