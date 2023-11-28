import { Component, Input, OnInit } from '@angular/core';
import { CursoDetail } from '../curso-detail';
import { ActivatedRoute } from '@angular/router';
import { CursoServiceService } from '../curso-service.service';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {

  cursoId !: string;
  @Input() cursoDetail !: CursoDetail;

  constructor(private cursoService: CursoServiceService) { }

  getCurso(): void {
    this.cursoService.getCurso(this.cursoId).subscribe(
      (cursoDetail) => {
        this.cursoDetail = cursoDetail;
      }
    );
  }

  ngOnInit() {
    if(this.cursoDetail === undefined){
      if (this.cursoId) {
        this.getCurso();
      }
    }
  }

}
