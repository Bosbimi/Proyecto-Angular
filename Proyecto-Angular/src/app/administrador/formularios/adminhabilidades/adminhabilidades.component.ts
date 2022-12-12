import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-adminhabilidades',
  templateUrl: './adminhabilidades.component.html',
  styleUrls: ['./adminhabilidades.component.css']
})
export class AdminhabilidadesComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    //Crea grupo de controles formulario
   this.form= this.formBuilder.group({
    //url:['', [Validators.required, Validators.pattern('[a-zA-Z0-1@]*')]],
    //url:['', [Validators.required]],
    habilidad:['', [Validators.required ]],
    porcentaje:['', [Validators.required]],
    
    
   })
   }

  ngOnInit(): void {
  }

  get Habilidad() {
    return this.form.get ("habilidad");  
  }
  get HabilidadInvalid() {
    return this.Habilidad?.touched && !this.Habilidad?.valid;  
  }

  get Porcentaje() {
    return this.form.get ("porcentaje");  
  }
  get PorcentajeInvalid() {
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;  
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









