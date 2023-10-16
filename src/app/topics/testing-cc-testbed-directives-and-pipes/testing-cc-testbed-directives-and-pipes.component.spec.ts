import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TestingCcTestbedDirectivesAndPipesComponent} from './testing-cc-testbed-directives-and-pipes.component';

describe('TestingCcTestbedDirectivesAndPipesComponent', () => {
  let component: TestingCcTestbedDirectivesAndPipesComponent;
  let fixture: ComponentFixture<TestingCcTestbedDirectivesAndPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingCcTestbedDirectivesAndPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingCcTestbedDirectivesAndPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Nothing to see here
});
