import {ComponentFixture, TestBed} from '@angular/core/testing';
import {firstValueFrom} from "rxjs";

import {TestingAaTestbedBasicsComponent} from './testing-aa-testbed-basics.component';

describe('TestingAaTestbedBasicsComponent', () => {
  let component: TestingAaTestbedBasicsComponent;
  let fixture: ComponentFixture<TestingAaTestbedBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingAaTestbedBasicsComponent]
    })
    .compileComponents();

    /** if you're using NgModules
    await TestBed.configureTestingModule({
      declarations: [TestingAaTestbedBasicsComponent],
      imports: [YourDependencies],
    })
    .compileComponents();
    /**/

    fixture = TestBed.createComponent(TestingAaTestbedBasicsComponent);
    component = fixture.componentInstance;
  });

  it('should have default values', async () => {
    expect(component.myValue).toEqual('My Value');
    expect(component.mySignal()).toEqual('My Signal Value');
    expect(await firstValueFrom(component.myValue$)).toEqual('My Observable Value');
  });

  it('should never do something like this:', async () => {
    // Never do/test something like this:
    // Why? Because these tests are useless
    // You're testing the framework or
    // just native assignments.

    component.myValue = 'Test';
    component.mySignal.set('Test');
    component.myValue$.next('Test')

    expect(component.myValue).toEqual('Test');
    expect(component.mySignal()).toEqual('Test');
    expect(await firstValueFrom(component.myValue$)).toEqual('Test');
  });

  it('should get updated values on init', async () => {
    expect.hasAssertions();

    // What's wrong here?
    // The test is green, though!
    fixture.detectChanges();

    expect(component.myValue).toEqual('My Changed Value');
    expect(component.mySignal()).toEqual('My Changed Signal Value');
    expect(await firstValueFrom(component.myValue$)).toEqual('My Changed Observable Value');
  });

  it.each`
  myValue | expectedResult
  ${1} | ${2}
  ${2} | ${4}
  ${10} | ${20}
  ${5000} | ${10000}
  `('it should return $expectedResult for $myValue', ({myValue, expectedResult}) => {
    expect(component.doubleIt(myValue)).toEqual(expectedResult);
  });
});
