import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";

const Pacientes = ({pacientes})=>{
  return (
    <Page header={<h2>Pacientes</h2>} footer={<Nav/>}>
      {
        pacientes.map((o)=>{
          return <PacientesItem key={o._id} paciente={o} />
        })
      }
    </Page>
  );
}

const PacientesItem = ({paciente})=>{
  return (
    <section>
      {paciente.nombres} {paciente.apellidos}
    </section>
  );
}

export default Pacientes;
