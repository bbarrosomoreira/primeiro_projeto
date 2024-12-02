import React from "react"; // Importa o React.
import Formulario from "./components/Formulario"; // Importa o componente do formulário.
import "./App.css"; // Importa os estilos gerais.

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Bem-vindo ao Meu Formulário</h1>
        <p>Preencha os campos abaixo e envie suas informações.</p>
      </header>

      {/* Renderiza o componente Formulário */}
      <main>
        <Formulario />
      </main>

      <footer className="app-footer">
        <p>© 2024 - Meu Formulário. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
