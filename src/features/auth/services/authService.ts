import axios from "axios";

import API from "@/lib/apiConfig";
import type { RegisterUser, Credential } from "@/type/Auth";

export const register = async (user: RegisterUser) => {
  try {
    const response = await API.post("/auth/register", user);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const login = async (user: Credential) => {
  try {
    const response = await API.post("/auth/login", user);
    return response.data;
  } catch (error) {
    console.log("Error during login:", error);
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await API.get("/auth/get-user");

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }

    throw new Error(String(error));
  }
};
