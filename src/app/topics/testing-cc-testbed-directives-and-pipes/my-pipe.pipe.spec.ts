import {MyPipePipe} from './my-pipe.pipe';
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";

describe('MyPipePipe', () => {
  // Does not work because we're using inject()
  /**
  it('create an instance and test it', () => {
    const pipe = new MyPipePipe();
    expect(pipe.transform('test me')).toEqual('test me piped');
  });
  /**/

  it('should add piped on transform', async () => {
    // Define a Test Component that uses the pipe.
    @Component({
      selector: 'app-test-my-pipe',
      template: `{{ 'my-value' | myPipe }}`,
    })
    class TestComponent {}

    // Use TestBed to create the Angular Environment

    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [MyPipePipe],
    }).compileComponents();

    // Create the component fixture to test the pipe

    const fixture = TestBed.createComponent(TestComponent);
    const debugElement = fixture.debugElement;
    fixture.detectChanges()

    // Make your assertions

    expect(debugElement.nativeElement.textContent).toEqual('my-value piped');
  });
});
