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

    constructor(private ServiceAuth:AuthService, private router:Router){

  }
  ngOnInit(): void {
      
  }
 Ingreso(){
  this.ServiceAuth.login(this.users).subscribe(
    res => {
      console.log(res)
      localStorage.setItem('auth_token', res.token)
      this.router.navigate(['/admin'])
    }

  )
 }
}
