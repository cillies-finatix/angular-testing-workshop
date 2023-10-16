import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing01-testbed-basics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing01-testbed-basics.component.html',
  styleUrls: ['./testing01-testbed-basics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Testing01TestbedBasicsComponent {

}
