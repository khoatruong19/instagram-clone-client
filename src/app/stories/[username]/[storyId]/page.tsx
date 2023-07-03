'use client';

import StoryCard from '@/components/home/feeds/story-card';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

type Props = {
  params: { username: string; storyId: string };
};

const index = 1


const Stories = (props: Props) => {
  return (
    <div className={cn("ml-auto w-[68%] h-screen overflow-x-auto scrollbar-none" ,{
      "w-[100%]": index >= 2,
      "w-[85%]": index === 1
    })}>
      <div className="w-fit h-full flex items-center gap-16 pl-12">
        <StoryCard isWatching={false} />
        <StoryCard isWatching={true} />
        <StoryCard isWatching={false} />
        <StoryCard isWatching={false} />
        <StoryCard isWatching={false} />
        <StoryCard isWatching={false} />
        <StoryCard isWatching={false} />
        <StoryCard isWatching={false} />
        <StoryCard isWatching={false} />
      </div>
    </div>
  );
};

export default Stories;
