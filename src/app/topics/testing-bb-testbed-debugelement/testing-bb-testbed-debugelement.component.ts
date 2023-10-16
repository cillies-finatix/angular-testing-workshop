import {ChangeDetectionStrategy, Component, HostBinding, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-testing-bb-testbed-debugelement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing-bb-testbed-debugelement.component.html',
  styleUrls: ['./testing-bb-testbed-debugelement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // Crazy: Man kann hier auch dynamisch Propertys der Component verwenden:
    '[attr.data-testid]': 'hostTestId',
  },
})
export class TestingBbTestbedDebugelementComponent {

  @HostBinding('class') hostClasses = 'host classes can be tested';
  @HostBinding('attr.aria-label') hostAriaLabel = 'TestingComponent';

  hostTestId = 'test-component-test-id';

  lastClickTagName: string = '';

  @HostListener('click', ['$event']) onHostClickListener(event: MouseEvent) {
    this.lastClickTagName = event.target && 'tagName' in event.target ? event.target.tagName as string : 'UNKNOWN';
  }

  onButtonClick(event: MouseEvent) {
    event.stopPropagation();
    this.lastClickTagName = 'MY BUTTON';
  }
}
