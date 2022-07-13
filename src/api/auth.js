import { axiosClient } from "./axios";

export const login = (values) => axiosClient.post("/api/auth/login", values);

export const register = (values) =>
  axiosClient.post("/api/auth/register", values);
