import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { modalShow } from '../../redux/slice';
const ModalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispath = useDispatch();
  return createPortal(
    <>
      {children}

      <button
        type="button"
        className="btn btn-secondary"
        data-bs-dismiss="modal"
        onClick={() => dispath(modalShow(false))}
      >
        Close
      </button>
    </>,
    ModalRoot
  );
};

export default Modal;
