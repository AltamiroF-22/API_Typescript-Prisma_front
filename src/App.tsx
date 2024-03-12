import "./sass/app.sass";
import Form from "./components/form/form";
import Clients from "./components/clients/clients";

export default function App() {
  const handleSubmit = () => {};
  return (
    <div className="container">
      <main className="content">
        <h1>Clients</h1>
        <Form method="POST" onSubmit={handleSubmit} />

        <div className="clients">
          <Clients
            name="Altamiro Júnior"
            email="altamiroribeirodarocha@gmail.com"
            status={true}
          />
          <Clients
            name="Altamiro Júnior"
            email="altamiroribeirodarocha@gmail.com"
            status={true}
          />
          <Clients
            name="Altamiro Júnior"
            email="altamiroribeirodarocha@gmail.com"
            status={true}
          />
          <Clients
            name="Altamiro Júnior"
            email="altamiroribeirodarocha@gmail.com"
            status={true}
          />
        </div>
      </main>
    </div>
  );
}
