import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing-hh-routing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing-hh-routing.component.html',
  styleUrls: ['./testing-hh-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingHhRoutingComponent {

}
