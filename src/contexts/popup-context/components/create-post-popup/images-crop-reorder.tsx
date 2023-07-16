import DividerWithText from '@/components/core/divider-with-text';
import { Button } from '@/components/ui/button';
import useSlideIndex from '@/hooks/useSlideIndex';
import _ from 'lodash';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useState } from 'react';

type Props = {
  files: FileList | null;
  handleBackToStepOne: () => void;
};

const ImagesDropReorder = (props: Props) => {
  const { files, handleBackToStepOne } = props;
  const { index: fileIndex, handleSlideIndex } = useSlideIndex(
    files ? files.length - 1 : 0
  );

  const renderImage = useCallback(() => {
    if (!files || files.length === 0) return null;
    const file = files[fileIndex];
    const imgUrl = window.URL.createObjectURL(file);
    return (
      <img
        alt=""
        src={imgUrl}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    );
  }, [files, fileIndex]);

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

      <div className="relative h-[97%] w-full  overflow-hidden">
        {fileIndex > 0 && (
          <div
            onClick={() => handleSlideIndex('decrease')}
            className="absolute z-[99999] top-[50%] translate-y-[-50%] left-2 p-1.5 rounded-full bg-black hover:opacity-70"
          >
            <ChevronLeft
              size={25}
              className="cursor-pointer text-white"
            />
          </div>
        )}
        {renderImage()}
        {fileIndex !== files?.length! - 1 && (
          <div
            onClick={() => handleSlideIndex('increase')}
            className="absolute z-[99999] top-[50%] translate-y-[-50%] right-2 p-1.5 rounded-full bg-black hover:opacity-70"
          >
            <ChevronRight
              size={25}
              className="cursor-pointer text-white"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ImagesDropReorder;
