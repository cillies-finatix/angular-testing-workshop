import {ChangeDetectionStrategy, Component, EventEmitter, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  change = new EventEmitter<Event>();
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  value: string = '';

  clear() {
    this.value = '';
  }

  onValueChange(event: Event) {
    if (event.target) {
      this.value = (event.target as HTMLInputElement).value;
      this.change.emit(event);
    }
  }
}
