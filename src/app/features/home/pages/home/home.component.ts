import { ChangeDetectionStrategy, Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { signal } from '@angular/core';
import { MoviesComponent } from '../../components/movies/movies.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent,MoviesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent  {
  activeCategory = signal<any>({});
  moviesCategories = signal<any[]>([]);
 categories = toSignal(this.movieSrv.getCategories(), {initialValue:[]});
 commingSoonImage = toSignal(this.movieSrv.getCommingSoonImage(), {initialValue:[]});
  constructor(private movieSrv:MoviesService){
    effect(()=>{
      this.moviesCategories.set(this.categories());
      this.activeCategory.set(this.categories()[0]);
      // console.log(this.moviesCategories());
      
    }, {
      allowSignalWrites: true
    })
    
  }
}
