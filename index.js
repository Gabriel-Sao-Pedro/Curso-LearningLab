const fieldEmail = document.getElementById('email');
const fieldPassword = document.getElementById('password');
const emailError = document.getElementById('email-error-message'); // Corrigido de errorEmaul para emailError
const passwordError = document.getElementById('password-error-message'); // Corrigido de errorPassword para passwordError
const form = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();

  // Validar se o campo email está diferente de vazio
  if (fieldEmail.value.trim() === '') { // Corrigido de trim para trim()
    emailError.textContent = 'Campo email é obrigatório';
    emailError.style = 'font-size: 12px; color: red';
    return;
  }
  // Validar se o campo senha está diferente de vazio
  if (fieldPassword.value.trim() === '') {
    passwordError.innerHTML = 'Campo senha é obrigatório'; // Corrigido de innerHtml para innerHTML      
    passwordError.style = 'font-size: 12px; color: red';
    return;
    
  }
  alert('Login efetuado com sucesso');
}
addEventListener('submit', handleSubmit);