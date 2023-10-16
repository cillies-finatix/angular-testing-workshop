import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing-bb-testbed-debugelement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing-bb-testbed-debugelement.component.html',
  styleUrls: ['./testing-bb-testbed-debugelement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingBbTestbedDebugelementComponent {

}
