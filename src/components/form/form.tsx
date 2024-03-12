import React from "react";
import Button from "../button/button";
import "./form.sass";

interface FormProps {
  method: string;
  onSubmit: () => void; 
}

const Form: React.FC<FormProps> = ({ method, onSubmit }) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    onSubmit(); 
  };

  return (
    <form method={method} className="form" onSubmit={handleSubmit}>
      <input type="text" placeholder="name:" className="input" />
      <input type="email" placeholder="email:" className="input" />
      <Button bgColor="bgBlue" text="submit" width="w100" onsubmit={onSubmit} />
    </form>
  );
};

export default Form;
