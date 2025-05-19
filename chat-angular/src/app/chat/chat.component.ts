import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   

@Component({
  standalone: true,
  selector: 'app-chat',
  imports: [CommonModule, FormsModule], 
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  mensagens: string[] = [];
  novaMensagem: string = '';

  enviarMensagem() {
    if (this.novaMensagem.trim()) {
      this.mensagens.push(this.novaMensagem);
      this.novaMensagem = '';
    }
  }
}
