import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing05JestBasicsComponent } from './testing05-jest-basics.component';

describe('Testing05JestBasicsComponent', () => {
  let component: Testing05JestBasicsComponent;
  let fixture: ComponentFixture<Testing05JestBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing05JestBasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Testing05JestBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
