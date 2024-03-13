import React from "react";
import './deletePopup.sass'
import Button from "../button/button";

interface DeletePopProps {
  onDelete: () => void;
  onCancel: () => void;
}

const DeletePop: React.FC<DeletePopProps> = ({ onDelete, onCancel }) => {
  return (
    <section className="background-blur">
      <article className="delete-popup">
        <h2>Are you sure?</h2>
        <div className="buttons">
          <Button text="Delete" bgColor="bgBlue" width="" onsubmit={onDelete} />
          <Button text="Cancel" bgColor="bgRed" width="" onsubmit={onCancel} />
        </div>
      </article>
    </section>
  );
};

export default DeletePop;
