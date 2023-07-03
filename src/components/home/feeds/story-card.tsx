import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Play,
  Volume,
  VolumeX,
} from 'lucide-react';
import React from 'react';

type Props = {
  isWatching: boolean;
};

const StoryCard = (props: Props) => {
  const { isWatching } = props;
  const isSound = false;

  const renderSlideButton = () => (
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
  );

  const renderTopCardActions = () => (
    <div className="absolute px-4 top-4 left-0 w-full ">
      <div className="h-0.5 bg-white" />
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="h-9 w-9 rounded-full bg-red-400" />
          <span>watchme990</span>
          <span className="text-slate-400">4h</span>
        </div>
        <div className="flex items-center gap-3">
          <Play size={20} fill="#fff" className="cursor-pointer" />
          <span className="cursor-pointer">
            {isSound ? (
              <Volume size={22} fill="#fff" />
            ) : (
              <VolumeX size={22} fill="#fff" />
            )}
          </span>
          <MoreHorizontal size={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );

  // const autoIncreaseHeight = ()

  const renderBottomCardActions = () => (
    <div className="absolute min-h-[44px] bottom-4 right-4 left-4 px-5 flex items-center rounded-3xl border gap-3 border-white">
      <textarea
        placeholder="Reply to watchme990..."
        className="border-none h-[100px] my-auto px-0 text-base bg-transparent text-white focus:outline-none
        break-words flex-1 scrollbar-none resize-none"
      ></textarea>
      <span className="text-base font-medium cursor-pointer">Send</span>
    </div>
  );

  return (
    <div
      className={cn(
        'relative block h-full w-[95vw] md:h-[95%] lg:w-[30vw] bg-red-300 rounded-lg',
        {
          'lg:w-[12.5vw] lg:h-1/3': !isWatching,
        }
      )}
    >
      {isWatching && (
        <>
          {renderTopCardActions()}
          {renderSlideButton()}
          {renderBottomCardActions()}
        </>
      )}
    </div>
  );
};

export default StoryCard;
