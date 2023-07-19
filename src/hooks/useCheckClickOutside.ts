import { useEffect } from 'react';

interface IParams{
    ref: any,
    callback: () => void,
}

export const useCheckClickOutside = ({ref, callback}: IParams) => {
 useEffect(
    () => {
     const handleClickOutside = (event: MouseEvent) => {
       if (!ref.current || ref.current.contains(event.target)) {
         return;
       }
       callback()
     };
     document.addEventListener('mousedown', handleClickOutside);
     return () => {
       document.removeEventListener('mousedown', handleClickOutside);
     };
   },
   [ref, callback],
 );
};