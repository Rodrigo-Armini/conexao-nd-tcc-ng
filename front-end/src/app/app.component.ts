import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <button
      (click)="alternarModoFoco()"
      (mouseover)="hover = true"
      (mouseleave)="hover = false"
      [style.backgroundColor]="hover ? '#7DCEA0' : '#A9DFBF'"
      style="
        position: fixed;
        top: 0.5rem;
        right: 1rem;
        z-index: 999;
        color: black;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.2s;
      "
    >
      {{ modoFoco ? 'Desativar Modo Foco' : 'Ativar Modo Foco' }}
    </button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  modoFoco = false;
  hover = false;

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
