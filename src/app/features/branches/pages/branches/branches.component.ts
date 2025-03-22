import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchCardComponent } from '../../components/branch-card/branch-card.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { MoviesService } from 'src/app/services/movies.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-branches',
  standalone: true,
  imports: [CommonModule,BranchCardComponent, FormsModule, FilterPipe],
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BranchesComponent {
  movieSrv = inject(MoviesService);
  searchText = ""

  branches = toSignal(this.movieSrv.getBranches(), {initialValue:[]});
  // branches = signal([])
  goBack() {
    window.history.back();
  }

}
