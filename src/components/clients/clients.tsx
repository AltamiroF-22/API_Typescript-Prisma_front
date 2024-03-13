import React from "react";
import Pencil from "../../assets/svg/Group 10Pencil.svg";
import TrashCan from "../../assets/svg/Group 9Trash_can.svg";
import "./clients.sass";

interface ClientsProps {
  name: string;
  email: string;
  status: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const Clients: React.FC<ClientsProps> = ({
  name,
  email,
  status,
  onEdit,
  onDelete,
}) => {
  const truncatedName = name.length > 26 ? name.substring(0, 26) + "..." : name;
  const truncatedEmail =
    email.length > 26 ? email.substring(0, 26) + "..." : email;

  return (
    <article className="client">
      <span className={`status  ${status === true ? "green" : "red"}`}></span>
      <div className="content">
        <div className="client-data">
          <p>
            name: <span>{truncatedName}</span>
          </p>
          <p>
            email: <span>{truncatedEmail}</span>
          </p>
        </div>
        <div className="actions">
          <button className="icon">
            <img src={Pencil} alt="pencil icon" onClick={onEdit} />
          </button>
          <button className="icon">
            <img src={TrashCan} alt="trash can icon" onClick={onDelete} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Clients;
