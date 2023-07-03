import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

type Props = {
  isWatching: boolean;
};

const StoryCard = (props: Props) => {
  const { isWatching } = props;

  return (
    <div
      className={cn(
        'relative block h-full w-[95vw] md:h-[95%] lg:w-[30vw] bg-red-500 rounded-lg',
        {
          'lg:w-[12.5vw] lg:h-1/3': !isWatching,
        }
      )}
    >
      {isWatching && (
        <>
          <div
            className="absolute top-[50%] left-0 translate-x-[-165%] translate-y-[-50%] p-0.5
           rounded-full bg-gray-600 hover:bg-white text-black cursor-pointer"
          >
            <ChevronLeft size={20} />
          </div>
          <div
            className="absolute top-[50%] right-0 translate-x-[165%] translate-y-[-50%] p-0.5
           rounded-full bg-gray-600 hover:bg-white text-black cursor-pointer"
          >
            <ChevronRight size={20} />
          </div>
        </>
      )}
    </div>
  );
};

export default StoryCard;
