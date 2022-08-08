import React from "react";
import { useState } from "react";
import "../estilos/estilo.css";

const initialValues = {
  name: "",
  email: "",
  cpf: "",
  idade: "",
  telefone: "",
};

class CadastrorController {
  constructor(paciente) {
    this.paciente = paciente;
    this.lista = [];
  }

  AdiconarPaciente() {
    this.lista.push(this.paciente);
    console.log(this.lista);
  }
}

function CadastroView() {
  /*
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  */
  /*
   * * Vários funções separadas que vão fazer a mesma coisa.
   */
  /*
  function AtualizarCampoNome(event) {
    setNome(event.target.value);
  }

  function AtualizarCampoEmail(event) {
    setEmail(event.target.value);
  }

  function AtualizarCampoCpf(event) {
    setCpf(event.target.value);
  }

  function AtualizarCampoIdade(event) {
    setIdade(event.target.value);
  }

  function AtualizarCampoNumeroContato(event) {
    setTelefone(event.target.value);
  }
*/

  const [values, setValues] = useState(initialValues);

  /**
   * * Uma só função handleInputChange para lidar com todas as mudanças do formulário
   */

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    console.log(...values);

    setValues({
      ...values,
      [name]: value,
    });
  };
  // Botão

  const CadastrarPressionado = (e) => {
    /**
     * ! Coloquei o prevent default para prevenir que o submit limpasse o formulário.
     * ! Daí podemos colocar um alert para o usuário saber que as informações foram salvas
     */

    e.preventDefault();
    const { name, value } = e.target;

    console.log(...values);

    setValues({
      ...values,
      [name]: value,
    });

    let Controllador = new CadastrorController(this.paciente);

    Controllador.AdicionarPaciente();
  };

  return (
    <form>
      <fieldset>
        <h1>Cadastro de Paciente</h1>
        <div className="form-content">
          <label className="labelName">Nome</label>
          <input
            type="text"
            placeholder="Nome Completo"
            name="nome"
            onChange={handleInputChange}
          />

          <label className="labelName">Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
          />

          <label className="labelName">CPF</label>
          <input
            type="text"
            placeholder="cpf"
            name="cpf"
            onChange={handleInputChange}
          />

          <label className="labelName">Idade</label>
          <input
            type="text"
            placeholder="Idade"
            name="idade"
            onChange={handleInputChange}
          />

          <label className="labelName">Telefone</label>
          <input
            type="text"
            placeholder="Telefone"
            name="telefone"
            onChange={handleInputChange}
          />
          <br />
        </div>
      </fieldset>
      <button type="submit" onClick={CadastrarPressionado}>
        Clique em mim
      </button>
    </form>
  );
}

export default CadastroView;
