import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/common/form-inputs/FormInput";
import useLogin from "@/features/auth/hooks/useLogin";

const loginSchema = z.object({
  email: z.string().email().nonempty("Email is required"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate } = useLogin();

  const handleLogin = (data: LoginFormValues) => {
    mutate(data);
  };

  return (
    <div className='w-full h-lvh flex justify-center items-center'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className='w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl space-y-6 transform transition-all'
        >
          <h1 className='text-center text-4xl font-extrabold text-gray-800 tracking-tight'>
            Welcome Back
          </h1>

          <p className='text-center text-gray-500 text-sm'>
            Please login to your account
          </p>

          <FormInput
            form={form}
            name='email'
            label='Email'
            placeholder='Enter your name'
          />

          <FormInput
            form={form}
            name='password'
            label='Password'
            type='password'
            placeholder='Enter your password'
          />

          <Button
            type='submit'
            className='w-full py-3 px-4 rounded-lg disabled:bg-gray-300 transition-all font-medium shadow-md hover:shadow-lg'
            disabled={!form.formState.isValid}
          >
            Login
          </Button>

          <p className='text-center text-gray-600 text-sm'>
            Don't have an account?{" "}
            <Link
              to='/auth/register'
              className=' hover:underline font-medium transition-all'
            >
              Register
            </Link>
          </p>

          <p className='text-center text-gray-500 text-xs mt-4'>
            © {new Date().getFullYear()} EasyTrip. All rights reserved.
          </p>
        </form>
      </Form>
    </div>
  );
}
