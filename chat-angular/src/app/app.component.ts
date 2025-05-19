import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ChatComponent } from './chat/chat.component'; // <-- Importa o ChatComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatComponent], // <-- Adiciona aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-angular';
}
