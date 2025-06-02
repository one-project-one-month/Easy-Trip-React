import LoginForm from "@/features/auth/components/login/LoginForm";

export default function LoginPage() {
  return (
    <div
      style={{
        backgroundImage: "url('/auth/travel-lake.webp')",
        backgroundSize: "cover",
        backgroundPosition: "right 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LoginForm />
    </div>
  );
}
