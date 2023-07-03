import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

type Props = {
  image: string;
};

const StoryItem = (props: Props) => {
  const { image } = props;

  const isSeen = false;
  return (
    <div className="max-w-[70px] flex flex-col gap-1 items-center justify-center cursor-pointer">
      <div
        className={cn(
          'relative rounded-full w-16 h-16 overflow-hidden border-2 border-red-400',
          {
            'border-gray-400': isSeen,
          }
        )}
      >
        <Image className="rounded-full p-0.5" fill alt="" src={image} />
      </div>
      <p className="w-full text-xs truncate">watchme990</p>
    </div>
  );
};

export default StoryItem;
