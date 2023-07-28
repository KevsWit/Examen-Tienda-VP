import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registron',
  templateUrl: './registron.component.html',
  styleUrls: ['./registron.component.css']
})

export class RegistronComponent {
  mensajeAviso: string = '';
  NewUser = { 
    nombre: '',
    ci: '',
    correo: '',
    usuario: '',
    psw: '',
    role: ''
  }
  
  
  constructor(private userService:UsersService, private route:Router){}
  
  RegistrarUsuario(){
      this.userService.registro(this.NewUser).subscribe(()=>{
        this.mensajeAviso = 'Registro exitoso'
        this.route.navigate(['/home'])
        this.resetForm();
      },()=>{
        this.mensajeAviso = 'Correo ya en Uso'
      }
        )
  }

  resetForm() {
    // Restablece los valores del formulario y el mensaje de aviso
    this.NewUser = {
      nombre: '',
      ci: '',
      correo: '',
      usuario: '',
      role: '',
      psw: ''
    };
    this.mensajeAviso = '';
  }
  
 
}
