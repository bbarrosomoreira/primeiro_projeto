import React, { useState } from "react"; // Importa o React e o hook useState.
import "./Formulario.css"; // Importa o CSS do formulário.
import {
  validarCampoVazio,
  validarNome,
  validarEmail,
  validarSelecao,
} from "./validacoes"; // Importa as funções de validação.

/**
 * Componente do formulário principal.
 */
function Formulario() {
  // Estados para armazenar os valores dos campos.
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [opcao, setOpcao] = useState("");

  // Estados para armazenar mensagens de erro.
  const [erroNome, setErroNome] = useState(null);
  const [erroEmail, setErroEmail] = useState(null);
  const [erroOpcao, setErroOpcao] = useState(null);

  /**
   * Lida com o envio do formulário.
   * Realiza as validações antes de permitir o envio.
   * @param {Event} evento - O evento de submissão do formulário.
   */
  function aoEnviarFormulario(evento) {
    evento.preventDefault(); // Previne o recarregamento da página ao enviar.

    // Validações antes de enviar.
    const erroValidacaoNome = validarNome(nome);
    const erroValidacaoEmail = validarEmail(email);
    const erroValidacaoOpcao = validarSelecao(opcao);

    setErroNome(erroValidacaoNome);
    setErroEmail(erroValidacaoEmail);
    setErroOpcao(erroValidacaoOpcao);

    // Verifica se todos os campos estão válidos.
    if (!erroValidacaoNome && !erroValidacaoEmail && !erroValidacaoOpcao) {
      console.log("Formulário enviado com sucesso!");
      console.log({ nome, email, opcao });

      // Limpa os campos após o envio.
      setNome("");
      setEmail("");
      setOpcao("");
      alert("Formulário enviado com sucesso!");
    }
  }

  return (
    <form className="formulario" onSubmit={aoEnviarFormulario}>
      {/* Campo Nome */}
      <div className="campo">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />
        {erroNome && <span className="erro">{erroNome}</span>}
      </div>

      {/* Campo E-mail */}
      <div className="campo">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />
        {erroEmail && <span className="erro">{erroEmail}</span>}
      </div>

      {/* Campo Dropdown */}
      <div className="campo">
        <label htmlFor="opcao">Selecione uma opção:</label>
        <select
          id="opcao"
          value={opcao}
          onChange={(e) => setOpcao(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
          <option value="opcao3">Opção 3</option>
        </select>
        {erroOpcao && <span className="erro">{erroOpcao}</span>}
      </div>

      {/* Botão de Envio */}
      <button type="submit" className="botao">
        Enviar
      </button>
    </form>
  );
}

export default Formulario;
