'use client';

import _ from 'lodash';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StoryItem from './story-item';
import { use, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {};

const sr1 =
  'https://instagram.fsgn2-7.fna.fbcdn.net/v/t51.2885-15/356798867_653240113376712_3931154444712759865_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fsgn2-7.fna.fbcdn.net&_nc_cat=100&_nc_ohc=HkG58-n3rFMAX_ek43c&edm=AJ9x6zYBAAAA&ccb=7-5&ig_cache_key=MzEzNjM4MTczMDk0MTUwNDIzOA%3D%3D.2-ccb7-5&oh=00_AfB_QTc0_DstYpyjnFiLwIXYANblBuHjtdWFE94jTkHPfg&oe=64A5C627&_nc_sid=65462d';
const sr2 =
  'https://instagram.fsgn2-8.fna.fbcdn.net/v/t51.2885-19/152740457_1120519425056114_4381039850149189509_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsgn2-8.fna.fbcdn.net&_nc_cat=102&_nc_ohc=N4LpCLvzWdEAX_xKAac&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfD7_EIK4uCbXb1egjwSMVQXZraD8N3yE8PfjWKm8neUhQ&oe=64A66014&_nc_sid=8b3546';

const Stories = (props: Props) => {
  const [scrollProcess, setScrollProcess] = useState({
    dir: 'next',
    index: 0,
  });
  const storiesContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollStories = useCallback(
    (dir: 'next' | 'back') => {
      if (dir === 'next') {
        if (scrollProcess.index + 4 >= 12)
          setScrollProcess({
            dir: 'next',
            index: 12-8,
          });
        else
          setScrollProcess({
            dir: 'next',
            index: scrollProcess.index + 4,
          });
        return;
      }

      if (scrollProcess.index - 4 <= 2)
        setScrollProcess({
          dir: 'next',
          index: 3,
        });
      else
        setScrollProcess({
          dir: 'next',
          index: 3,
        });
    },
    [scrollProcess]
  );

  const transformPixel = useMemo(() => {
    return `${scrollProcess.dir === 'next' ? '-' : ''}${
      scrollProcess.index * 81
    }px`;
  }, [scrollProcess]);

  console.log(scrollProcess);

  return (
    <div className="relative w-full ml-5 overflow-hidden">
      <div
        onClick={() => handleScrollStories('back')}
        className="absolute top-3 left-0 p-1 rounded-full bg-white shadow-md z-40"
      >
        <ChevronLeft size={19} />
      </div>
      <div
        ref={storiesContainerRef}
        style={{ transform: `translateX(${transformPixel})` }}
        className={'w-full flex gap-3 items-center duration-200'}
      >
        {_.range(24).map((item) => (
          <StoryItem image={item > 5 ? sr1 : sr2} key={item} />
        ))}
      </div>
      <div
        onClick={() => handleScrollStories('next')}
        className="absolute top-4 right-0 p-1 rounded-full bg-white shadow-md z-40"
      >
        <ChevronRight size={19} />
      </div>
    </div>
  );
};

export default Stories;
