import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SingInComponent implements OnInit {
  users = {
    correo: '',
    psw: ''
  }
  camposLlenos = true;
  mensajeError: string = '';
    constructor(private ServiceAuth:AuthService, private router:Router){

  }
  ngOnInit(): void {
      
  }

  Ingreso() {
    if (this.users.correo.trim() === '' || this.users.psw.trim() === '') {
      this.camposLlenos = false;
      return; 
    }

    this.ServiceAuth.login(this.users).subscribe(
      (res: any) => {
        localStorage.setItem('auth_token', res.token);
        this.camposLlenos = false;
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.log('Error al iniciar sesión:', error);
        if (error.status === 401) {
          this.mensajeError = error.error.error;
        } else {
          this.mensajeError = 'Error al intentar iniciar sesión. Por favor, intenta nuevamente más tarde.';
        }
      }
    );
  }
}

