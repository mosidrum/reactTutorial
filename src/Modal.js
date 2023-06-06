import React, { useRef, useState } from 'react';
import { useOnClickOutside } from './useOnClickOutside';

const Modal = () => {
  const [modal, setModal] = useState(false);
  const ref = useRef();

  useOnClickOutside( ref, modal, () => setModal(false));
  return (
    <div className="modal">
      <button onClick={() => setModal(true)}>Modal</button>
      {modal && (
        <div ref={ref} className="modalContent">
          <span onClick={() => setModal(false)}>X</span>
          <div>modal content here</div>
        </div>
      )}
    </div>
  )
}

export default Modal;
