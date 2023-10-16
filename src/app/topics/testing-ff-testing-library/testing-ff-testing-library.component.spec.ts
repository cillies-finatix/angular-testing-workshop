import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingFfTestingLibraryComponent } from './testing-ff-testing-library.component';

describe('TestingFfTestingLibraryComponent', () => {
  let component: TestingFfTestingLibraryComponent;
  let fixture: ComponentFixture<TestingFfTestingLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingFfTestingLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingFfTestingLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
