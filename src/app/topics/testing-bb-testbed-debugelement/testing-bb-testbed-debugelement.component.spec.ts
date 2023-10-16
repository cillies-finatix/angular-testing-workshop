import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingBbTestbedDebugelementComponent } from './testing-bb-testbed-debugelement.component';

describe('TestingBbTestbedDebugelementComponent', () => {
  let component: TestingBbTestbedDebugelementComponent;
  let fixture: ComponentFixture<TestingBbTestbedDebugelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingBbTestbedDebugelementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingBbTestbedDebugelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
