import { useMutation, useQuery } from "@tanstack/react-query";

import { getUser, login, register } from "@/features/auth/services/authService";

import useAuthStore from "@/store/authStore";
import type { Credential, LoginResponse, RegisterUser } from "@/type/Auth";

export function useLogin() {
  const { setAccessToken } = useAuthStore();

  return useMutation({
    mutationFn: (data: Credential) => login(data),
    onSuccess: (response: LoginResponse) => {
      setAccessToken(response.accessToken, response?.refreshToken);
    },
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: (userData: RegisterUser) => register(userData),
  });
}

export function useGetUser() {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
  });
}
