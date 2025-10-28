import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importar aqui
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Usuario, UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // ✅ Adicionar CommonModule
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  formulario: Usuario = {
    nome: "",
    email: "",
    senha: ""
  };

  mensagemErro = "";

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  cadastrar(): void {
    this.usuarioService.cadastrar(this.formulario).subscribe({
      next: (res) => {
        console.log('Usuário cadastrado', res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        this.mensagemErro = err.error?.detail || "Erro ao cadastrar usuário";
      }
    });
  }

  voltar(): void {
    this.router.navigate(['/home']);
  }
}
