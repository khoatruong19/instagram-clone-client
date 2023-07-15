import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';
import React from 'react';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
};

const PopupLayout = (props: Props) => {
  const { isOpen, children, toggle = () => {} } = props;

  return (
    <div
      className={cn(
        'z-[99999] fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/60',
        { hidden: !isOpen }
      )}
    >
      <div onClick={toggle} className="absolute top-5 right-5 cursor-pointer text-white">
        <XIcon size={28} />
      </div>
      {children}
    </div>
  );
};

export default PopupLayout;
