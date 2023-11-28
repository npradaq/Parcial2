import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { CursoListComponent } from './curso-list/curso-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [CursoDetailComponent, CursoListComponent],
  declarations: [CursoComponent, CursoDetailComponent, CursoListComponent]
})
export class CursoModule { }
