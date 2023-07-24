import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí puedes agregar la lógica para verificar el inicio de sesión
    // Si el inicio de sesión es válido, redirige al componente de bienvenida
    this.router.navigateByUrl('/admin');
  }
}
