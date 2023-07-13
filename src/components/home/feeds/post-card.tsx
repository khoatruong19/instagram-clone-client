import DividerWithText from '@/components/core/divider-with-text';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Flag, Heart, MessageCircle, MoreHorizontal, Send, Smile } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {};

const PostCard = (props: Props) => {
  const [comment, setComment] = useState('');

  const handleSubmitComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <span className="text-base font-bold">watchme990</span>
            <span className="ml-1 text-base text-gray-400">• 12h</span>
          </div>
        </div>
        <div className='cursor-pointer hover:opacity-70'>
          <MoreHorizontal size={20} />
        </div>
      </div>

      <div className="relative h-[600px] w-full rounded-sm overflow-hidden">
        <Image
          fill
          src="https://github.com/shadcn.png"
          alt=""
          className="object-cover"
        />
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          <Heart size={27} />
          <MessageCircle size={27} />
          <Send size={27} />
        </div>
        <div>
          <Flag size={27} />
        </div>
      </div>

      <div className="mt-4 font-medium text-base">14,110 likes</div>

      <div className="mt-2 text-base">
        <span className="font-bold mr-1">watchme990</span>
        Swipe to see ALL the news around the NBA! 🚨 • Follow @nbacounty for
        more updates like this ‼️ • Check out my THREADS account to get
        EXCLUSIVE news that didn’t make
      </div>

      <div className="text-base text-gray-400 mt-2 cursor-pointer">
        View all 274 comments
      </div>

      <form className="flex items-center gap-2" onSubmit={handleSubmitComment}>
        <Input
          className="px-0 border-none text-base flex-1"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
        />
        {comment.length > 0 && (
          <Button
            variant={'justText'}
            className="text-blue-400 p-0 hover:text-blue-900 font-medium text-base"
          >
            Post
          </Button>
        )}
        <span className='cursor-pointer hover:opacity-70'><Smile size={14} className='text-gray-500'/></span>
      </form>
      <DividerWithText className='gap-0' dividerClassname='w-full'/>
    </div>
  );
};

export default PostCard;
