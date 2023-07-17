import CreatePostPopup from "./components/create-post-popup";

export enum POPUP {
  CREATE_POST = 'create-post',
}

export const POPUP_ELEMENTS = {
  // [POPUP.LOGIN]: <LoginAndRegisterPopup key={POPUP.LOGIN} nestedComponent={COMPONENT.LOGIN} />,
  [POPUP.CREATE_POST]: <CreatePostPopup key={POPUP.CREATE_POST} />,
};

type PopupElementsKeys = keyof typeof POPUP_ELEMENTS;

export type PopupElementsValues = (typeof POPUP_ELEMENTS)[PopupElementsKeys];

export const ASPECT_RATION_TAILWIND_CLASS = {
  "original": "",
  "1:1": "aspect-square",
  "4:5": "aspect-[4/5]",
  "16:9": "aspect-video",
}

export type AspectOptionKeys = keyof typeof ASPECT_RATION_TAILWIND_CLASS