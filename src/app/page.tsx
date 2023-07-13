'use client';

import Feeds from '@/components/home/feeds';
import JWTManager from '@/lib/jwt';
import { authService } from '@/services/authService';
import _ from 'lodash';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function Home() {
  const { data } = useSession();

  const handleClick = async () => {
    try {
      console.log(JWTManager.getToken());
      const { data } = await authService.me();
      console.log({ data });
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    const token = _.get(data, 'token');
    if (token) JWTManager.setToken(token);
  }, [data]);

  return (
    <main className="w-full grid grid-cols-5 gap-14 max-h-screen overflow-auto ">
      <div className="col-span-3 flex justify-end pr-12">
        <div className="max-w-[640px]">
          <Feeds/>
        </div>
      </div>
      <div className="col-span-2">ashdjashjd</div>
    </main>
  );
}
