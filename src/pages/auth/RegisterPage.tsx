import RegisterForm from "@/features/auth/components/register/RegisterForm";

export default function RegisterPage() {
  return (
    <div
      style={{
        backgroundImage: "url('/auth/bus-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "right 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <RegisterForm />
    </div>
  );
}
