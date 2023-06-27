import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FacebookImg from '@/assets/images/facebook.png';
import React from 'react';
import Image from 'next/image';
import DividerWithText from '@/components/core/divider-with-text';

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <form className="flex flex-col items-center justify-center mt-7">
        <Input
          className="mb-1.5 text-xs placeholder:text-xs h-8 focus:border-gray-400 focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-0"
          placeholder="Phone number, username, or email"
        />
        <Input
          className="text-xs placeholder:text-xs h-8 focus:border-gray-400 focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-0"
          type="password"
          placeholder="Password"
        />
        <Button variant={'blue'} className="w-full mt-4 h-7 text-xs">
          Log in
        </Button>
      </form>
      <DividerWithText text="OR" className='mt-4' />
      <div className="flex items-center justify-center gap-2 mt-4 cursor-pointer">
        <Image width={20} height={20} src={FacebookImg} alt="" />
        <span className="text-xs text-gray-600 font-medium">
          Log in with Facebook
        </span>
      </div>

      <p className="text-[10px] mt-4 text-center">Forgot password?</p>
    </>
  );
};

export default Login;
