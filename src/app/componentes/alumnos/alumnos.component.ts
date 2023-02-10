import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from "src/app/models/alumno";

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
      habilitado: true
    },
    {
      nombre: 'Soledad',
      apellido: 'Defrance',
      correo: 'sole@gmail',
      contrasenia: 'asdf1234',
      habilitado: true
    },
    {
      nombre: 'Romina',
      apellido: 'Gomez',
      correo: 'romi@gmail',
      contrasenia: 'asdf1234',
      habilitado: true
    },
    {
      nombre: 'Francisco',
      apellido: 'Pope',
      correo: 'pope@gmail',
      contrasenia: 'asdf1234',
      habilitado: true
    },
    {
      nombre: 'Ayelen',
      apellido: 'Santos',
      correo: 'aye@gmail',
      contrasenia: 'asdf1234',
      habilitado: true
    },
    {
      nombre: 'Pepe',
      apellido: 'Quiroz',
      correo: 'pepe@gmail',
      contrasenia: 'asdf1234',
      habilitado: true
    },
  ]
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  columnas: string[] = ['nombre', 'apellido', 'correo', 'habilitado' ]
}
