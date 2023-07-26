import DividerWithText from '@/components/core/divider-with-text';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Smile } from 'lucide-react';
import React, { useRef, useState } from 'react';
import ImagesSlider from './images-slider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import EmojiPicker from 'emoji-picker-react';
import { useCheckClickOutside } from '@/hooks/useCheckClickOutside';

type Props = {
  files: FileList | null;
  handleMoveToStep: (step: number) => void;
};

const PostCaption = (props: Props) => {
  const { files, handleMoveToStep } = props;

  const [caption, setCaption] = useState('');
  const [openEmojiOptions, setOpenEmojiOptions] = useState(false);

  const emojiOptionsRef = useRef<HTMLDivElement | null>(null);

  useCheckClickOutside({
    ref: emojiOptionsRef,
    callback: () => setOpenEmojiOptions(false),
  });

  const handleSelectEmoji = (emoji: string) =>
    setCaption((prev) => prev + emoji);

const handleSubmitPost = async () => {
    console.log("Submit")
}

  return (
    <>
      <div className="h-[3%] flex items-center justify-between mt-2.5">
        <ChevronLeft
          onClick={() => handleMoveToStep(2)}
          size={30}
          className="ml-2 cursor-pointer"
        />
        <h1 className="text-md font-medium text-center">Crop</h1>
        <Button
          className="text-blue-400 font-normal hover:text-primary"
          variant={'justText'}
          onClick={handleSubmitPost}
        >
          Share
        </Button>
      </div>

      <DividerWithText noText className="mt-2" dividerClassname="opacity-60" />

      <div className="flex h-full">
        <div className="w-2/3">
          <ImagesSlider files={files} />
        </div>
        <div className="w-1/3">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <span className="text-base font-medium">watchme990</span>
              </div>
            </div>
            <Textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write a caption..."
              className="resize-none border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[180px]"
            />
            <div className="flex items-center justify-between">
              <div ref={emojiOptionsRef} className="relative">
                <Smile
                  className="text-slate-400 cursor-pointer"
                  onClick={() => setOpenEmojiOptions(true)}
                />
                {openEmojiOptions && (
                  <div className="absolute left-0 top-7">
                    <EmojiPicker
                      onEmojiClick={(emoji) => handleSelectEmoji(emoji.emoji)}
                    />
                  </div>
                )}
              </div>
              <p className="text-xs text-slate-400">11/2000</p>
            </div>
          </div>
          <DividerWithText noText/>
        </div>
      </div>
    </>
  );
};

export default PostCaption;
