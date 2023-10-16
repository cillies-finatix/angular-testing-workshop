import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyDirectiveDirective} from "./my-directive.directive";
import {MyPipePipe} from "./my-pipe.pipe";

@Component({
  selector: 'app-testing-cc-testbed-directives-and-pipes',
  standalone: true,
  imports: [CommonModule, MyDirectiveDirective, MyPipePipe],
  templateUrl: './testing-cc-testbed-directives-and-pipes.component.html',
  styleUrls: ['./testing-cc-testbed-directives-and-pipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingCcTestbedDirectivesAndPipesComponent {
  hideTestArea = signal(false);
}
