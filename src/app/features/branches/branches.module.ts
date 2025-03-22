import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { BranchesComponent } from './pages/branches/branches.component';

const routes:Routes = [
  {
    path: '',
    component:BranchesComponent
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BranchesModule { }
