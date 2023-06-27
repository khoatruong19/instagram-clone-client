import { Button } from '@/components/ui/button';
import React from 'react';
import FacebookImg from '@/assets/images/facebook.png';
import Image from 'next/image';
import DividerWithText from '@/components/core/divider-with-text';
import { Input } from '@/components/ui/input';

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="w-full">
      <h1 className="text-sm text-center mb-4">
        Sign up to see photos and videos from your friends.
      </h1>
      <Button
        variant={'blue'}
        className="h-7 text-xs w-full flex items-center gap-2"
      >
        <Image width={20} height={20} src={FacebookImg} alt="" />
        <span className=" font-medium">Log in with Facebook</span>
      </Button>
      <DividerWithText text="OR" className="my-4" />

      <form action="">
        <Input
          className="mb-1.5 text-xs placeholder:text-xs h-8 focus:border-gray-400 focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-0"
          placeholder="Mobile number or Email"
        />
        <Input
          className="mb-1.5 text-xs placeholder:text-xs h-8 focus:border-gray-400 focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-0"
          placeholder="Full Name"
        />
        <Input
          className="mb-1.5 text-xs placeholder:text-xs h-8 focus:border-gray-400 focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-0"
          placeholder="Username"
        />
        <Input
          className="text-xs placeholder:text-xs h-8 focus:border-gray-400 focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-0"
          type="password"
          placeholder="Password"
        />
        <Button variant={'blue'} className="w-full mt-4 h-7 text-xs">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
