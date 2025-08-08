import axiosInstance from "../../../lib/axiosInstance";
import type { Credentials } from "../types";
import { API } from "@/lib/routes"; 


// we already added  prefix /api in axios config

export const fetchLogin = async (credentials: Credentials) => {
  const res = await axiosInstance.post(API.AUTH.LOGIN, credentials);
  return res.data;
};


export const fetchRegister = async (credentials: Credentials) => {
  const res = await axiosInstance.post(API.USERS.REGISTER, credentials);
  return res.data;
};
