import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-adminredes',
  templateUrl: './adminredes.component.html',
  styleUrls: ['./adminredes.component.css']
})
export class AdminredesComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
 //Crea grupo de controles formulario
 this.form= this.formBuilder.group({
  //url:['', [Validators.required, Validators.pattern('[a-zA-Z0-1@]*')]],
  //url:['', [Validators.required]],
  icono:['', [Validators.required ]],
  link:['', [Validators.required]],
  
  
 })

   }

  ngOnInit(): void {
  }

  get Icono() {
    return this.form.get ("icono");  
  }
  get IconoInvalid() {
    return this.Icono?.touched && !this.Icono?.valid;  
  }

  get Link() {
    return this.form.get ("link");  
  }
  get LinkInvalid() {
    return this.Link?.touched && !this.Link?.valid;  
  }

 
 

onEnviar(event: Event) {
  //Detiene propagacion ejecucion de del submit del form
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




