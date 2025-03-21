import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), data: { title: 'Home' } },
  { path: 'movie-details', loadChildren: () => import('./features/movie-details/movie-details.module').then(m => m.MovieDetailsModule), data: { title: 'Movie Details' } },
  { path: 'branches', loadChildren: () => import('./features/branches/branches.module').then(m => m.BranchesModule), data: { title: 'Branches' } },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
