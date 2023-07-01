'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FacebookImg from '@/assets/images/facebook.png';
import React from 'react';
import Image from 'next/image';
import DividerWithText from '@/components/core/divider-with-text';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { LoginFormInput, loginFormSchema } from '@/zod/forms';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/authService';
import useAuthStore from '@/stores/auth';
import JWTManager from "@/lib/jwt"
import { revalidatePath } from 'next/cache';
import axios from 'axios';
import { signIn, signOut, useSession } from "next-auth/react";
import _ from "lodash"
import { useRouter } from 'next/navigation';


type Props = {};

const Login = (props: Props) => {
  const router = useRouter()

  const { mutate: login } = useMutation({
    mutationFn: async (input: LoginFormInput) => {
      const { data } = await authService.login(input);

      return data;
    },

    onSuccess: (data) => {
      console.log({data})
      // JWTManager.setToken(data.token)
      // revalidatePath("/")
    },
  });

  const form = useForm<LoginFormInput>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  async function onSubmit(values: LoginFormInput) {
    const result = await signIn("credentials",{
      ...values,
      redirect: false,
    })
    if(_.get(result, "error")) alert("Invalid credentials!")
    else router.refresh()
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center mt-7"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    {...field}
                    className="mb-1.5 text-xs placeholder:text-xs h-8 focus:border-gray-400 focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-0"
                    placeholder="Username or email"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    {...field}
                    className="text-xs placeholder:text-xs h-8 focus:border-gray-400 focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-0"
                    type="password"
                    placeholder="Password"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <Button variant={'blue'} className="w-full mt-4 h-7 text-xs">
            Log in
          </Button>
        </form>
      </Form>
      <DividerWithText text="OR" className="mt-4" />
      <div className="flex items-center justify-center gap-2 mt-4 cursor-pointer">
        <Image width={20} height={20} src={FacebookImg} alt="" />
        <span className="text-regular text-gray-600 font-medium">
          Log in with Facebook
        </span>
      </div>

      <p className="text-xs mt-4 text-center">Forgot password?</p>
    </>
  );
};

export default Login;
