import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingGgMarblesComponent } from './testing-gg-marbles.component';

describe('TestingGgMarblesComponent', () => {
  let component: TestingGgMarblesComponent;
  let fixture: ComponentFixture<TestingGgMarblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingGgMarblesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingGgMarblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
