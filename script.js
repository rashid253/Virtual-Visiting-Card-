// Toggle Chat Window
document.getElementById('open-chat')?.addEventListener('click', function () {
  document.getElementById('chat-window').classList.toggle('hidden');
});
document.getElementById('close-chat')?.addEventListener('click', function () {
  document.getElementById('chat-window').classList.add('hidden');
});
document.getElementById('send-chat')?.addEventListener('click', function () {
  const inputField = document.getElementById('chat-input-field');
  const message = inputField.value.trim();
  if (message !== '') {
    const chatBody = document.getElementById('chat-body');
    const userMsg = document.createElement('div');
    userMsg.classList.add('chat-message', 'user');
    userMsg.textContent = message;
    chatBody.appendChild(userMsg);
    inputField.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});

// Dummy functions for Quick Actions
function createInvoice() {
  alert('Create Invoice clicked!');
}
function manageInventory() {
  alert('Inventory Management clicked!');
}
function processPayment() {
  alert('Payment/Billing clicked!');
}
function openCalendar() {
  alert('Calendar/Appointments clicked!');
}
