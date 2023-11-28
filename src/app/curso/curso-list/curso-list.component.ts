import { Component, OnInit } from '@angular/core';
import { CursoServiceService } from '../curso-service.service';
import { CursoDetail } from '../curso-detail';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  cursos: Array<CursoDetail> = [];
  selected: boolean = false;
  selectedCurso !: CursoDetail;
  cursosCertificado !: string;

  constructor(private cursoService: CursoServiceService) { }

  getCursos(): void {
    this.cursoService.getCursos().subscribe(
      (cursos) => {
        this.cursos = cursos;
      }
    );
  }

  onSelected(curso: CursoDetail): void {
    this.selected = true;
    this.selectedCurso = curso;
  }

  ngOnInit() {
    this.getCursos();
    let arr2: number[] = new Array<number>(this.cursos.length);
    for (let index = 0; index < this.cursos.length; index++) {
      if(this.cursos[index].offers_certificate){
        arr2.push(this.cursos[index].id);
      } 
    }
    this.cursosCertificado = "los cursos" + arr2.join(", ") + " ofrecen certificado";
  }

}
