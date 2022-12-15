import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-adminexperiencia',
  templateUrl: './adminexperiencia.component.html',
  styleUrls: ['./adminexperiencia.component.css']
})
export class AdminexperienciaComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
 //Crea grupo de controles formulario
 this.form= this.formBuilder.group({
  //url:['', [Validators.required, Validators.pattern('[a-zA-Z0-1@]*')]],
  //url:['', [Validators.required]],
  actividad:['', [Validators.required , Validators.maxLength(300)]],
  logo:['', [Validators.required]],
  periodo:['', [Validators.required ]],
  puesto:['', [Validators.required]],
 })

  }

  ngOnInit(): void {
  }
  get Actividad() {
    return this.form.get ("actividad");  
  }
  get ActividadInvalid() {
    return this.Actividad?.touched && !this.Actividad?.valid;  
  }

  get Logo() {
    return this.form.get ("logo");  
  }
  get LogoInvalid() {
    return this.Logo?.touched && !this.Logo?.valid;  
  }

  get Periodo() {
    return this.form.get ("periodo");  
  }
  get PeriodoInvalid() {
    return this. Periodo?.touched && !this.Periodo?.valid;  
  }


  get Puesto() {
    return this.form.get ("puesto");  
  }
  get PuestoInvalid() {
    return this.  Puesto?.touched && !this.Puesto?.valid;  
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









