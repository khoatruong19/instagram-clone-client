import {
  Home,
  Search,
  Compass,
  MonitorPlay,
  MessageCircle,
  Heart,
  PlusSquare,
  AlignJustify
} from 'lucide-react';

import { INavItem } from './interfaces';

export const NAV_ITEMS: INavItem[] = [
  {
    title: 'Home',
    icon: Home,
    url: '/',
    mobileDisplay: true,
  },
  {
    title: 'Search',
    icon: Search,
    url: '/search',
    mobileDisplay: false,
  },
  {
    title: 'Explore',
    icon: Compass,
    url: '/explore',
    mobileDisplay: true,
  },
  {
    title: 'Reels',
    icon: MonitorPlay,
    url: '/reels',
    mobileDisplay: true,
  },
  {
    title: 'Messages',
    icon: MessageCircle,
    url: '/messages',
    mobileDisplay: true,
  },
  {
    title: 'Notifications',
    icon: Heart,
    url: '/notifications',
    mobileDisplay: false,
  },
  {
    title: 'Create',
    icon: PlusSquare,
    url: '/create',
    mobileDisplay: true,
  },
  {
    title: 'Profile',
    icon: PlusSquare,
    url: '/profile',
    mobileDisplay: true,
  },
];

export const MORE_NAV_ITEM: INavItem = {
  title: 'More',
  icon: AlignJustify,
  url: '/more',
  mobileDisplay: false,
}

