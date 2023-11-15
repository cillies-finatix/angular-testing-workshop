import {MyDirectiveDirective} from './my-directive.directive';
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

describe('MyDirectiveDirective', () => {
  // Does not work because we're using inject()
  /*it('should create an instance', () => {
    const directive = new MyDirectiveDirective();
    expect(directive).toBeTruthy();
  });*/

  async function setupDirective() {
    // Define a Test Component that uses the pipe
    @Component({
      selector: 'app-test-my-directive',
      template: 'My Template',
      hostDirectives: [MyDirectiveDirective]
    })
    class TestComponent {
      someValue = 1;
    }

    // Use TestBed to create the Angular Environment

    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [MyDirectiveDirective],
    }).compileComponents();

    // Create the component fixture to test the pipe

    const fixture = TestBed.createComponent(TestComponent);
    const debugElement = fixture.debugElement;
    fixture.detectChanges()

    return {TestComponent, fixture, debugElement};
  }

  it('should prepend html element', async () => {
    const { debugElement } = await setupDirective();

    // Make your assertions

    expect(debugElement.nativeElement.textContent).toEqual('Special: My Template');
  });

  it('should find directive by using the debug element', async () => {
    const {TestComponent, debugElement} = await setupDirective();

    if (!debugElement.parent) { throw new Error('no parent found'); }

    const directiveDe = debugElement.parent.query(By.directive(MyDirectiveDirective));
    const componentDe = debugElement.parent.query(By.directive(TestComponent));

    const directiveInstance = directiveDe.injector.get(MyDirectiveDirective);

    expect(directiveDe).toBeTruthy(); // HTML Element
    expect(typeof directiveDe.componentInstance.ngOnInit).toEqual('undefined'); // no instance
    expect(typeof directiveInstance.ngOnInit).toEqual('function'); // with the injector we got the right instance

    expect(componentDe.componentInstance).toBeTruthy(); // Test Component instance
    expect(componentDe.componentInstance.someValue).toEqual(1);
  })
});
