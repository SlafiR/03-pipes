import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Esteban Hincapie Taborda';
  nombre2: string = 'eSTebAn hiNCapIe'
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  pi: number = Math.PI;
  porcentaje: number = 0.2349;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar:boolean = true;
  idioma: string = '';
  videoUrl: string = 'https://www.youtube.com/embed/UtF6Jej8yb4';
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() =>{
      resolve('llego la data');
    }, 5000);
  });
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 501,
    direccion: {
      calle: 'Segunda',
      casa: 2
    }
  }
}
