import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingHhRoutingComponent } from './testing-hh-routing.component';

describe('TestingHhRoutingComponent', () => {
  let component: TestingHhRoutingComponent;
  let fixture: ComponentFixture<TestingHhRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingHhRoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingHhRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
