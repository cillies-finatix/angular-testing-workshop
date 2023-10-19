import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LabelComponent} from "../../shared/label/label.component";
import {InputComponent} from "../../shared/input/input.component";
import {ButtonComponent} from "../../shared/button/button.component";
import {Todo} from "../todo-model/todo";

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [CommonModule, LabelComponent, InputComponent, ButtonComponent],
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInputComponent {
  @Input() disabled: boolean = false;
  @Output() todo = new EventEmitter<Partial<Todo>>();

  addTodo(input: InputComponent) {
    if (input.value) {
      const newTodo: Partial<Todo> = {
        label: input.value,
        done: false,
      }
      this.todo.emit(newTodo);
      input.clear();
    }
  }
}
