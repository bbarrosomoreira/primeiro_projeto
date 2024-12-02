import React, { useState } from "react";

// Função principal do componente App
function App() {
  // Define o estado inicial do formulário,
  // um objeto contendo todos os campos vazios
  const initialFormData = {
    nome: "",
    sobrenome: "",
    cpf: "",
    endereco: "",
    genero: "",
    salario: "",
    dataNascimento: "",
    idade: 0,
  };

  // Define o estado do formulário (`formData`) e
  // o estado dos erros (`errors`), ambos inicializados
  // com valores do estado inicial
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  // Função para lidar com a mudança de qualquer campo do formulário
  const handleChange = (e) => {
    const { name, value } = e.target; // Extrai o nome e valor do campo alterado

    // Verifica o nome do campo para aplicar validação específica
    if (name === "nome" || name === "sobrenome" || name === "endereco") {
      // Para esses campos, permite apenas letras e espaços
      setFormData((prevData) => ({
        ...prevData, // Mantém os dados anteriores
        [name]: value.replace(/[^a-zA-Z ]/g, ""), // Substitui caracteres inválidos por vazio
      }));
    } else if (name === "cpf") {
      // Para CPF, permite apenas números e limita o tamanho a 11 caracteres
      if (/^\d*$/.test(value) && value.length <= 11) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else if (name === "salario") {
      // Para salário, permite apenas números
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.replace(/\D/g, ""),
      }));
    } else {
      // Para outros campos, atualiza o valor normalmente
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Função para calcular a idade a partir da data de nascimento
  const calculateAge = (date) => {
    const birthDate = new Date(date); // Converte a data para objeto Date
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear(); // Diferença de anos
    const month = today.getMonth() - birthDate.getMonth(); // Diferença de meses
    // Corrige a idade se o mês de nascimento ainda não passou no ano atual
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão do submit (recarregar a página)

    // Define uma lista de campos obrigatórios
    const requiredFields = [
      "nome",
      "sobrenome",
      "cpf",
      "endereco",
      "genero",
      "salario",
      "dataNascimento",
    ];
    // Inicializa um objeto vazio para armazenar erros de validação
    let formErrors = {};

    // Verifica se todos os campos obrigatórios estão preenchidos
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        formErrors[field] = "Este campo é obrigatório";
      }
    });

    // Valida o CPF (verifica o tamanho)
    if (formData.cpf.length !== 11) {
      formErrors.cpf = "O CPF deve conter 11 dígitos";
    }

    // Verifica se existem erros de validação
    if (Object.keys(formErrors).length > 0) {
      // Se houver erros, atualiza o estado de erros para exibi-los
      setErrors(formErrors);
    } else {
      // Se não houver erros, calcula a idade
      const idadeCalculada = calculateAge(formData.dataNascimento);
      // Cria um novo objeto com os dados do formulário e a idade calculada
      const finalFormData = { ...formData, idade: idadeCalculada };
      setErrors({});
      console.log(JSON.stringify(finalFormData, null, 2));
      alert(`Dados enviados:\n${JSON.stringify(finalFormData, null, 2)}`);

      setFormData(initialFormData);
    }
  };

  return (
    <div
      className="App"
      style={{ maxWidth: "600px", margin: "0 auto", fontSize: "18px" }}
    >
      <h1>Formulário</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome"
            style={{ width: "100%", padding: "10px", fontSize: "18px" }}
          />
          {errors.nome && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.nome}</p>
          )}
        </div>
        <div>
          <label>Sobrenome:</label>
          <input
            type="text"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            placeholder="Digite seu sobrenome"
            style={{ width: "100%", padding: "10px", fontSize: "18px" }}
          />
          {errors.sobrenome && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.sobrenome}</p>
          )}
        </div>
        <div>
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="Digite apenas os números"
            style={{ width: "100%", padding: "10px", fontSize: "18px" }}
          />
          {errors.cpf && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.cpf}</p>
          )}
        </div>
        <div>
          <label>Endereço:</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            placeholder="Digite seu endereço"
            style={{ width: "100%", padding: "10px", fontSize: "18px" }}
          />
          {errors.endereco && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.endereco}</p>
          )}
        </div>
        <div>
          <label>Gênero:</label>
          <select
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            style={{ width: "104%", padding: "10px", fontSize: "18px" }}
          >
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outros">Outros</option>
          </select>
          {errors.genero && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.genero}</p>
          )}
        </div>
        <div>
          <label>Salário:</label>
          <input
            type="number"
            name="salario"
            value={formData.salario}
            onChange={handleChange}
            placeholder="Digite seu salário"
            style={{ width: "100%", padding: "10px", fontSize: "18px" }}
          />
          {errors.salario && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.salario}</p>
          )}
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", fontSize: "18px" }}
          />
          {errors.dataNascimento && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.dataNascimento}
            </p>
          )}
        </div>
        <button
          type="submit"
          style={{
            width: "60%",
            padding: "12px",
            fontSize: "20px",
            cursor: "pointer",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "8px",
            textAlign: "center",
            marginTop: "16px",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
