'use client';

import _ from 'lodash';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import { NUMBER_OF_MOVE_STORIES, NUMBER_OF_SHOW_STORIES, TRANSLATE_PIXELS_PER_STORY } from './constants';
import StoryItem from './story-item';

type Props = {};

const sr1 =
  'https://instagram.fsgn2-7.fna.fbcdn.net/v/t51.2885-15/356798867_653240113376712_3931154444712759865_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fsgn2-7.fna.fbcdn.net&_nc_cat=100&_nc_ohc=HkG58-n3rFMAX_ek43c&edm=AJ9x6zYBAAAA&ccb=7-5&ig_cache_key=MzEzNjM4MTczMDk0MTUwNDIzOA%3D%3D.2-ccb7-5&oh=00_AfB_QTc0_DstYpyjnFiLwIXYANblBuHjtdWFE94jTkHPfg&oe=64A5C627&_nc_sid=65462d';
const sr2 =
  'https://instagram.fsgn2-8.fna.fbcdn.net/v/t51.2885-19/152740457_1120519425056114_4381039850149189509_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsgn2-8.fna.fbcdn.net&_nc_cat=102&_nc_ohc=N4LpCLvzWdEAX_xKAac&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfD7_EIK4uCbXb1egjwSMVQXZraD8N3yE8PfjWKm8neUhQ&oe=64A66014&_nc_sid=8b3546';

const arrayLength = 26

const Stories = (props: Props) => {
  const [scrollProcess, setScrollProcess] = useState({
    dir: 'next',
    index: 0,
  });

  const canScrollStories = useMemo(() => {
    return {
      back: scrollProcess.index !== 0,
      next: scrollProcess.index < arrayLength - NUMBER_OF_SHOW_STORIES
    }
  }, [scrollProcess])

  const handleScrollStories = useCallback(
    (dir: 'next' | 'back') => {
      const restStoriesAfterExactPages = arrayLength % NUMBER_OF_SHOW_STORIES
      const restStoriesLength = arrayLength - (scrollProcess.index + NUMBER_OF_SHOW_STORIES)

      let storiesToMove = NUMBER_OF_MOVE_STORIES

      if (dir === 'next') {

        if (!canScrollStories.next) return


        if (restStoriesLength < NUMBER_OF_MOVE_STORIES) storiesToMove = restStoriesAfterExactPages

        setScrollProcess({
          dir: 'next',
          index: scrollProcess.index + storiesToMove,
        });
        return;
      }

      if (!canScrollStories.back) return

      setScrollProcess({
        dir: 'back',
        index: restStoriesLength === 0 ? scrollProcess.index - restStoriesAfterExactPages : scrollProcess.index - NUMBER_OF_MOVE_STORIES,
      });
    },
    [canScrollStories]
  );

  const transformPixel = useMemo(() => {
    const pixelsToTranslate = scrollProcess.index * TRANSLATE_PIXELS_PER_STORY

    return `-${pixelsToTranslate}px`
  }, [scrollProcess]);

  return (
    <div className="relative w-full ml-5 overflow-hidden">
      {canScrollStories.back && (
        <div
          onClick={() => handleScrollStories('back')}
          className="absolute top-5 left-4 p-1 rounded-full bg-white shadow-md z-40 cursor-pointer"
        >
          <ChevronLeft size={19} />
        </div>
      )}
      <div
        style={{ transform: `translateX(${transformPixel})` }}
        className={'w-full flex gap-2.5 items-center duration-500 pl-3'}
      >
        {_.range(arrayLength).map((item) => (
          <StoryItem image={item % 2 === 0 ? sr1 : sr2} key={item} />
        ))}
      </div>
      {canScrollStories.next && (
        <div
          onClick={() => handleScrollStories('next')}
          className="absolute top-5 right-4 p-1 rounded-full bg-white shadow-md z-40 cursor-pointer"
        >
          <ChevronRight size={19} />
        </div>
      )}
    </div>
  );
};

export default Stories;
