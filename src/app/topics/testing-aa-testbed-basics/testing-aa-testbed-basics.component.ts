import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing-aa-testbed-basics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing-aa-testbed-basics.component.html',
  styleUrls: ['./testing-aa-testbed-basics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingAaTestbedBasicsComponent {

}
