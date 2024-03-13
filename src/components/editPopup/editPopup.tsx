import React, { useRef } from "react";
import Button from "../button/button";
import close from "../../assets/svg/xmark-solid.svg";
import "./editPopup.sass";

interface FormProps {
  closeForm: () => void;
  onSubmit: (formData: { name: string; email: string }) => void;
}

const EditPop: React.FC<FormProps> = ({ closeForm, onSubmit }) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
    };

    onSubmit(formData);
  };

  return (
    <section className="background-blur">
      <article className="edit-popup">
        <span onClick={closeForm} className="close">
          <img src={close} alt="close icon" />
        </span>
        <h2>Editing...</h2>
        <form onSubmit={handleFormSubmit} method="PATCH">
          <input
            type="text"
            placeholder="name:"
            className="input"
            ref={nameRef}
          />
          <input
            required={false}
            type="email"
            placeholder="email:"
            className="input"
            ref={emailRef}
          />
          <Button bgColor="bgBlue" text="submit" width="w100" />
        </form>
      </article>
    </section>
  );
};

export default EditPop;
