/* eslint-disable @next/next/no-img-element */
import useSlideIndex from '@/hooks/useSlideIndex';
import React, { useCallback } from 'react';
import {
  ASPECT_RATION_TAILWIND_CLASS,
  AspectOptionKeys,
} from '../../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  files: FileList | null;
  aspectOption?: AspectOptionKeys;
  scalePercent?: number;
};

const ImagesSlider = (props: Props) => {
  const { files, aspectOption = "original", scalePercent = 0 } = props;

  const { index: fileIndex, handleSlideIndex } = useSlideIndex(
    files ? files.length - 1 : 0
  );

  const renderImage = useCallback(() => {
    if (!files || files.length === 0) return null;
    const file = files[fileIndex];
    const imgUrl = window.URL.createObjectURL(file);

    return (
      <div className="w-full h-full flex items-center justify-center ">
        <div
          className={cn('h-full w-full object-cover overflow-hidden', {
            'max-h-[500px]': aspectOption === '16:9',
            'max-w-[80%]': aspectOption === '4:5',
          })}
        >
          <img
            className={cn(
              `w-full max-h-full object-cover ${ASPECT_RATION_TAILWIND_CLASS[aspectOption]}`,
              {
                'w-full h-full':
                  aspectOption === 'original' || aspectOption === '1:1',
              }
            )}
            style={{
              scale: `${scalePercent + 100}%`,
            }}
            alt=""
            src={imgUrl}
          />
        </div>
      </div>
    );
  }, [files, fileIndex, aspectOption, scalePercent]);

  return (
    <div className='relative w-full h-full'>
      {fileIndex > 0 && (
        <div
          onClick={() => handleSlideIndex('decrease')}
          className="absolute z-[99999] top-[50%] translate-y-[-50%] left-2 p-1.5 rounded-full bg-black hover:opacity-70"
        >
          <ChevronLeft size={25} className="cursor-pointer text-white" />
        </div>
      )}

      {renderImage()}

      {fileIndex !== files?.length! - 1 && (
        <div
          onClick={() => handleSlideIndex('increase')}
          className="absolute z-[99999] top-[50%] translate-y-[-50%] right-2 p-1.5 rounded-full bg-black hover:opacity-70"
        >
          <ChevronRight size={25} className="cursor-pointer text-white" />
        </div>
      )}
    </div>
  );
};

export default ImagesSlider;
