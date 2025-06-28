import { Component } from '@angular/core';

@Component({
  selector: 'app-conexao',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  mensagens: string[] = [];
  novaMensagem = '';

  enviarMensagem() {
    const texto = this.novaMensagem.trim();
    if (texto) {
      this.mensagens.push(texto);
      this.novaMensagem = '';
      setTimeout(() => {
        const chatBox = document.getElementById('chat-box');
        if (chatBox) {
          chatBox.scrollTop = chatBox.scrollHeight;
        }
      });
    }
  }
}
