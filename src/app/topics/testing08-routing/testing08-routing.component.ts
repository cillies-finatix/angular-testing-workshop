import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing08-routing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing08-routing.component.html',
  styleUrls: ['./testing08-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Testing08RoutingComponent {

}
