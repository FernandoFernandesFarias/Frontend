const form = document.querySelector('#form-chat-send')
const messageInput = document.querySelector('#message')
const messagesList = document.querySelector('.messages-list')

function sendMessage(event) {
  event.preventDefault() // impede o form de recarregar a página

  const message = messageInput.value.trim()

  if (message === '') {
    alert('Digite algo')
    return
  }

  // Cria o container da mensagem
  const messageItem = document.createElement('div')
  messageItem.classList.add('message-item', 'message-user')

  const userLabel = document.createElement('div')
  userLabel.classList.add('msg-user')
  userLabel.innerHTML = '<strong>Você diz:</strong>'

  const messageContent = document.createElement('div')
  messageContent.classList.add('msg-chat')
  messageContent.textContent = message

  messageItem.appendChild(userLabel)
  messageItem.appendChild(messageContent)

  messagesList.appendChild(messageItem)

  // Limpa o campo
  messageInput.value = ''

  // Scroll para o final
  messagesList.scrollTop = messagesList.scrollHeight
}

// Envio ao clicar no botão
form.addEventListener('submit', sendMessage)

// Envio ao pressionar Enter (sem Shift)
messageInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault() // impede quebra de linha
    sendMessage(event)
  }
})
