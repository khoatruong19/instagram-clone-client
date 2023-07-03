import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/images/light-logo.png"

const StoriesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-black text-white'>
            <div>
                <Image
                    className="ml-2 hidden lg:block"
                    width={110}
                    src={Logo}
                    alt=""
                />
            </div>
            {children}
        </div>
    )
}

export default StoriesLayout