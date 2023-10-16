import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing-dd-testbed-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing-dd-testbed-services.component.html',
  styleUrls: ['./testing-dd-testbed-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingDdTestbedServicesComponent {

}
