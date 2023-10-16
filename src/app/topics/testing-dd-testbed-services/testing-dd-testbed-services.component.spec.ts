import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TestingDdTestbedServicesComponent} from './testing-dd-testbed-services.component';
import {MyServiceService} from "./my-service.service";
import {createMock, Mock} from "@testing-library/angular/jest-utils";

describe('TestingDdTestbedServicesComponent', () => {
  let component: TestingDdTestbedServicesComponent;
  let fixture: ComponentFixture<TestingDdTestbedServicesComponent>;
  let mockedService: Mock<MyServiceService>;

  beforeEach(() => {
    mockedService = createMock(MyServiceService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingDdTestbedServicesComponent],
      providers: [
        { provide: MyServiceService, useValue: mockedService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingDdTestbedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a mocked service', () => {
    expect(component.myService.prop1).toBeUndefined();
    expect(component.myService.increment()).toBeUndefined();
  });

  it('should call something', () => {
    // Hier wird alles gemocked, daher reagiert der Service auch nicht
    // auf die Funktionsaufrufe, wie es in der echten Implementierung der Fall wäre.

    expect(component.myService.prop1).toBeUndefined();

    component.increaseServiceProp();
    expect(mockedService.increment).toHaveBeenCalled();

    expect(component.myService.prop1).toBeUndefined();
  });
});
