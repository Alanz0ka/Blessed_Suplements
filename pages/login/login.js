const email = document.getElementById('email');

const password = document.getElementById('password');

email.addEventListener('focus',()=>{
    email.style.borderColor = "#4A5F6A";
});

email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc";
});

password.addEventListener('focus',()=>{
    password.style.borderColor = "#4A5F6A";
});

password.addEventListener('blur',()=>{
    password.style.borderColor = "#ccc";
});

function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'blessed@blessed.com' && password === 'abencoados') {
      window.location.href = '../../pages/home/home.html';
    } else {
      alert('Nome de usuário ou senha inválidos. Tente novamente.');
    }
  }