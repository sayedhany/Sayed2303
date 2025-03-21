import { AfterViewInit, ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, effect, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from 'src/app/services/movies.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { SwiperContainer } from 'swiper/element';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MoviesComponent  {
  router = inject(Router);
  @Input() movies:any;
  goToMovieDetails(movie: any) {
    this.router.navigate(['movie-details'], { state: { movie } });
  }

}
