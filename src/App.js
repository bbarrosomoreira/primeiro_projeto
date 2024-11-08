import React, { useState } from "react";

function App() {
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

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "nome" || name === "sobrenome" || name === "endereco") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.replace(/[^a-zA-Z ]/g, ""),
      }));
    } else if (name === "cpf") {
      if (/^\d*$/.test(value) && value.length <= 11) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else if (name === "salario") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.replace(/\D/g, ""),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const calculateAge = (date) => {
    const birthDate = new Date(date);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "nome",
      "sobrenome",
      "cpf",
      "endereco",
      "genero",
      "salario",
      "dataNascimento",
    ];
    let formErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        formErrors[field] = "Este campo é obrigatório";
      }
    });

    if (formData.cpf.length !== 11) {
      formErrors.cpf = "O CPF deve conter 11 dígitos";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      const idadeCalculada = calculateAge(formData.dataNascimento);
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
