import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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