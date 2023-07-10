'use client';

import StoryCard from '@/components/home/feeds/story-card';
import { START_INDEX_TO_TRANSLATE_STORY_CARDS } from '@/components/home/feeds/utils/constants';
import { cn } from '@/lib/utils';
import _ from 'lodash';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';

type Props = {
  params: { username: string; storyId: string };
};

const Stories = (props: Props) => {

  const [watchingStoryIndex, setWatchingStoryIndex] = useState(0)

  return (
    <div className={cn("ml-auto h-screen overflow-x-auto scrollbar-none", {
      "w-[100%]": watchingStoryIndex >= 2,
      "w-[85%]": watchingStoryIndex === 1,
      "w-[68%]": watchingStoryIndex === 0
    })}>
      <div className="w-fit h-full flex items-center gap-16 pl-12">
        {_.range(10).map((item, index) => (
          <StoryCard isLastItem={index === 9} index={index} isWatching={item === watchingStoryIndex}
            setWatchingStoryIndex={setWatchingStoryIndex} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
