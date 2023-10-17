import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-testing-hh-routing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './testing-hh-routing.component.html',
  styleUrls: ['./testing-hh-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingHhRoutingComponent {
  readonly #router = inject(Router);

  readonly dynamicRoute$ = new BehaviorSubject(['/', 'dynamic', 'route']);

  onClick(event: MouseEvent) {
    event.preventDefault();
    return this.#router.navigate(['/', 'link-to-another-page']);
  }
}
