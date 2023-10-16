import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing08RoutingComponent } from './testing08-routing.component';

describe('Testing08RoutingComponent', () => {
  let component: Testing08RoutingComponent;
  let fixture: ComponentFixture<Testing08RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing08RoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Testing08RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
