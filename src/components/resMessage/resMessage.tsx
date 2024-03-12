import React from "react";
import "./resMessage.sass";

interface ResMessageProps {
  bgColor: string;
  msg: string;
}

const ResMessage: React.FC<ResMessageProps> = ({ bgColor, msg }) => {
  return (
    <div className={`message ${bgColor}`}>
      <p>{msg}</p>
    </div>
  );
};

export default ResMessage;
