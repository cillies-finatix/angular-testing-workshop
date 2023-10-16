import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing03TestbedDirectivesAndPipesComponent } from './testing03-testbed-directives-and-pipes.component';

describe('Testing03TestbedDirectivesAndPipesComponent', () => {
  let component: Testing03TestbedDirectivesAndPipesComponent;
  let fixture: ComponentFixture<Testing03TestbedDirectivesAndPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing03TestbedDirectivesAndPipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Testing03TestbedDirectivesAndPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
