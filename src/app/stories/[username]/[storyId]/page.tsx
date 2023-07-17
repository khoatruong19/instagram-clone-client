'use client';

import StoryCard from '@/components/home/feeds/story-card';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type Props = {
  params: { username: string; storyId: string };
};

const arrayLength = 4;

const Stories = (props: Props) => {
  const [watchingStoryIndex, setWatchingStoryIndex] = useState(0);

  const renderStoryCardByIndex = (index: number) => (
    <StoryCard
      key={index}
      isLastItem={index === arrayLength - 1}
      index={index}
      isWatching={index === watchingStoryIndex}
      setWatchingStoryIndex={setWatchingStoryIndex}
    />
  );

  return (
    <div className={cn('ml-auto h-screen w-screen')}>
      <div className="w-full h-full flex items-center justify-center gap-16 px-12 pt-10">
        <div className="min-w-[28vw] flex items-center justify-end gap-16 h-full">
          {watchingStoryIndex > 1 &&
            renderStoryCardByIndex(watchingStoryIndex - 2)}
          {watchingStoryIndex > 0 &&
            renderStoryCardByIndex(watchingStoryIndex - 1)}
        </div>

        <div className="w-fit h-full">
          {renderStoryCardByIndex(watchingStoryIndex)}
        </div>

        <div className="min-w-[28vw] flex items-center gap-16  h-full">
          {arrayLength - watchingStoryIndex - 1 >= 1 &&
            renderStoryCardByIndex(watchingStoryIndex + 1)}
          {arrayLength - watchingStoryIndex - 1 >= 2 &&
            renderStoryCardByIndex(watchingStoryIndex + 2)}
        </div>
      </div>
    </div>
  );
};

export default Stories;
