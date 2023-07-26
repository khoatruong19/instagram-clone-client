'use client';

import DividerWithText from '@/components/core/divider-with-text';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useCheckClickOutside } from '@/hooks/useCheckClickOutside';
import { cn } from '@/lib/utils';
import _ from 'lodash';
import {
  AlignEndHorizontal,
  ChevronLeft,
  Maximize2,
  ZoomIn
} from 'lucide-react';
import { useRef, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd';
import {
  ASPECT_RATION_TAILWIND_CLASS,
  AspectOptionKeys,
} from '../../constants';
import ImagesSlider from './images-slider';

type Props = {
  files: FileList | null;
  handleMoveToStep: (step: number) => void;
};

const ImagesDropReorder = (props: Props) => {
  const { files, handleMoveToStep } = props;

  const [aspectOption, setAspectOption] =
    useState<AspectOptionKeys>('original');
  const [openAspectOptions, setOpenAspectOptions] = useState(false);
  const [openScaleSlider, setOpenScaleSlider] = useState(false);
  const [openImagesOrder, setOpenImagesOrder] = useState(false);
  const [scalePercent, setScalePercent] = useState(0);

  const imageRef = useRef<HTMLDivElement | null>(null);
  const aspectOptionsRef = useRef<HTMLDivElement | null>(null);
  const scaleSliderRef = useRef<HTMLDivElement | null>(null);
  const imagesOrderRef = useRef<HTMLDivElement | null>(null);

  useCheckClickOutside({
    ref: aspectOptionsRef,
    callback: () => setOpenAspectOptions(false),
  });
  useCheckClickOutside({
    ref: imagesOrderRef,
    callback: () => setOpenScaleSlider(false),
  });
  useCheckClickOutside({
    ref: imagesOrderRef,
    callback: () => setOpenImagesOrder(false),
  });

  const renderAspectAndZoomSettings = () => (
    <div className="flex items-center gap-2">
      <div
        onClick={() => setOpenAspectOptions((prev) => !prev)}
        className={cn(
          'p-2 rounded-full shadow-equal bg-black/70 text-white hover:opacity-70 cursor-pointer'
        )}
      >
        <Maximize2 size={18} />
      </div>
      {openAspectOptions && (
        <div
          ref={aspectOptionsRef}
          className="shadow-lg absolute bottom-10 left-0 w-36 bg-black/70 text-base text-gray-400 
        font-medium rounded-lg overflow-hidden"
        >
          {_.map(ASPECT_RATION_TAILWIND_CLASS, (_, value: AspectOptionKeys) => (
            <div
              onClick={() => setAspectOption(value)}
              className={cn('p-2 cursor-pointer border-b-[1px] border-white', {
                'text-white': value === aspectOption,
              })}
            >
              {value}
            </div>
          ))}
        </div>
      )}
      <div
        className={cn(
          'p-2 rounded-full shadow-equal bg-black/70 text-white hover:opacity-70 cursor-pointer'
        )}
        onClick={() => setOpenScaleSlider((prev) => !prev)}
      >
        <ZoomIn size={18} />
      </div>
      {openScaleSlider && (
        <Slider
          ref={scaleSliderRef}
          defaultValue={[0]}
          max={100}
          step={10}
          onValueChange={(value) => setScalePercent(value[0])}
          className={cn(
            'w-[140px] absolute bottom-10 left-10 h-8 px-2 bg-black/70 rounded-lg'
          )}
        />
      )}
    </div>
  );

  const [arr, setArr] = useState(_.range(10));

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(arr);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setArr(items);
  };

  const renderReorderSection = () => (
    <>
      <div
        onClick={() => setOpenImagesOrder((prev) => !prev)}
        className={cn(
          'p-2 rounded-full shadow-equal bg-black/70 text-white hover:opacity-70 cursor-pointer'
        )}
      >
        <AlignEndHorizontal size={18} />
      </div>
      {openImagesOrder && (
        <div
          ref={imagesOrderRef}
          className="absolute bottom-10 right-0 h-32 overflow-x-auto w-full bg-black/50 flex gap-1.5 p-3 rounded-xl"
        >
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable
              droppableId="images"
              direction="horizontal"
              type="column"
            >
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="w-fit flex items-center h-full"
                >
                  {arr.map((item) => (
                    <Draggable key={item} draggableId={`${item}`} index={item}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          className="w-20 h-full bg-white mr-3"
                        />
                      )}
                    </Draggable>
                  ))}
                  <div className="w-10 h-10 flex items-center justify-center border-2 rounded-full text-white cursor-pointer hover:opacity-75">
                    +
                  </div>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      )}
    </>
  );

  if (!files) return null;

  return (
    <>
      <div className="h-[3%] flex items-center justify-between mt-2.5">
        <ChevronLeft
          onClick={() => handleMoveToStep(1)}
          size={30}
          className="ml-2 cursor-pointer"
        />
        <h1 className="text-md font-medium text-center">Crop</h1>
        <Button
          className="text-blue-400 font-normal hover:text-primary"
          variant={'justText'}
          onClick={() => handleMoveToStep(3)}
        >
          Next
        </Button>
      </div>

      <DividerWithText noText className="mt-2" dividerClassname="opacity-60" />

      <div
        ref={imageRef}
        className="relative h-[97%] w-full overflow-hidden flex"
      >
        <ImagesSlider
          aspectOption={aspectOption}
          files={files}
          scalePercent={scalePercent}
        />

        <div className="absolute bottom-10 px-4 w-full flex items-center justify-between">
          {renderAspectAndZoomSettings()}
          {renderReorderSection()}
        </div>
      </div>
    </>
  );
};

export default ImagesDropReorder;
