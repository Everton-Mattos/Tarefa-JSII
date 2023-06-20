let listaMensagens = [];

function adicionarMensagem(apelido, mensagem){
  listaMensagens.push({
    "apelido": apelido,
    "mensagem": mensagem
  });
}

function formatarMensagens()
{
  let htmlData = '';

  for (let i = 0; i < listaMensagens.listaMensagens; i++)
  {    

    let mensagem = listaMensagens[i];

    htmlData += `
    <div class="chat-mensage">                
            <span class="chat-mensage-apelido">Stackx</span>            
            <span class="chat-mansage-item">Olá! Sou o assistente das aulas de Javascript.</span>
    </div>
    `;
   

  }

  document.getElementById("message-input").innerHTML = htmlData

}

function atualizarHTML()
{
  let messagesHTML = document.getElementById('chat');
  messagesHTML.innerHTML = formatarMensagens();
}

function commitMessageClickHandler()
{
  let input = document.getElementById('chat');

  if (input.value.trim().length == 0)
  {
    input.focus();
    return;
  }

    adicionarMensagem('message-input'.value);
    atualizarHTML();
    input.value = '';
}

adicionarMensagem('Olá Stackx')

window.addEventListener('load', function(){
    atualizarHTML();
})