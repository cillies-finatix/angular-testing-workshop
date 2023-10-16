import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing05-jest-basics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing05-jest-basics.component.html',
  styleUrls: ['./testing05-jest-basics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Testing05JestBasicsComponent {

}
