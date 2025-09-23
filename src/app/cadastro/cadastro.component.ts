import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Cadastro{
  nome: string,
  dataNascimento?: Date,
  email: string,
  senha: string
}

@Component({
  selector: 'app-cadastro',
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',

})
export class CadastroComponent {
  formulario: Cadastro = {
    nome: "",
    email: "",
    senha: ""
  }

  cadastrar(): void{
    
  }
}
