import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingDdTestbedServicesComponent } from './testing-dd-testbed-services.component';

describe('TestingDdTestbedServicesComponent', () => {
  let component: TestingDdTestbedServicesComponent;
  let fixture: ComponentFixture<TestingDdTestbedServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingDdTestbedServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingDdTestbedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
