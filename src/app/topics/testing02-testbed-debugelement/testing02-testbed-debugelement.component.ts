import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing02-testbed-debugelement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing02-testbed-debugelement.component.html',
  styleUrls: ['./testing02-testbed-debugelement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Testing02TestbedDebugelementComponent {

}
