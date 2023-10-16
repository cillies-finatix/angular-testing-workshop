import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingEeJestBasicsComponent } from './testing-ee-jest-basics.component';

describe('TestingEeJestBasicsComponent', () => {
  let component: TestingEeJestBasicsComponent;
  let fixture: ComponentFixture<TestingEeJestBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingEeJestBasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingEeJestBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
