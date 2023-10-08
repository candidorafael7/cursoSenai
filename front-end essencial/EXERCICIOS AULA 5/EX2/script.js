document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
  
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
    function validatePassword(password) {
      return password.length >= 8;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
  
      const email = emailInput.value;
      const password = passwordInput.value;
  
      const isEmailValid = validateEmail(email);
      const isPasswordValid = validatePassword(password);
  
      if (!isEmailValid) {
        alert("Por favor, insira um endereço de e-mail válido.");
      } else if (!isPasswordValid) {
        alert("A senha deve ter pelo menos 8 caracteres.");
      } else {
        alert("Formulário válido. Enviando...");
        form.submit();
      }
    }
  
    form.addEventListener("submit", handleSubmit);
  });
  