import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyServiceService} from "./my-service.service";
import {MyDirectiveDirective} from "../testing-cc-testbed-directives-and-pipes/my-directive.directive";
import {MyPipePipe} from "../testing-cc-testbed-directives-and-pipes/my-pipe.pipe";

@Component({
  selector: 'app-testing-dd-testbed-services',
  standalone: true,
  imports: [CommonModule, MyDirectiveDirective, MyPipePipe],
  templateUrl: './testing-dd-testbed-services.component.html',
  styleUrls: ['./testing-dd-testbed-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingDdTestbedServicesComponent {
  myService = inject(MyServiceService);

  increaseServiceProp() {
    this.myService.increment();
  }
}
