import React from 'react';
import Button from './Button';
import { IoWarningOutline } from 'react-icons/all'
import '../assets/css/components/Modal.css';

export default function Modal({ className, message, setShow, handleDelete }) {
  return (
    <div className={className}>
      <div className="modal">
        <IoWarningOutline className="delete-icon" />
        <p className="modal-message">{message}</p>
        <div className="modal-control">
          <Button className="btn-cancel" text="Cancel" onClick={() => setShow(false)} />
          <Button className="btn-delete" text="Delete" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}
