'use client';

import { useCallback, useState } from 'react';
import ImagesDropReorder from './images-crop-reorder';
import SelectFiles from './select-files';
import _ from 'lodash';

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

  const handleBackToStep = (step: number) => setCreatePostStep(step)

  // useEffect(() => {

  // })

  const renderStepElement = useCallback(() => {
    console.log({createPostStep})
    if (createPostStep === 1) return <SelectFiles handleOnChangeFiles={handleOnChangeFiles} />;
    if (createPostStep === 2) return <ImagesDropReorder files={files} handleBackToStepOne={() => handleBackToStep(1)} />;
    return null;
  }, [createPostStep]);

  return (
    <div className="w-full mx-2 md:w-[70%] lg:w-[60%] xl:w-[40%] h-full my-2 md:h-[80%] lg:h-[80%] bg-white rounded-xl overflow-hidden">
      {renderStepElement()}
    </div>
  );
};

export default CreatePostPopup;
