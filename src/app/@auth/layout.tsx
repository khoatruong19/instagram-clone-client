'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Logo from '@/assets/images/logo.png';
import GooglePlayInstall from '@/assets/images/google-play-install.png';
import MicrosoftInstall from '@/assets/images/microsoft-install.png';
import { cn } from '@/lib/utils';
import LoginPhoneBg from '@/assets/images/home-phones-bg.png';
import HomeInstagramImage from '@/assets/images/home-instagram.png';
import DetailInstagramImage from '@/assets/images/detail-instagram.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const images = [HomeInstagramImage, DetailInstagramImage];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const pathname = usePathname();

  const isLoginPage = pathname === '/';

  useEffect(() => {
    const changeImageInterval = setInterval(() => {
      setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(changeImageInterval);
  }, [imageIndex]);

  return (
    <div
      className={cn(
        'flex items-center justify-center min-h-screen min-w-full',
        { relative: isLoginPage }
      )}
    >
      {isLoginPage && (
        <div className="hidden md:block md:relative h-[480px] w-[350px]">
          <div className="absolute w-full h-full top-0 left-[5px] ">
            <Image className="object-contain" fill src={LoginPhoneBg} alt="" />
            <div className="absolute w-[90%] h-[85.5%] top-[22px] left-[55px] animate-slowly-appear">
              <Image
                className="object-contain "
                fill
                src={images[imageIndex]}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      <div className="max-w-lg">
        <div className="sm:p-8 sm:border sm:border-gray-300">
          <div className="relative h-14 mb-4">
            <Image className="object-contain" src={Logo} fill alt="" />
          </div>
          <div className="w-[220px] mx-auto">{children}</div>
        </div>
        <div className="sm:p-5 sm:border sm:border-gray-300 flex items-center justify-center mt-3">
          {!isLoginPage ? (
            <p className="text-xs">
              Have an account?{' '}
              <Link href="/">
                <span className="text-blue-500 font-medium">Log in</span>
              </Link>
            </p>
          ) : (
            <p className="text-xs">
              Don&apos;t have an account?{' '}
              <Link href="/accounts/emailsignup">
                <span className="text-blue-500 font-medium">Sign up</span>
              </Link>
            </p>
          )}
        </div>
        <div className="my-9 flex justify-center items-center flex-col gap-4">
          <p className="text-xs">Get the app.</p>
          <div className="flex items-center gap-2">
            <Image
              className="object-cover"
              src={GooglePlayInstall}
              alt=""
              width={100}
            />
            <div className="relative w-[85px] h-[28px]">
              <Image
                className="object-cover"
                src={MicrosoftInstall}
                alt=""
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
