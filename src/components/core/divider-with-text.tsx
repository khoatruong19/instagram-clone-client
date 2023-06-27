import React from 'react';

type Props = {
  text?: string;
  dividerClassname?: string;
  textClassname?: string;
  className?: string
};

const DividerWithText = (props: Props) => {
  const { text, className="", dividerClassname = '', textClassname = '' } = props;

  return (
    <div className={`flex items-center justify-between gap-3 ${className}`}>
      <hr className={`h-[1px] w-[40%] bg-gray-300 ${dividerClassname}`} />
      {text && (
        <span className={`text-xs font-medium mt-1 ${textClassname}`}>
          {text}
        </span>
      )}
      <hr className={`h-[1px] w-[40%] bg-gray-300 ${dividerClassname}`} />
    </div>
  );
};

export default DividerWithText;
