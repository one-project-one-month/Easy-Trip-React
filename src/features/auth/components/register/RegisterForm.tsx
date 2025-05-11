import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Link } from "react-router";
import useRegister from "@/features/auth/hooks/useRegister";
import TextInput from "@/components/common/TextInput";

const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("Name is required")
      .min(2, { message: "Name must be at least 2 characters long" }),
    email: z.string().email().nonempty("Email is required"),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export default function RegisterForm() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });
  const { mutate } = useRegister();

  const handleRegister = (data: z.infer<typeof registerSchema>) => {
    mutate({ name: data.name, email: data.email, password: data.password });
  };

  return (
    <div className="w-full h-lvh flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleRegister)}
          className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl space-y-6 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
        >
          <h1 className="text-center text-4xl font-extrabold text-gray-800 tracking-tight">
            Create Account
          </h1>
          <p className="text-center text-gray-500 text-sm">
            Join us and plan your trip easily
          </p>
          <TextInput
            type="TEXT"
            name="name"
            label="Name"
            control={form.control}
          />
          <TextInput
            type="TEXT"
            name="email"
            label="Email"
            control={form.control}
          />
          <TextInput
            type="PASSWORD"
            name="password"
            label="Password"
            control={form.control}
          />
          <TextInput
            type="PASSWORD"
            name="confirmPassword"
            label="Confirm Password"
            control={form.control}
          />
          <Button
            type="submit"
            className="w-full text-white py-3 px-4 rounded-lg disabled:bg-gray-300 transition-all font-medium shadow-md hover:shadow-lg"
            disabled={!form.formState.isValid}
          >
            Sign Up
          </Button>

          <p className="text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link
              to="/auth"
              className="hover:underline font-medium transition-all"
            >
              Login
            </Link>
          </p>
          <p className="text-center text-gray-500 text-xs mt-4">
            © {new Date().getFullYear()} EasyTrip. All rights reserved.
          </p>
        </form>
      </Form>
    </div>
  );
}
