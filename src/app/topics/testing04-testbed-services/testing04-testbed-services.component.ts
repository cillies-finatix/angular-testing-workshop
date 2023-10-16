import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing04-testbed-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing04-testbed-services.component.html',
  styleUrls: ['./testing04-testbed-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Testing04TestbedServicesComponent {

}
