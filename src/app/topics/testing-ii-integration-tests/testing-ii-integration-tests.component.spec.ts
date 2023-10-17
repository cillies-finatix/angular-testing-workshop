import {TestingIiIntegrationTestsComponent} from './testing-ii-integration-tests.component';
import {fireEvent, render, screen} from "@testing-library/angular";
import {TestingAaTestbedBasicsComponent} from "../testing-aa-testbed-basics/testing-aa-testbed-basics.component";
import {
  TestingBbTestbedDebugelementComponent
} from "../testing-bb-testbed-debugelement/testing-bb-testbed-debugelement.component";
import {
  TestingCcTestbedDirectivesAndPipesComponent
} from "../testing-cc-testbed-directives-and-pipes/testing-cc-testbed-directives-and-pipes.component";
import {TestingDdTestbedServicesComponent} from "../testing-dd-testbed-services/testing-dd-testbed-services.component";
import {TestingEeJestBasicsComponent} from "../testing-ee-jest-basics/testing-ee-jest-basics.component";
import {TestingFfTestingLibraryComponent} from "../testing-ff-testing-library/testing-ff-testing-library.component";
import {TestingGgMarblesComponent} from "../testing-gg-marbles/testing-gg-marbles.component";
import {TestingHhRoutingComponent} from "../testing-hh-routing/testing-hh-routing.component";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Location} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";

describe('TestingIiIntegrationTestsComponent', () => {
  let fixture: ComponentFixture<any>;
  let httpController: HttpTestingController;
  let location: Location;

  beforeEach(async () => {
    const result = await render(`
    <app-testing-aa-testbed-basics />
    <app-testing-bb-testbed-debugelement />
    <app-testing-cc-testbed-directives-and-pipes />
    <app-testing-dd-testbed-services />
    <app-testing-ee-jest-basics />
    <app-testing-ff-testing-library />
    <app-testing-gg-marbles />
    <app-testing-hh-routing />
    <app-testing-ii-integration-tests />
    `, {
      imports: [
        // Integration Test of
        TestingAaTestbedBasicsComponent,
        TestingBbTestbedDebugelementComponent,
        TestingCcTestbedDirectivesAndPipesComponent,
        TestingDdTestbedServicesComponent,
        TestingEeJestBasicsComponent,
        TestingFfTestingLibraryComponent,
        TestingGgMarblesComponent,
        TestingHhRoutingComponent,
        TestingIiIntegrationTestsComponent,

        // Nur das Nötigste ist zu mocken:
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: TestingHhRoutingComponent }
        ])
      ]
    });

    fixture = result.fixture;

    httpController = TestBed.inject(HttpTestingController);
    location = TestBed.inject(Location);
    httpController.expectOne('https://pokeapi.co/api/v2/pokemon/ditto').flush('integration test')

    fixture.detectChanges();
  });

  afterEach(() => {
    httpController.verify();
  })

  it('should components', () => {
    expect(screen.getByTestId('test-component-test-id')).not.toBeNull(); // bb
    expect(screen.getByText('Increment')).not.toBeNull(); // dd
  });

  it('should have links of marble-test-area', () => {
    const marbleArea = screen.getByTestId('marble-test-area');
    expect(marbleArea).not.toBeNull(); // bb

    expect(marbleArea.querySelector('li:first-child')?.textContent).toContain('myDataStream$: 1000');
    expect(marbleArea.querySelector('li:last-child')?.textContent).toContain('myRequest$: integration test');
  });

  it('should navigate first link', async () => {
    fireEvent.click(screen.getByTestId('link-router-link'));
    expect(location.path()).toEqual('/link-to-a-page');
  });

  it('should navigate second link', async () => {
    fireEvent.click(screen.getByTestId('link-router-navigate'));
    expect(location.path()).toEqual('/link-to-another-page');
  });

  it('should navigate third link', async () => {
    fireEvent.click(screen.getByTestId('link-router-dynamic'));
    expect(location.path()).toEqual('/dynamic/route?dynamic=true');
  });
});
