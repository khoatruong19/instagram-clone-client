import React from 'react';
import { INavItem } from './interfaces';
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
          'group w-full flex items-end gap-3 p-2 hover:bg-gray-200 rounded-md',
          {
            'font-bold': isActive,
          }
        )}
        href={url}
      >
        {isProfileNav ? (
          <>
            <div className="w-5 h-5 rounded-full bg-red-400" />
            <span className="hidden lg:inline-block text-regular">Profile</span>
          </>
        ) : (
          <>
            <Icon
              size={20}
              strokeWidth={isActive ? 3 : 2}
              style={{ marginBottom: '0.1rem' }}
              className='group-hover:scale-105'
            />
            <span className="hidden lg:inline-block text-regular">{title}</span>
          </>
        )}
      </Link>
  );
};

export default NavItem;
