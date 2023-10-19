import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwitchComponent} from "../switch/switch.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SwitchComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() editModeChange = new EventEmitter<Event>();
}
