import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing-gg-marbles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing-gg-marbles.component.html',
  styleUrls: ['./testing-gg-marbles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingGgMarblesComponent {

}
