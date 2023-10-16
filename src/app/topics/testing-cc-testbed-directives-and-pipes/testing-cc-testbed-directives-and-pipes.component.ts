import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing-cc-testbed-directives-and-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing-cc-testbed-directives-and-pipes.component.html',
  styleUrls: ['./testing-cc-testbed-directives-and-pipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingCcTestbedDirectivesAndPipesComponent {

}
