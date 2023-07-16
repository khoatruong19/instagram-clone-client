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
