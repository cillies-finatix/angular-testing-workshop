import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TestingGgMarblesComponent} from './testing-gg-marbles.component';
import {TestScheduler} from 'rxjs/testing';
import {firstValueFrom} from "rxjs";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClientModule} from "@angular/common/http";

// Wir müssen dem RxJs TestScheduler nur sagen, wie man in unserem TestFramework Objekte verlgeicht:
export function getTestScheduler() {
  return new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  })
}

describe('TestingGgMarblesComponent', () => {
  let component: TestingGgMarblesComponent;
  let fixture: ComponentFixture<TestingGgMarblesComponent>;
  let marbles: TestScheduler;
  let httpController: HttpTestingController;

  beforeEach(() => {
    marbles = getTestScheduler();
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingGgMarblesComponent, HttpClientTestingModule]
    })
      .overrideComponent(TestingGgMarblesComponent, {
        remove: { imports: [HttpClientModule] },
      })
    .compileComponents();

    /* Funktioniert nicht so leicht mit `render`,
       da irgendwie weiterhin das normale Http Module verwendet wird, nehme ich an.
    const result = await render(TestingGgMarblesComponent, {
      imports: [HttpClientTestingModule]
    });
    fixture = result.fixture;
    /**/

    fixture = TestBed.createComponent(TestingGgMarblesComponent);
    httpController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    // Template Subscription:
    httpController.expectOne('https://pokeapi.co/api/v2/pokemon/ditto').flush('before')
  })

  afterEach(() => httpController.verify());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('myDataStream$', () => {
    it('should have a value', () => {
      expect.hasAssertions();

      marbles.run(({expectObservable}) => {
        const expected = { a: '1000' };

        expectObservable(component.myDataStream$).toBe('a', expected);
      });
    })
  });

  describe('eventStream$', () => {
    // Subjects that don't replay their values are not so easy to test with marbles.
    /*
    it('should have a value', () => {
      expect.hasAssertions();

      marbles.run(({expectObservable, flush}) => {
        const expected = { a: 1 };

        // Egal wann wir die Funktion aufrufen, der TestScheduler ist an der Stelle noch gar nicht aktiv.
        component.updateEventStream();

        expectObservable(component.eventStream$).toBe('a', expected);

        component.updateEventStream();
      });
    });
    /**/
    it('should have a value trick 17', () => {
      expect.hasAssertions();

      marbles.run(({ expectObservable, cold, flush }) => {
        const expected = { a: 1, b: 2, c: 3 };

        // setTimeout oder ähnliches würde theoretisch auch funktionieren, aber
        // so ist es cleaner, da der TestScheduler verwendet wird.
        cold('5s xxx|').subscribe(() => component.updateEventStream());

        expectObservable(component.eventStream$).toBe('5s abc', expected);
      });
    });

    // das wäre eine Alternative Testmöglichkeit ohne Marbles
    // allerdings kann man hier nur den ersten Wert testen.
    it('should have a value', async () => {
      expect.hasAssertions();
      const promise = firstValueFrom(component.eventStream$); // subscribe

      // Act
      component.updateEventStream();

      expect(await promise).toEqual(1); // assert
    });
  });

  describe('myValueStream$', () => {
    it('should have a value', () => {
      expect.hasAssertions();

      marbles.run(({expectObservable}) => {
        const expected = { a: 1, b: 2, c: 3 };

        expectObservable(component.myValueStream$).toBe('(abc|)', expected);
      });
    })
  });

  describe('myRequest$', () => {
    it('should have a value', () => {
      expect.hasAssertions();

      marbles.run(({expectObservable, cold}) => {
        const expected = { a: 'my value' };

        // This would not work!
        // httpController.expectOne('https://pokeapi.co/api/v2/pokemon/ditto').flush('my value');

        // But this works:
        cold('-x').subscribe(() => httpController.expectOne('https://pokeapi.co/api/v2/pokemon/ditto').flush('my value'));

        expectObservable(component.myRequest$).toBe('-(a|)', expected);
      });
    });
  });

});
