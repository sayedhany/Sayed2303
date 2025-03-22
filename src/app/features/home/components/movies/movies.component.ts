import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, effect, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from 'src/app/services/movies.service';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MoviesComponent {
  @Input() movies:any;


}
