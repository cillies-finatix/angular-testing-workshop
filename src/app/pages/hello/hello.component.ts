import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hello.component.html',
  styles: `
  nav {
    margin-top: 1rem;

    ul {
      display: grid;
      column-gap: .5rem;
      row-gap: .5rem;
      grid-auto-flow: column;
    }
    li {
      display: inline-block;
      margin-right: 1rem;
    }
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent {
  visible = signal(true);
}
