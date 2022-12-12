import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-adminproyectos',
  templateUrl: './adminproyectos.component.html',
  styleUrls: ['./adminproyectos.component.css']
})
export class AdminproyectosComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
//Crea grupo de controles formulario
this.form= this.formBuilder.group({
  //url:['', [Validators.required, Validators.pattern('[a-zA-Z0-1@]*')]],
  //url:['', [Validators.required]],
  descripcion:['', [Validators.required , Validators.maxLength(500)]],
  nombre: ['', [Validators.required]],
  periodo:['', [Validators.required ]],
  link:['', [Validators.required]],
 })

   }

  ngOnInit(): void {}

    get Descripcion() {
      return this.form.get ("descripcion");  
    }
    get DescripcionInvalid() {
      return this.Descripcion?.touched && !this.Descripcion?.valid;  
    }
  
    get Nombre() {
      return this.form.get ("nombre");  
    }
    get NombreInvalid() {
      return this.Nombre?.touched && !this.Nombre?.valid;  
    }
  
    get Periodo() {
      return this.form.get ("periodo");  
    }
    get PeriodoInvalid() {
      return this. Periodo?.touched && !this.Periodo?.valid;  
    }
  
  
    get Link() {
      return this.form.get (" link");  
    }
    get  LinkInvalid() {
      return this.   Link?.touched && !this. Link?.valid;  
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
  
  
  
  
  
  
  
  
  
  


  