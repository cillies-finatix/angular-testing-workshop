import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-testing-aa-testbed-basics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing-aa-testbed-basics.component.html',
  styleUrls: ['./testing-aa-testbed-basics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingAaTestbedBasicsComponent implements OnInit {
  myValue: string = 'My Value';
  mySignal = signal('My Signal Value');
  myValue$ = new BehaviorSubject('My Observable Value');

  ngOnInit(): void {
    this.internalFunction();
  }

  doubleIt(someInput: number): number {
    return someInput + someInput;
  }

  private internalFunction() {
    this.myValue = 'My Changed Value';
    this.mySignal.set('My Changed Signal Value');
    this.myValue$.next('My Changed Observable Value');
  }
}
