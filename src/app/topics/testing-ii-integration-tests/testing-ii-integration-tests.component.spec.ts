import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingIiIntegrationTestsComponent } from './testing-ii-integration-tests.component';

describe('TestingIiIntegrationTestsComponent', () => {
  let component: TestingIiIntegrationTestsComponent;
  let fixture: ComponentFixture<TestingIiIntegrationTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingIiIntegrationTestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingIiIntegrationTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
