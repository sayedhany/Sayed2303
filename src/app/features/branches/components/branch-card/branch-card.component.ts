import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branch-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branch-card.component.html',
  styleUrls: ['./branch-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BranchCardComponent {
@Input() branch:any;
}
