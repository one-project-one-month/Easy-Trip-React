import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getUser,
  login,
  logout,
  register,
} from "@/features/auth/services/authService";

import useAuthStore from "@/store/authStore";
import type { Credential, LoginResponse, RegisterUser } from "@/type/Auth";

export function useLogin() {
  const { setAccessToken } = useAuthStore();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: Credential) => login(data),
    onSuccess: (response: LoginResponse) => {
      setAccessToken(response.accessToken, response?.refreshToken);
    },
  });
}

export function useRegister() {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (userData: RegisterUser) => register(userData),
  });
}

export function useGetUser() {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
  });
}

export function useLogout() {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
  });
}
