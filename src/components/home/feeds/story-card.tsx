import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MoreHorizontal,
  Play,
  Send,
  Volume,
  VolumeX,
} from 'lucide-react';
import React, { use, useCallback, useEffect, useRef, useState } from 'react';
import StoryItem from './story-item';
import { sr1 } from './stories';

type Props = {
  index: number
  isWatching: boolean;
  isLastItem: boolean
  setWatchingStoryIndex: (index: number) => void
};

const StoryCard = (props: Props) => {
  const { index, isWatching, isLastItem = false, setWatchingStoryIndex } = props;
  const isSound = false;
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null)
  const ref = useRef<HTMLDivElement | null>(null)

  const [message, setMessage] = useState("")

  const handleScrollStories = useCallback((dir: ScrollDirection) => {
    if (dir === "back" && index > 0) setWatchingStoryIndex(index - 1)
    if (dir === "next" && !isLastItem) setWatchingStoryIndex(index + 1)
  }, [index, isLastItem, setWatchingStoryIndex])

  const renderSlideButton = () => (
    <>
      <div
        className="absolute top-[50%] left-0 translate-x-[-165%] translate-y-[-50%] p-0.5
     rounded-full bg-gray-600 hover:bg-white text-black cursor-pointer"
     onClick={() => handleScrollStories('back')}
      >
        <ChevronLeft size={20} />
      </div>
      <div
        className="absolute top-[50%] right-0 translate-x-[165%] translate-y-[-50%] p-0.5
     rounded-full bg-gray-600 hover:bg-white text-black cursor-pointer"
     onClick={() => handleScrollStories('next')}
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

  const autoIncreaseHeight = () => {
    if (!messageInputRef || !messageInputRef.current) return

    if (messageInputRef.current.value.length === 0) {
      messageInputRef.current.style.height = "25px"
      return
    }

    messageInputRef.current.style.height = (messageInputRef.current.scrollHeight) + "px";
  }

  const renderBottomCardActions = () => (
    <div className="absolute bottom-4 left-4 right-6  flex items-center gap-3">
      <div className='h-full px-5 w-full flex items-center gap-3 rounded-3xl border min-h-[44px]  border-white'>
        <textarea
          ref={messageInputRef}
          placeholder="Reply to watchme990..."
          className="border-none h-[25px] my-auto px-0 py-0.5 text-base bg-transparent text-white focus:outline-none
        break-words flex-1 scrollbar-none resize-none"
          onInput={autoIncreaseHeight}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {message.length > 0 && (
          <span className="text-base font-medium cursor-pointer">Send</span>
        )}
      </div>
      <Heart size={30} className='cursor-pointer' />
      <Send size={30} className='cursor-pointer' />
    </div>
  );

  const renderNotWatchingInfo = () => (
    <div className='flex flex-col absolute 
    top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <StoryItem image={sr1} customClassName='flex-col text-base max-w-[100px]' isSeen={isWatching} />
      <span className="text-slate-400 text-center">4h</span>
    </div>
  )

  useEffect(() => {
    console.log(ref.current?.getBoundingClientRect().width)
  },[ref])

  if(index < 0) return null

  return (
    <div
    ref={ref}
      className={cn(
        'relative block h-full w-[95vw] md:h-[95%] lg:w-[30vw] bg-red-300 rounded-lg',
        {
          'lg:w-[12.5vw] lg:h-1/3 xl:w-[12vw] xl:h-[38%]': !isWatching,
        }
      )}
    >
      {isWatching ? (
        <>
          {renderTopCardActions()}
          {renderSlideButton()}
          {renderBottomCardActions()}
        </>
      ) : renderNotWatchingInfo()}
    </div>
  );
};

export default StoryCard;
