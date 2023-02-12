import { Component, OnInit, Output } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosServService } from 'src/app/servicios/cursos-serv.service';

@Component({
  selector: 'app-todos-los-cursos',
  templateUrl: './todos-los-cursos.component.html',
  styleUrls: ['./todos-los-cursos.component.css']
})
export class TodosLosCursosComponent implements OnInit {
  cursos: any;
  constructor(private cursosServ: CursosServService) {}

  ngOnInit(): void {
    this.cursos = this.cursosServ.mostrarCursos();
  }
}
