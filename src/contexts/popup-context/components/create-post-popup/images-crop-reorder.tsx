import DividerWithText from '@/components/core/divider-with-text';
import { Button } from '@/components/ui/button';
import useSlideIndex from '@/hooks/useSlideIndex';
import { cn } from '@/lib/utils';
import _ from 'lodash';
import { ChevronLeft, ChevronRight, Maximize2, ZoomIn } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ASPECT_RATION_TAILWIND_CLASS, AspectOptionKeys } from '../../constants';

type Props = {
  files: FileList | null;
  handleBackToStepOne: () => void;
};

const ImagesDropReorder = (props: Props) => {
  const { files, handleBackToStepOne } = props;

  const { index: fileIndex, handleSlideIndex } = useSlideIndex(
    files ? files.length - 1 : 0
  );

  const [aspectOption, setAspectOption] =
    useState<AspectOptionKeys>('original');
  const [openAspectOptions, setOpenAspectOptions] = useState(false);

  const imageRef = useRef<HTMLDivElement | null>(null);

  const renderImage = useCallback(() => {
    if (!files || files.length === 0) return null;
    const file = files[fileIndex];
    const imgUrl = window.URL.createObjectURL(file);
    return (
      <img
        alt=""
        src={imgUrl}
        className={cn(
          `absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-53%] 
          max-w-full max-h-full object-cover ${ASPECT_RATION_TAILWIND_CLASS[aspectOption]}`,
          {
            'w-full h-full top-0 left-0 translate-x-0 translate-y-0':
              aspectOption === 'original' || aspectOption === '1:1',
            'h-full top-0 translate-y-0': aspectOption === "4:5"
          }
        )}
      />
    );
  }, [files, fileIndex, aspectOption]);

  const renderAspectAndZoomSettings = () => (
    <div className="absolute bottom-10 left-3 flex items-center gap-2">
      <div
        onClick={() => setOpenAspectOptions((prev) => !prev)}
        className={cn(
          'p-1.5 rounded-full shadow-equal bg-white hover:opacity-70 cursor-pointer'
        )}
      >
        <Maximize2 size={18} />
      </div>
      {openAspectOptions && (
        <div className='absolute bottom-10 left-0 w-36 bg-black/70 text-base text-gray-400 font-medium rounded-lg overflow-hidden'>
          {_.map(ASPECT_RATION_TAILWIND_CLASS, (_, value: AspectOptionKeys) => (
            <div onClick={() => setAspectOption(value)} className='p-2 cursor-pointer border-b-[1px] border-white'>{value}</div>
          ))}
        </div>
      )}
      <div
        className={cn(
          'p-1.5 rounded-full shadow-equal bg-white hover:opacity-70 cursor-pointer'
        )}
      >
        <ZoomIn size={18} />
      </div>
    </div>
  );

  if (!files) return null;

  return (
    <>
      <div className="h-[3%] flex items-center justify-between mt-2.5">
        <ChevronLeft
          onClick={handleBackToStepOne}
          size={30}
          className="ml-2 cursor-pointer"
        />
        <h1 className="text-md font-medium text-center">Crop</h1>
        <Button
          className="text-blue-400 font-normal hover:text-primary"
          variant={'justText'}
        >
          Next
        </Button>
      </div>

      <DividerWithText noText className="mt-2" dividerClassname="opacity-60" />

      <div
        ref={imageRef}
        className="relative h-[97%] w-full overflow-hidden flex"
      >
        {fileIndex > 0 && (
          <div
            onClick={() => handleSlideIndex('decrease')}
            className="absolute z-[99999] top-[50%] translate-y-[-50%] left-2 p-1.5 rounded-full bg-black hover:opacity-70"
          >
            <ChevronLeft size={25} className="cursor-pointer text-white" />
          </div>
        )}

        {renderImage()}
        {renderAspectAndZoomSettings()}

        {fileIndex !== files?.length! - 1 && (
          <div
            onClick={() => handleSlideIndex('increase')}
            className="absolute z-[99999] top-[50%] translate-y-[-50%] right-2 p-1.5 rounded-full bg-black hover:opacity-70"
          >
            <ChevronRight size={25} className="cursor-pointer text-white" />
          </div>
        )}
      </div>
    </>
  );
};

export default ImagesDropReorder;
