"use client"

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {
  image: string;
  customClassName?: string
  isSeen?: boolean
};

const StoryItem = (props: Props) => {
  const { image, customClassName = "", isSeen = false } = props;
  const router = useRouter()


  return (
    <div onClick={() => router.push("/stories/sdjfkl/sdjflk")} className={cn(`max-w-[70px] flex flex-col gap-1 items-center
     justify-center cursor-pointer text-xs `, customClassName)}>
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
      <p className="w-full truncate">watchme990</p>
    </div>
  );
};

export default StoryItem;
