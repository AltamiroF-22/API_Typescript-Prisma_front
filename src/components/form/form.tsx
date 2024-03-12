import React, { useRef } from "react";
import Button from "../button/button";
import "./form.sass";

interface FormProps {
  method: string;
  onSubmit: (formData: { name: string; email: string }) => void;
}

const Form: React.FC<FormProps> = ({ method, onSubmit }) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
    };
    onSubmit(formData);
  };

  return (
    <form method={method} className="form" onSubmit={handleSubmit}>
      <input type="text" placeholder="name:" className="input" ref={nameRef} />
      <input
        type="email"
        placeholder="email:"
        className="input"
        ref={emailRef}
      />
      <Button bgColor="bgBlue" text="submit" width="w100" />
    </form>
  );
};

export default Form;
