import React from "react";
import Pencil from "../../assets/svg/Group 10Pencil.svg";
import TrashCan from "../../assets/svg/Group 9Trash_can.svg";
import "./clients.sass";

interface ClientsProps {
  name: string;
  email: string;
  status: boolean;
}

const Clients: React.FC<ClientsProps> = ({ name, email, status }) => {
  return (
    <article className="client">
      <span className={`status  ${status === true ? "green" : "red"}`}></span>
      <div className="content">
        <div className="client-data">
          <p>
            name: <span>{name}</span>
          </p>
          <p>
            email: <span>{email}</span>
          </p>
        </div>
        <div className="actions">
          <button className="icon">
            <img src={Pencil} alt="pencil icon" />
          </button>
          <button className="icon">
            <img src={TrashCan} alt="trash can icon" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Clients;
