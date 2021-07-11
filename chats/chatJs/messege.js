 var chatBody = document.getElementById('chat-body-box')
 let msgInput = document.getElementById('msg-inp')
 let msg
 var form = document.getElementById('send-msg-form')
 form.addEventListener('submit', (e) => {
   e.preventDefault()
   if (msgInput.value.trim() !== '') {
     var msg = msgInput.value
     sendMsg(msg, '20')
     msgInput.value = ''
     msgInput.focus()
     var msgToGo = document.createElement('div')
     msgToGo.setAttribute('class', 'from-me chat-holder')
     msgToGo.innerHTML = msg
     chatBody.append(msgToGo)
   } else{
     msgInput.value = ''
   }
 })


 function sendMsg(sentMsg, senderId) {
   var params = 'name='+sentMsg
   let xhr = new XMLHttpRequest()
   xhr.open('POST', '/chats/phps/send.php', true)
   xhr.onload = () => {
     alert(xhr.responseText)

   }
   xhr.send(params)
 }