import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing01TestbedBasicsComponent } from './testing01-testbed-basics.component';

describe('Testing01TestbedBasicsComponent', () => {
  let component: Testing01TestbedBasicsComponent;
  let fixture: ComponentFixture<Testing01TestbedBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing01TestbedBasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Testing01TestbedBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
