import { Component } from '@angular/core';

@Component({
  selector: 'app-conexao',
  templateUrl: './conexao.component.html',
  styleUrls: ['./conexao.component.scss']
})
export class ConexaoComponent {
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
