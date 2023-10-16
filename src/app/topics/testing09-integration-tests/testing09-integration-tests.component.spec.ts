import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing09IntegrationTestsComponent } from './testing09-integration-tests.component';

describe('Testing09IntegrationTestsComponent', () => {
  let component: Testing09IntegrationTestsComponent;
  let fixture: ComponentFixture<Testing09IntegrationTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing09IntegrationTestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Testing09IntegrationTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
