import axiosInstance from "../api/axios";

export const getProducts = async () => {
    return axiosInstance.get('/products/getProducts')
}