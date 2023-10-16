import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing06TestingLibraryComponent } from './testing06-testing-library.component';

describe('Testing06TestingLibraryComponent', () => {
  let component: Testing06TestingLibraryComponent;
  let fixture: ComponentFixture<Testing06TestingLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing06TestingLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Testing06TestingLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
