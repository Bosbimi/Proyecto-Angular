import { Component, OnInit } from '@angular/core';
//import {FormControl} from '@angular/forms';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router'; 
//import { CookieService } from'ngx-cookie-service';
//import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;

  //Inyecta constructor formulario
  constructor(private formBuilder: FormBuilder ) { 
    //Crea grupo de controles formulario
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
   })
  }

  ngOnInit(): void {}

    get Password() {
      return this.form.get ("password");  
    }

    get PasswordInvalid() {
      return this.Password?.touched && !this.Password?.valid;  
    }

    get Mail() {
      return this.form.get ("email");  
    }

    get MailInvalid() {
      return this.Mail?.touched && !this.Mail?.valid;  
    }

    onEnviar(event: Event) {
      //Detiene propagacion ejecucion de compotamiento de ciruela submit del form
      event.preventDefault;
      
        if (this.form.valid) {
          //llama al servicio para enviar datos al  servidor-tambien podriamos ejecutar logica extra
          alert ("Todo joya, ¡El Formulario fué enviado con éxito!")
        }
        else{
          //corremos todas las validaciones para que se ejecuten los mensajes de error en el template
          this.form.markAllAsTouched();
          alert ("Todo mal, ¡El Formulario no fué enviado!")
        }
    }


}
