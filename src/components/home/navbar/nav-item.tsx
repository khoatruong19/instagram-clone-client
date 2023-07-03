import React from 'react';
import { INavItem } from './utils/interfaces';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  item: INavItem;
  isActive: boolean;
  isProfileNav?: boolean;
};

const NavItem = ({ item, isActive, isProfileNav = false }: Props) => {
  const { icon: Icon, title, url } = item;

  return (
      <Link
        className={cn(
          'group w-full flex items-end gap-4 py-2 px-3 hover:bg-gray-200 rounded-md',
          {
            'font-bold': isActive,
          }
        )}
        href={url}
      >
        {isProfileNav ? (
          <>
            <div className="w-5 h-5 rounded-full bg-red-400 ml-1" />
            <span className="hidden lg:inline-block">Profile</span>
          </>
        ) : (
          <>
            <Icon
              size={25}
              strokeWidth={isActive ? 3 : 2}
              style={{ marginBottom: '0.1rem' }}
              className='group-hover:scale-105'
            />
            <span className="hidden lg:inline-block">{title}</span>
          </>
        )}
      </Link>
  );
};

export default NavItem;
