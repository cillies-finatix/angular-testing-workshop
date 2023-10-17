import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject, from, map, scan, Subject} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-testing-gg-marbles',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './testing-gg-marbles.component.html',
  styleUrls: ['./testing-gg-marbles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingGgMarblesComponent {
  readonly #http = inject(HttpClient);

  // Hot Observable - with replay
  readonly #internalState = new BehaviorSubject<any>({ value: '1000' })
  readonly myDataStream$ = this.#internalState.pipe(map(({value}) => value));

  // Hot Observable - no replay
  readonly #eventStream$$ = new Subject<string>();
  readonly eventStream$ = this.#eventStream$$.pipe(scan((acc, _) => acc + 1, 0));

  // Cold Observable
  readonly myValueStream$ = from([1,2,3]);
  readonly myRequest$ = this.#http.get('https://pokeapi.co/api/v2/pokemon/ditto')

  updateEventStream() {
    this.#eventStream$$.next('clicked');
  }
}
