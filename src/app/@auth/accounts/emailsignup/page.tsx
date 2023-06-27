import { Button } from '@/components/ui/button';
import React from 'react';
import FacebookImg from "@/assets/images/facebook.png"
import Image from 'next/image';
import DividerWithText from '@/components/core/divider-with-text';

type Props = {};

const page = (props: Props) => {
  return (
    <div className='w-full'>
      <h1 className='text-sm text-center mb-4'>Sign up to see photos and videos from your friends.</h1>
      <Button variant={"blue"} className='h-7 text-xs w-full flex items-center gap-2'>
      <Image width={20} height={20} src={FacebookImg} alt="" />
        <span className=" font-medium">
          Log in with Facebook
        </span>
      </Button>
      <DividerWithText text="OR" className='mt-4' />

    </div>
  );
};

export default page;
