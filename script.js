const button = document.querySelector('#helloButton');
const reply = document.querySelector('#reply');

button.addEventListener('click', () => {
  reply.textContent = 'Hello back — let\'s make something amazing.';
  button.querySelector('span').textContent = 'Hello received';
});
