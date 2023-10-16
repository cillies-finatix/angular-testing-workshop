import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing04TestbedServicesComponent } from './testing04-testbed-services.component';

describe('Testing04TestbedServicesComponent', () => {
  let component: Testing04TestbedServicesComponent;
  let fixture: ComponentFixture<Testing04TestbedServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing04TestbedServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Testing04TestbedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
