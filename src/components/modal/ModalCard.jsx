// import React from 'react';
// import {
//   H1,
//   H2,
//   H3,
//   ModalWindowImg,
//   RentalCar,
//   Span,
// } from './ModalWindow.styled';

import { useState } from 'react';
import { useDeleteMessageMutation } from '../redux/rtkQuery/rtkQuery';
import ModalCarUpdate from './ModalCarUpdate';
import ModalWindow from './ModalWindow';

// import { useDispatch } from 'react-redux';

const ModalCard = ({ elementId }) => {
  const [updateElementID, setUpdateElementID] = useState('');
  const [deleteMessage] = useDeleteMessageMutation();

  const handleUpdateMessage = id => {
    setUpdateElementID(id);
  };
  return (
    <>
      <button type="button" onClick={() => deleteMessage(elementId)}>
        Delete
      </button>
      <button type="button" onClick={() => handleUpdateMessage(elementId)}>
        Update
      </button>
      {updateElementID && (
        <ModalWindow>
          <ModalCarUpdate updateElementID={updateElementID} />
        </ModalWindow>
      )}
    </>
  );
};
export default ModalCard;
