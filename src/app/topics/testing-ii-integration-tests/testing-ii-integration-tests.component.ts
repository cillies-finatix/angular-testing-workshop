import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing-ii-integration-tests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing-ii-integration-tests.component.html',
  styleUrls: ['./testing-ii-integration-tests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingIiIntegrationTestsComponent {

}
