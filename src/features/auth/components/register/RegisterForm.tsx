import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Link } from "react-router";
import useRegister from "@/features/auth/hooks/useRegister";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { mutate } = useRegister();

  const handleRegister = (data: z.infer<typeof registerSchema>) => {
    mutate({ name: data.name, email: data.email, password: data.password });
  };

  const handleViewPassword = () => {
    setShowPassword((prev) => prev? false: true);
  }

  const handleViewConfirmPassword = () => {
    setShowConfirmPassword((prev) => prev? false: true);
  }

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
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    {...field}
                    className="border-gray-300 rounded-lg transition-all"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    {...field}
                    className="border-gray-300 rounded-lg transition-all"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      {...field}
                      className="border-gray-300 rounded-lg transition-all pr-10"
                      type={showPassword ? "text" : "password"}
                    />
                    <span
                      onClick={handleViewPassword}
                      className="absolute z-10 cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all"
                    >
                      {showPassword ? (
                        <Eye className="w-5 h-5" />
                      ) : (
                        <EyeClosed className="w-5 h-5" />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Confirm your password"
                      {...field}
                      className="border-gray-300 rounded-lg transition-all pr-10"
                      type={showConfirmPassword ? "text" : "password"}
                    />
                    <span
                      onClick={handleViewConfirmPassword}
                      className="absolute z-10 cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all"
                    >
                      {showConfirmPassword ? (
                        <Eye className="w-5 h-5" />
                      ) : (
                        <EyeClosed className="w-5 h-5" />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
