import React, { useState } from "react";
import {
  validarNome,
  validarCPF,
  validarEndereco,
  validarSalario,
  validarDataNascimento,
} from "../utils/validacoes"; // Importando as funções de validação
import "../styles/Formulario.css"; // Importando o arquivo de estilos CSS

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    cpf: "",
    endereco: "",
    salario: "",
    dataNascimento: "",
  });

  const [erros, setErros] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let erros = {};

    const nomeErro = validarNome(formData.nome);
    if (nomeErro) {
      valid = false;
      erros.nome = nomeErro;
    }

    const cpfErro = validarCPF(formData.cpf);
    if (cpfErro) {
      valid = false;
      erros.cpf = cpfErro;
    }

    const enderecoErro = validarEndereco(formData.endereco);
    if (enderecoErro) {
      valid = false;
      erros.endereco = enderecoErro;
    }

    const salarioErro = validarSalario(formData.salario);
    if (salarioErro) {
      valid = false;
      erros.salario = salarioErro;
    }

    const dataNascimentoErro = validarDataNascimento(formData.dataNascimento);
    if (dataNascimentoErro) {
      valid = false;
      erros.dataNascimento = dataNascimentoErro;
    }

    setErros(erros);

    if (valid) {
      console.log("Formulário enviado com sucesso", formData);
    }
  };

  return (
    <div className="formulario-container">
      <h1>Bem-vindo ao Meu Formulário</h1>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
          {erros.nome && <div className="erro">{erros.nome}</div>}
        </div>

        <div className="campo">
          <label>Sobrenome:</label>
          <input
            type="text"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
          />
          {erros.cpf && <div className="erro">{erros.cpf}</div>}
        </div>

        <div className="campo">
          <label>Endereço:</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
          />
          {erros.endereco && <div className="erro">{erros.endereco}</div>}
        </div>

        <div className="campo">
          <label>Salário:</label>
          <input
            type="number"
            name="salario"
            value={formData.salario}
            onChange={handleChange}
          />
          {erros.salario && <div className="erro">{erros.salario}</div>}
        </div>

        <div className="campo">
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
          />
          {erros.dataNascimento && (
            <div className="erro">{erros.dataNascimento}</div>
          )}
        </div>

        <button type="submit">Enviar</button>
      </form>

      <div>
        <h2>Informações Enviadas:</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Formulario;
