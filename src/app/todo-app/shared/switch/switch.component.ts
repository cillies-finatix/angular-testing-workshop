import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {LabelComponent} from "../label/label.component";
import {CheckboxComponent} from "../checkbox/checkbox.component";

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [
    LabelComponent,
    CheckboxComponent
  ],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent {
  @Input() label: string = '';
  @Output() change = new EventEmitter<Event>();
}
