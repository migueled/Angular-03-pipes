import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre      : string      = 'Capitán América';
  nombre2     :string       ='MiGuEL EDUardO SilVAno';
  arreglo     : number[]    =[1,2,3,4,5,6,7,8,9,10];
  PI          : number      =Math.PI;
  porcentaje  :number       =0.234;
  salario     :number       =1234.5;
  fecha       :Date         = new Date();
  idioma      :string       ='es';
  video       :string       ='https://www.youtube.com/embed/WNxH3Qnx0LQ';
  activar     :boolean      =true;
  
  valorpromesa = new Promise< string >( ( resolve , reject ) => {
    setTimeout( () => {
      resolve('LLego la data');
      //reject('error');
    },5500);
  });

  heroe = {
    nombre:   'logan',
    clave:    'wolverine',
    edad:      500,
    direccion:{
      calle:  'primera',
      casa:    20
    }
  }
  
  idiomaButton( idioma : string ){
    this.idioma = idioma;
  }

}
