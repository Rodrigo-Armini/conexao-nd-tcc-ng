import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <button
      (click)="alternarModoFoco()"
      style="position:fixed;top:1rem;right:1rem;z-index:999;"
    >
      {{ modoFoco ? 'Desativar Modo Foco' : 'Ativar Modo Foco' }}
    </button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  modoFoco = false;
  constructor(private renderer: Renderer2) {}

  alternarModoFoco() {
    this.modoFoco = !this.modoFoco;
    if (this.modoFoco) {
      this.renderer.addClass(document.body, 'modo-foco');
    } else {
      this.renderer.removeClass(document.body, 'modo-foco');
    }
  }
}