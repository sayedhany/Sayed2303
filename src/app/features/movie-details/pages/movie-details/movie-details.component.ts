import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent {
  movieDetails = signal<any>({});
  constructor(private location: Location,private router: Router) {
    const state = this.location.getState() as { movie: any };
    this.movieDetails.set(state.movie);
    console.log(this.movieDetails());
    
  }
  showMore = signal(false);

  toggleShowMore() {
    this.showMore.set(!this.showMore());
  }
  goBack() {
    this.location.back();
  }
  goToTicket() {
    this.router.navigate(['branches'], { state: { movie: this.movieDetails() } });
  }

}
