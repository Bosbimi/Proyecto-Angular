import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-adminacerca',
  templateUrl: './adminacerca.component.html',
  styleUrls: ['./adminacerca.component.css']
})
export class AdminacercaComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    //Crea grupo de controles formulario
    this.form= this.formBuilder.group({
      //url:['', [Validators.required, Validators.pattern('[a-zA-Z0-1@]*')]],
      //url:['', [Validators.required]],
      descripcion:['', [Validators.required , Validators.maxLength(500)]],
      fotoPerf:['', [Validators.required]],
      titulo:['', [Validators.required ]],
      banner:['', [Validators.required]],
      })
   }

  ngOnInit(): void {
  }

  get Descripcion() {
    return this.form.get ("descripcion");  
  }
  get DescripcionInvalid() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;  
  }

  get FotoPerf() {
    return this.form.get ("fotoPerf");  
  }
  get FotoPerfInvalid() {
    return this.FotoPerf?.touched && !this.FotoPerf?.valid;  
  }

  get Titulo() {
    return this.form.get ("titulo");  
  }
  get TituloInvalid() {
    return this. Titulo?.touched && !this.Titulo?.valid;  
  }


  get Banner() {
    return this.form.get ("banner");  
  }
  get BannerInvalid() {
    return this.  Banner?.touched && !this.Banner?.valid;  
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



