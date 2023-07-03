'use client';

import React, { useEffect, useState } from 'react';
import { MORE_NAV_ITEM, NAV_ITEMS } from './constants';
import NavItem from './nav-item';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';
import { Instagram } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { INavItem } from './interfaces';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  const [selectedNav, setSelectedNav] = useState<INavItem | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    const navItemIndex = NAV_ITEMS.findIndex((i) => i.url === pathname);
    if (navItemIndex > -1) setSelectedNav(NAV_ITEMS[navItemIndex]);
  }, [pathname]);

  return (
    <div className="lg:w-[17vw] border-r border-gray-200 md:h-[100vh] fixed bottom-0 w-[100%] md:w-fit md:relative">
      <div className="relative h-full flex md:flex-col gap-4 lg:py-4 px-2 sm:px-12 md:px-3 justify-between md:justify-start">
        <Link href="/" className="mt-4 mb-5 lg:p-0">
          <Image
            className="ml-2 hidden lg:block"
            width={110}
            src={Logo}
            alt=""
          />
          <div className="group hidden md:block lg:hidden p-2 h-fit hover:bg-slate-300 my-5 mb-1 rounded-md">
            <Instagram
              size={20}
              className='group-hover:scale-105'
            />
          </div>
        </Link>

        {NAV_ITEMS.map((item, i) => (
          <div
            className={!item.mobileDisplay ? 'hidden md:block' : ''}
            onClick={() => setSelectedNav(item)}
            key={item.title}
          >
            <NavItem
              item={item}
              isActive={selectedNav === item}
              isProfileNav={NAV_ITEMS.length - 1 === i}
            />
          </div>
        ))}
        <div className='absolute bottom-6 left-2 sm:left-12 md:left-3 w-[91%]'>
          <NavItem item={MORE_NAV_ITEM} isActive={selectedNav === MORE_NAV_ITEM} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
