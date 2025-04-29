import { createPortal } from 'react-dom'
import { useRef, useEffect, useState } from 'react'
import './Modal.css'

export default function Modal({ children, open }) {
  const dialog = useRef()
  const [tab, setTab] = useState('education')

  useEffect(() => {
    if (open) {
      dialog.current.showModal()
    } else {
      dialog.current.close()
    }
  }, [open])

  return createPortal(
    <dialog ref={dialog}>
        {children}
    </dialog>,
    document.getElementById('modal')
  )
}