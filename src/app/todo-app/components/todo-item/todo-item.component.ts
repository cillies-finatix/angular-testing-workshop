import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxComponent} from "../../shared/checkbox/checkbox.component";
import {LabelComponent} from "../../shared/label/label.component";
import {ButtonComponent} from "../../shared/button/button.component";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, LabelComponent, ButtonComponent],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input({ required: true }) id: string = '';
  @Input({ required: true }) done: boolean = false;
  @Input() disabled = false;

  @Output() change = new EventEmitter<typeof this.done>();
  @Output() remove = new EventEmitter<typeof this.id>();

  onCheckboxChange(event: Event) {
    this.change.emit(!!(event.target as HTMLInputElement).checked);
  }
}
