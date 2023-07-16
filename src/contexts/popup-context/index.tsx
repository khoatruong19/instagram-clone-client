'use client';

import useToggle from '@/hooks/useToggle';
import { createContext, useContext, useEffect, useState } from 'react';
import { POPUP, POPUP_ELEMENTS, PopupElementsValues } from './constants';
import PopupLayout from '@/components/core/popup-layout';

type PopupContextType = {
  showPopup: (name: POPUP) => void;
  showPopupComponent: (element: PopupElementsValues) => void;
  closePopup: () => void;
};

const PopupContext = createContext<PopupContextType | null>({
  showPopup: () => {},
  showPopupComponent: () => {},
  closePopup: () => {},
});

const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const { value: isOpenPopup, toggle, setValue: setShowPopup } = useToggle();
  const [popupName, setPopupName] = useState<POPUP | ''>('');
  const [component, setComponent] = useState<React.ReactElement | null>(null);

  useEffect(
    () => {
      if (popupName) {
        if (Object.values(POPUP).includes(popupName)) {
          setComponent(POPUP_ELEMENTS[popupName]);
          setShowPopup(true);
          document.querySelector('main')?.classList.add("scrollbar-none", "mr-3")
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [popupName]
  );

  const showPopupComponent = (element: PopupElementsValues) => {
    setComponent(element);
    setShowPopup(true);
  };

  const showPopup = (name: POPUP) => {
    if (name) {
      setPopupName(name);
      return;
    }
  };

  const closePopup = () => {
    document.querySelector('main')?.classList.remove("scrollbar-none", "mr-3")
    setShowPopup(false);
  };

  const value = {
    showPopup,
    closePopup,
    showPopupComponent,
  };

  return (
    <PopupContext.Provider value={value}>
      <PopupLayout
        isOpen={isOpenPopup}
        toggle={() => {
          toggle();
          setPopupName('');
          document.querySelector('main')?.classList.remove("scrollbar-none", "mr-3")
        }}
      >
        {component}
      </PopupLayout>
      {children}
    </PopupContext.Provider>
  );
};

const usePopupContext = () => useContext(PopupContext)
export { usePopupContext, PopupProvider };
