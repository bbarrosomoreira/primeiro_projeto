// Validações.js
// Este arquivo contém funções de validação reutilizáveis para o formulário.

/**
 * Verifica se um campo está vazio.
 * @param {string} valor - O valor do campo a ser validado.
 * @returns {string|null} - Retorna uma mensagem de erro ou null se válido.
 */
export function validarCampoVazio(valor) {
  if (!valor.trim()) {
    return "Este campo não pode ficar vazio.";
  }
  return null;
}

/**
 * Valida se um nome tem o tamanho mínimo de caracteres.
 * @param {string} nome - O nome a ser validado.
 * @returns {string|null} - Retorna uma mensagem de erro ou null se válido.
 */
export function validarNome(nome) {
  if (nome.length < 3) {
    return "O nome deve ter pelo menos 3 caracteres.";
  }
  return null;
}

/**
 * Valida um e-mail com base em um padrão de regex.
 * @param {string} email - O e-mail a ser validado.
 * @returns {string|null} - Retorna uma mensagem de erro ou null se válido.
 */
export function validarEmail(email) {
  const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar e-mails
  if (!padraoEmail.test(email)) {
    return "Digite um e-mail válido.";
  }
  return null;
}

/**
 * Valida a seleção de um item em um campo de dropdown.
 * @param {string} valor - O valor selecionado no dropdown.
 * @returns {string|null} - Retorna uma mensagem de erro ou null se válido.
 */
export function validarSelecao(valor) {
  if (!valor || valor === "Selecione") {
    return "Por favor, selecione uma opção válida.";
  }
  return null;
}

/**
 * Valida se um número está dentro de um intervalo especificado.
 * @param {number} numero - O número a ser validado.
 * @param {number} min - O valor mínimo permitido.
 * @param {number} max - O valor máximo permitido.
 * @returns {string|null} - Retorna uma mensagem de erro ou null se válido.
 */
export function validarNumeroIntervalo(numero, min, max) {
  if (numero < min || numero > max) {
    return `O número deve estar entre ${min} e ${max}.`;
  }
  return null;
}

/**
 * Exemplo de validação customizada. (Opcional, adaptável a necessidades específicas)
 * @param {string} valor - O valor do campo.
 * @returns {string|null} - Mensagem de erro ou null.
 */
export function validarCustomizado(valor) {
  // Adicione sua lógica específica aqui, se necessário.
  return null;
}
