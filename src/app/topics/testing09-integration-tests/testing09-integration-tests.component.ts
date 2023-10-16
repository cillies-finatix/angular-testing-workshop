import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing09-integration-tests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing09-integration-tests.component.html',
  styleUrls: ['./testing09-integration-tests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Testing09IntegrationTestsComponent {

}
