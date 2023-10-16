import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing02TestbedDebugelementComponent } from './testing02-testbed-debugelement.component';

describe('Testing02TestbedDebugelementComponent', () => {
  let component: Testing02TestbedDebugelementComponent;
  let fixture: ComponentFixture<Testing02TestbedDebugelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing02TestbedDebugelementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Testing02TestbedDebugelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
