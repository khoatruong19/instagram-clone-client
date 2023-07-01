"use client"

import { Button } from '@/components/ui/button'
import { authService } from '@/services/authService';
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import JWTManager from "@/lib/jwt"
import { useEffect } from 'react';
import _ from 'lodash';

export default function Home() {

  const {data} = useSession()

  const handleClick = async () => {
    try {
      console.log(JWTManager.getToken())
      const {data} = await authService.me()
      console.log({data})
    } catch (error) {
      console.log({error})
    }
  }

  useEffect(() => {
    const token = _.get(data, "token")
    if(token) JWTManager.setToken(token)
  },[data])

  return (
    <main className="w-full grid grid-cols-5 gap-20 min-h-screen ">
        <div className='col-span-3 flex justify-end'>
          
          <div onClick={handleClick} className='flex-1 max-w-xl'>
Click me
          </div>
        </div>
        <div className='col-span-2'>
        ashdjashjd
        </div>
    </main>
  )
}
