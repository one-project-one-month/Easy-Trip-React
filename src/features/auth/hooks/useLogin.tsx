import type { Credential, LoginResponse } from "@/type/Auth";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/features/auth/services/authService";
import useAuthStore from "@/store/authStore";

export default function useLogin() {
  const { setAccessToken } = useAuthStore();

  return useMutation({
    mutationFn: (data: Credential) => login(data),
    onSuccess: (userData: LoginResponse) => {
      setAccessToken(userData.accessToken);
    },
  });
}
