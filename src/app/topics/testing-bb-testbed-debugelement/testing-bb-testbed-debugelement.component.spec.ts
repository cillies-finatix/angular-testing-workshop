import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TestingBbTestbedDebugelementComponent} from './testing-bb-testbed-debugelement.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('TestingBbTestbedDebugelementComponent', () => {
  let component: TestingBbTestbedDebugelementComponent;
  let fixture: ComponentFixture<TestingBbTestbedDebugelementComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingBbTestbedDebugelementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingBbTestbedDebugelementComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should have host classes', () => {
    // Bad:
    expect(component.hostClasses).toEqual('host classes can be tested');

    // Good:
    expect(debugElement.classes).toEqual(
      {"be": true, "can": true, "classes": true, "host": true, "tested": true}
    );

    // Warum?
    // Weil wir mit dem DebugElement sichergestellt haben, dass auch das HostBinding richtig eingesetzt wurde.
    // Testen wir nur die Property könnte es ja sein, dass die CSS Klassen trotzdem nicht am Host angehängt werden.
    // Außerdem ist mit dem DebugElement der Property-Name egal und kann leicht refactored werden.
    //
    // Wir testen also hier nur das *Verhalten* der Component.
  });

  it('should have host attributes', () => {
    // Bad:
    expect(component.hostAriaLabel).toEqual('TestingComponent')
    expect(component.hostTestId).toEqual('test-component-test-id')

    // Good:
    expect(debugElement.attributes['aria-label']).toEqual('TestingComponent');
    expect(debugElement.attributes['data-testid']).toEqual('test-component-test-id');
  })

  it('should trigger host binding clicks', async () => {
    // Arrange
    const mockedTarget = {tagName: 'MOCKED'};

    // Act
    debugElement.triggerEventHandler('click', {target: mockedTarget});

    // Assert
    expect(component.lastClickTagName).toEqual('MOCKED');
  });

  // Funktion wird direkt aufgerufen. Geht zwar, ist aber doof, da das Event nicht so leicht gemocked werden kann.
  it('should do something on click', () => {
    const stopPropagationSpy = jest.fn();
    component.onButtonClick({ stopPropagation: stopPropagationSpy } as unknown as MouseEvent);
    expect(component.lastClickTagName).toEqual('MY BUTTON');
    expect(stopPropagationSpy).toHaveBeenCalled();
  });

  // Hier wird ein Element des Templates gesucht und ein Click Event ausgelöst.
  // Das ist besser, das so die interne Logik der Component egal ist und leichter
  // refactored werden könnte. Außerdem testen wir das Template gleich mit.
  // triggerEventHandler verhält sich aber nicht (ganz) wie ein nativer Click.
  it('should do something on click', () => {
    const stopPropagationSpy = jest.fn();
    debugElement.query(By.css('button')).triggerEventHandler('click', { stopPropagation: stopPropagationSpy });
    expect(component.lastClickTagName).toEqual('MY BUTTON');
    expect(stopPropagationSpy).toHaveBeenCalled();
  });

  // Funktioniert auch mit nativeElement, aber sobald man ein Event Objekt braucht (bspw. ein "target"), wäre
  // triggerEventHandler leichter, da dort der Typ des Event-Objekts nicht geprüft wird und man alles mocken kann.
  // Der native Click verhält sich realer, da auch der HostListener getriggered werden würde, wenn wir nicht "stopPropagation" aufgerufen hätten.
  it('should trigger native click events', () => {
    debugElement.query(By.css('button')).nativeElement.click();
    expect(component.lastClickTagName).toEqual('MY BUTTON');
  });
});
