import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing07-marbles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing07-marbles.component.html',
  styleUrls: ['./testing07-marbles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Testing07MarblesComponent {

}
