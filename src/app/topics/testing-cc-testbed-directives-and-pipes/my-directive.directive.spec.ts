import {MyDirectiveDirective} from './my-directive.directive';
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";

describe('MyDirectiveDirective', () => {
  // Does not work because we're using inject()
  /*it('should create an instance', () => {
    const directive = new MyDirectiveDirective();
    expect(directive).toBeTruthy();
  });*/

  it('should prepend html element', async () => {
    // Define a Test Component that uses the pipe
    @Component({
      selector: 'app-test-my-directive',
      template: 'My Template',
      hostDirectives: [MyDirectiveDirective]
    })
    class TestComponent {}

    // Use TestBed to create the Angular Environment

    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [MyDirectiveDirective],
    }).compileComponents();

    // Create the component fixture to test the pipe

    const fixture = TestBed.createComponent(TestComponent);
    const debugElement = fixture.debugElement;
    fixture.detectChanges()

    // Make your assertions

    expect(debugElement.nativeElement.textContent).toEqual('Special: My Template');
  });
});
