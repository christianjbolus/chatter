import React from 'react';
import Button from './Button';
import { IoWarningOutline } from 'react-icons/all'
import '../assets/css/components/Modal.css';

export default function Modal({ className, message, subMessage, setShow, handleDelete }) {
  return (
    <div className={className}>
      <div className="modal">
        <p className="modal-message">{message}</p>
        <p className="modal-sub-message">{subMessage}</p>
        <div className="modal-control">
          <Button className="btn btn-lg cancel" text="Cancel" onClick={() => setShow(false)} />
          <Button className="btn btn-lg" text="Delete" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}
