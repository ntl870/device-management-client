import { axiosClient } from "./axios";

export const getListProduct = () => axiosClient.get("/api/products");

export const getProductById = (id) => axiosClient.get(`/api/products/${id}`);
