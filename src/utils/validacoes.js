/**
 * Valida se um campo está vazio.
 * @param {string} valor - O valor do campo.
 * @returns {string|null} - Mensagem de erro ou null se válido.
 */
export function validarCampoVazio(valor) {
  if (!valor.trim()) {
    return "Este campo não pode estar vazio.";
  }
  return null;
}

/**
 * Valida o nome e o sobrenome.
 * @param {string} nome - Nome ou sobrenome a ser validado.
 * @returns {string|null} - Mensagem de erro ou null se válido.
 */
export function validarNome(nome) {
  if (!nome.trim()) {
    return "O nome é obrigatório.";
  }
  if (nome.trim().length < 3) {
    return "O nome deve ter pelo menos 3 caracteres.";
  }
  return null;
}

/**
 * Valida o CPF.
 * @param {string} cpf - CPF a ser validado.
 * @returns {string|null} - Mensagem de erro ou null se válido.
 */
export function validarCPF(cpf) {
  const cpfFormatado = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
  if (!cpfFormatado || cpfFormatado.length !== 11) {
    return "O CPF deve conter 11 números.";
  }
  return null;
}

/**
 * Valida o endereço.
 * @param {string} endereco - Endereço a ser validado.
 * @returns {string|null} - Mensagem de erro ou null se válido.
 */
export function validarEndereco(endereco) {
  if (!endereco.trim()) {
    return "O endereço é obrigatório.";
  }
  return null;
}

/**
 * Valida o salário.
 * @param {string} salario - Salário a ser validado.
 * @returns {string|null} - Mensagem de erro ou null se válido.
 */
export function validarSalario(salario) {
  const valor = parseFloat(salario);
  if (isNaN(valor) || valor <= 0) {
    return "O salário deve ser um valor numérico positivo.";
  }
  return null;
}

/**
 * Valida a data de nascimento.
 * @param {string} dataNascimento - Data no formato AAAA-MM-DD.
 * @returns {string|null} - Mensagem de erro ou null se válido.
 */
export function validarDataNascimento(dataNascimento) {
  if (!dataNascimento) {
    return "A data de nascimento é obrigatória.";
  }
  const dataAtual = new Date();
  const dataInformada = new Date(dataNascimento);

  if (dataInformada > dataAtual) {
    return "A data de nascimento não pode ser no futuro.";
  }
  return null;
}

/**
 * Função para calcular a idade com base na data de nascimento.
 * @param {string} dataNascimento - Data de nascimento no formato AAAA-MM-DD.
 * @returns {number} - A idade calculada.
 */
export function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth();
  const dia = hoje.getDate();

  if (
    mes < nascimento.getMonth() ||
    (mes === nascimento.getMonth() && dia < nascimento.getDate())
  ) {
    idade--;
  }
  return idade;
}
