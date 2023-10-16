import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing03-testbed-directives-and-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing03-testbed-directives-and-pipes.component.html',
  styleUrls: ['./testing03-testbed-directives-and-pipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Testing03TestbedDirectivesAndPipesComponent {

}
