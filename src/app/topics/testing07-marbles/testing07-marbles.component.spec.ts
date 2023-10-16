import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing07MarblesComponent } from './testing07-marbles.component';

describe('Testing07MarblesComponent', () => {
  let component: Testing07MarblesComponent;
  let fixture: ComponentFixture<Testing07MarblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing07MarblesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Testing07MarblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
