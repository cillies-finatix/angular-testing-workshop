import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-testing-ee-jest-basics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing-ee-jest-basics.component.html',
  styleUrls: ['./testing-ee-jest-basics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingEeJestBasicsComponent {
}
