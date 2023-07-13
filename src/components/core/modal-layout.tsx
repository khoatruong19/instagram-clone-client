import { XIcon } from 'lucide-react'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const ModalLayout = ({children}: Props) => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/10'>
        <div className='absolute top-2 right-2'>
            <XIcon/>
        </div>
        {children}
    </div>
  )
}

export default ModalLayout