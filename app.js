const form = document.querySelector('form');
const registerButton = document.querySelector('#register_button');

registerButton.addEventListener('click', (e) => {
 e.preventDefault();
 const username = document.querySelector('#username').value;
 const email = document.querySelector('#email').value;
 const password = document.querySelector('#password').value;
 const confirmPassword = document.querySelector('#confirm_password').value;

 if (password !== confirmPassword) {
  alert('Passwords do not match!');
 } else {
  alert(Registration successful!nUsername: ${username}nEmail: ${email});
  form.reset();
 }
});
