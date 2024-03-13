import { useEffect, useState } from "react";
import "./sass/app.sass";
import Form from "./components/form/form";
import Clients from "./components/clients/clients";
import DeletePopup from "./components/deletePopup/deletePopup";
import { api } from "./services/api";

interface CustomerProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}

export default function App() {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);
  const [deletePopup, setDeletePopup] = useState<boolean>(false);
  const [idToDelete, setIdToDelete] = useState<string | null>(null);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const response = await api.get("/customers");
    setCustomers(response.data);
  };

  const handleFormSubmit = async (formData: {
    name: string;
    email: string;
  }) => {
    if (formData.name.trim().length < 1 || formData.email.trim().length < 1) {
      return alert("The name field and email field can't be empty!");
    }

    try {
      const response = await api.post("/customer", formData);

      if (response.status === 200) {
        alert("Form submitted succssfully!");
        setCustomers((allcustomers) => [...allcustomers, response.data]);
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred during form submission. Please try again.");
      console.error("Error submitting form:", error);
    }
  };
  // edit
  const handleOnEdit = (id: string) => {
    alert(id);
  };

  //delete
  const handleOnDelete = (id: string) => {
    setIdToDelete(id);
    setDeletePopup(true);
  };

  // Function to confirm delete operation
  const handleOnDeleteConfirm = async () => {
    if (idToDelete) {
      try {
        await api.delete("/customer", {
          params: {
            id: idToDelete,
          },
        });

        const allcustomers = customers.filter(
          (customer) => customer.id !== idToDelete
        );

        setCustomers(allcustomers);
        
      } catch (err) {
        console.log(err);
      }
    }
    setDeletePopup(false);
  };

  // Function to cancel delete operation
  const handleOnDeleteCancel = () => {
    setDeletePopup(false);
    setIdToDelete(null);
  };

  return (
    <>
      {deletePopup && (
        <DeletePopup
          onDelete={handleOnDeleteConfirm}
          onCancel={handleOnDeleteCancel}
        />
      )}
      <div className="container">
        <main className="content">
          <h1>Clients</h1>
          <Form method="POST" onSubmit={handleFormSubmit} />

          <section className="clients">
            {customers.length > 0 ? (
              customers.map((customer) => (
                <Clients
                  key={customer.id}
                  name={customer.name}
                  email={customer.email}
                  status={customer.status}
                  onEdit={() => handleOnEdit(customer.id)}
                  onDelete={() => handleOnDelete(customer.id)}
                />
              ))
            ) : (
              <p>Nenhum cliente disponível</p>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
