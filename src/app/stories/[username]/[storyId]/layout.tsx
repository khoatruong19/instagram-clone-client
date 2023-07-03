"use client"

import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/images/light-logo.png"
import { XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const StoriesLayout = ({ children }: { children: React.ReactNode }) => {

    const router = useRouter()

    const handleNavigateToHome = () => router.replace('/')

    return (
        <div className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#191919] text-white'>
            <div onClick={handleNavigateToHome} className='absolute left-4 top-4 cursor-pointer'>
                <Image
                    className="hidden lg:block"
                    width={110}
                    src={Logo}
                    alt=""
                />
            </div>
            {children}
            <div onClick={handleNavigateToHome} className='absolute right-5 top-5 cursor-pointer'>
                <XIcon size={35}/>
            </div>
        </div>
    )
}

export default StoriesLayout