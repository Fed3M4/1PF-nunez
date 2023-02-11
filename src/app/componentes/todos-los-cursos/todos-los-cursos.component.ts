import { Component, Output } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-todos-los-cursos',
  templateUrl: './todos-los-cursos.component.html',
  styleUrls: ['./todos-los-cursos.component.css']
})
export class TodosLosCursosComponent {
  cursos: Curso[] = [
    {
      nombre: 'Operaciones',
      profesor: {
        nombre: 'Alejandro',
        mail: 'aleta@mail.com'
      },
      duracion: '3 meses',
      comision: 1234
    },
    {
      nombre: 'Ventas',
      profesor: {
        nombre: 'Ivo',
        mail: 'ivo@mail.com'
      },
      duracion: '1 meses',
      comision: 1235
    },
    {
      nombre: 'Fraudes',
      profesor: {
        nombre: 'Rocío',
        mail: 'rocampo@mail.com'
      },
      duracion: '6 meses',
      comision: 1236
    },
    {
      nombre: 'Ingles',
      profesor: {
        nombre: 'Leandro',
        mail: 'lean@mail.com'
      },
      duracion: '24 meses',
      comision: 1237
    }
  ]
  constructor() { }
}
