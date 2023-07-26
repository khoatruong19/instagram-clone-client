'use client';

import { useCallback, useState } from 'react';
import ImagesDropReorder from './images-crop-reorder';
import SelectFiles from './select-files';
import _ from 'lodash';
import PostCaption from './post-caption';
import { cn } from '@/lib/utils';

type Props = {};

const CreatePostPopup = (props: Props) => {
  const [createPostStep, setCreatePostStep] = useState(1);
  const [files, setFiles] = useState<FileList | null>(null);

  const handleOnChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files  = _.get(e, "target.files")
    if(!files) return
    setFiles(files)
    setCreatePostStep(2);
  };

  const handleMoveToStep = (step: number) => setCreatePostStep(step)

  const renderStepElement = useCallback(() => {
    if (createPostStep === 1) return <SelectFiles handleOnChangeFiles={handleOnChangeFiles} />;
    if (createPostStep === 2) return <ImagesDropReorder files={files} handleMoveToStep={handleMoveToStep} />;
    if (createPostStep === 3) return <PostCaption files={files} handleMoveToStep={handleMoveToStep} />;
    return null;
  }, [createPostStep, files]);

  return (
    <div className={cn(`mx-2 w-full h-full my-2 md:h-[80vh] lg:h-[80vh] bg-white rounded-xl overflow-hidden`, {
        "md:w-[70vw] lg:w-[60vw] xl:w-[40vw]": createPostStep !== 3,
        "md:w-[85vw] lg:w-[75vw] xl:w-[55vw]": createPostStep === 3,
     })} >
      {renderStepElement()}
    </div>
  );
};

export default CreatePostPopup;
