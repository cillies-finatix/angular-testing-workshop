import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TestingHhRoutingComponent} from './testing-hh-routing.component';
import {fireEvent, render, screen} from "@testing-library/angular";
import {RouterTestingModule} from "@angular/router/testing";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

describe('TestingHhRoutingComponent', () => {
  let fixture: ComponentFixture<TestingHhRoutingComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    const result = await render(TestingHhRoutingComponent, {
      imports: [RouterTestingModule.withRoutes([
        // Nur echte Routen definieren ...
        { path: 'link-to-a-page', component: TestingHhRoutingComponent },  // Dummy-Route
        { path: 'link-to-another-page', component: TestingHhRoutingComponent },  // Dummy-Route
        { path: 'dynamic/:someParam', component: TestingHhRoutingComponent },  // Dummy-Route

        // oder man macht es sich leicht mit einem Matcher für alles
        // { path: '**', component: TestingHhRoutingComponent },  // Dummy-Route
      ])]
    });

    fixture = result.fixture;

    location = TestBed.inject(Location);
    router = TestBed.inject(Router);

    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should have 2 links', () => {
    expect(screen.getByTestId('link-router-link')).not.toBeNull();
    expect(screen.getByTestId('link-router-navigate')).not.toBeNull();
    expect(screen.getByTestId('link-router-dynamic')).not.toBeNull();
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

  // Das geht auch, testet aber eigentlich schon interne Implementierungs-Details, was vermieden werden sollte.
  // Der Ansatz funktioniert nicht, wenn man die routerLink Directive verwendet.
  it('should call router.navigate to /link-to-another-page when the second link is clicked', async () => {
    const spy = jest.spyOn(router, 'navigate');
    fireEvent.click(screen.getByTestId('link-router-navigate'));
    expect(spy).toHaveBeenCalledWith(['/', 'link-to-another-page']);
  });
});
