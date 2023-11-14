import {Injectable, Signal} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {Todo} from "../todo-model/todo";
import {toSignal} from "@angular/core/rxjs-interop";

type TodoListState = {
  editable: boolean;
  todos: Todo[],
}

@Injectable({
  providedIn: 'root'
})
export class TodoListFacadeService {
  readonly #state = new BehaviorSubject<TodoListState>({
    todos: [],
    editable: false,
  });

  readonly todos$: Observable<Todo[]> = this.#state.pipe(
    map(({todos}) => todos),
  );
  readonly todos: Signal<Todo[]> = toSignal(this.todos$, { initialValue: [] });

  readonly disabled$: Observable<boolean> = this.#state.pipe(
    map(({editable}) => !editable),
  );
  readonly disabled: Signal<boolean> = toSignal(this.disabled$, { initialValue: false });

  setActive(isActive: boolean) {
    console.log(this.constructor.name, 'setActive called', isActive);

    this.$patch({
      editable: isActive,
    })
  }

  addTodo(todoPartial: Partial<Todo>) {
    console.log(this.constructor.name, 'addTodo called', todoPartial);

    const todo: Todo = {
      id: Math.random().toString(32).substring(2) + Math.random().toString(32).substring(2),
      label: '',
      done: false,
      ...todoPartial,
    }
    this.$addTodo(todo);
  }

  updateTodo(id: string, partialTodo: Partial<Todo>) {
    console.log(this.constructor.name, 'updateTodo called', id, partialTodo);
    this.$patchTodo(partialTodo);
  }

  removeTodo(id: string) {
    this.$removeTodo(id);
  }

  private $addTodo(todo: Todo): TodoListState {
    const todos = this.todos();
    return this.$patch({
      todos: [...todos, todo],
    });
  }

  private $removeTodo(todoId: Todo["id"]): TodoListState {
    const todos = this.todos().filter(t => t.id !== todoId);
    return this.$patch({
      todos: [...todos],
    });
  }

  private $patch(state: Partial<TodoListState>): TodoListState {
    const newState: TodoListState = {
      ...this.#state.getValue(),
      ...state,
    };
    this.#state.next(newState);
    return newState;
  }

  private $patchTodo(partial: Partial<Todo>) {
    const todos = this.todos();
    const idx = todos.findIndex(todo => todo.id === partial.id);
    const todo: Todo = {...todos[idx], ...partial };
    const updatedTodos = todos.concat().splice(idx, 1, todo);
    return this.$patch({
      todos: updatedTodos,
    });
  }
}
