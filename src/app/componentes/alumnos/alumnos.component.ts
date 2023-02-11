import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from "src/app/models/alumno";
import { Curso } from 'src/app/models/curso';
import { TodosLosCursosComponent } from '../todos-los-cursos/todos-los-cursos.component';
import { MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  alumnos: Alumno []= [
    {
      nombre: 'Federico',
      apellido: 'Nuñez',
      correo: 'fede@gmail',
      contrasenia: 'asdf1234',
      habilitado: true,
      inscriptoDesde: new Date(2021, 10, 13)
    },
    {
      nombre: 'Soledad',
      apellido: 'Defrance',
      correo: 'sole@gmail',
      contrasenia: 'asdf1234',
      habilitado: true,
      inscriptoDesde: new Date(2021, 4, 8)
    },
    {
      nombre: 'Romina',
      apellido: 'Gomez',
      correo: 'romi@gmail',
      contrasenia: 'asdf1234',
      habilitado: true,
      inscriptoDesde: new Date(2021, 11, 20)
    },
    {
      nombre: 'Francisco',
      apellido: 'Pope',
      correo: 'pope@gmail',
      contrasenia: 'asdf1234',
      habilitado: true,
      inscriptoDesde: new Date(2019, 8, 25)
    },
    {
      nombre: 'Ayelen',
      apellido: 'Santos',
      correo: 'aye@gmail',
      contrasenia: 'asdf1234',
      habilitado: true,
      inscriptoDesde: new Date(2017, 3, 2)
    },
    {
      nombre: 'Pepe',
      apellido: 'Quiroz',
      correo: 'pepe@gmail',
      contrasenia: 'asdf1234',
      habilitado: true,
      inscriptoDesde: new Date(2022, 10, 13)
    },
  ]
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  columnas: string[] = ['nombre', 'apellido', 'correo', 'inscriptoDesde', 'habilitado' ]
}
