import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterLink]
})
export class HomeComponent {
  modoFoco = false;
  constructor(private renderer: Renderer2) {}

  alternarModoFoco() {
    this.modoFoco = !this.modoFoco;
    if (this.modoFoco) {
      this.renderer.addClass(document.body, 'focus-mode');
    } else {
      this.renderer.removeClass(document.body, 'focus-mode');
    }
  }
}
