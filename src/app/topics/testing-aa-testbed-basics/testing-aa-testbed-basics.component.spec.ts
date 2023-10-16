import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingAaTestbedBasicsComponent } from './testing-aa-testbed-basics.component';

describe('TestingAaTestbedBasicsComponent', () => {
  let component: TestingAaTestbedBasicsComponent;
  let fixture: ComponentFixture<TestingAaTestbedBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingAaTestbedBasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingAaTestbedBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
