import type { RegisterResponse, RegisterUser } from "@/type/Auth";
import { register } from "@/features/auth/services/authService";
import { useMutation } from "@tanstack/react-query";
import useAuthStore from "@/store/authStore";

export default function useRegister() {
  const { setAccessToken } = useAuthStore();

  return useMutation({
    mutationFn: (userData: RegisterUser) => register(userData),
    onSuccess: (userData: RegisterResponse) => {
      setAccessToken(userData.accessToken);
    },
  });
}
