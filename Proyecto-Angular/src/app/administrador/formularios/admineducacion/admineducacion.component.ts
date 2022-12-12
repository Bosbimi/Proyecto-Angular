import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admineducacion',
  templateUrl: './admineducacion.component.html',
  styleUrls: ['./admineducacion.component.css']
})
export class AdmineducacionComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
   //Crea grupo de controles formulario
   this.form= this.formBuilder.group({
   //url:['', [Validators.required, Validators.pattern('[a-zA-Z0-1@]*')]],
   //url:['', [Validators.required]],
   comentarios:['', [Validators.required , Validators.maxLength(500)]],
   logo:['', [Validators.required]],
   estudios:['', [Validators.required ]],
   periodo:['', [Validators.required]],
  })

  }

  ngOnInit(): void {
  }

  get Comentarios() {
    return this.form.get ("comentarios");  
  }
  get ComentariosInvalid() {
    return this.Comentarios?.touched && !this.Comentarios?.valid;  
  }

  get Estudios() {
    return this.form.get ("estudios");  
  }
  get EstudiosInvalid() {
    return this.Estudios?.touched && !this.Estudios?.valid;  
  }

  get Periodo() {
    return this.form.get ("periodo");  
  }
  get PeriodoInvalid() {
    return this. Periodo?.touched && !this.Periodo?.valid;  
  }


  get Logo() {
    return this.form.get ("logo");  
  }
  get LogoInvalid() {
    return this.  Logo?.touched && !this.Logo?.valid;  
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
      alert ("Hmm... algo esta mal, revise los datos. ¡El Formulario no fué enviado!")
    }
 }
}






