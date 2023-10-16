import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'testing-aa-testbed-basics', loadComponent: () => import('./topics/testing-aa-testbed-basics/testing-aa-testbed-basics.component').then(m => m.TestingAaTestbedBasicsComponent) },
  {path:'testing-bb-testbed-debugelement', loadComponent: () => import('./topics/testing-bb-testbed-debugelement/testing-bb-testbed-debugelement.component').then(m => m.TestingBbTestbedDebugelementComponent) },
  {path:'testing-cc-testbed-directives-and-pipes', loadComponent: () => import('./topics/testing-cc-testbed-directives-and-pipes/testing-cc-testbed-directives-and-pipes.component').then(m => m.TestingCcTestbedDirectivesAndPipesComponent) },
  {path:'testing-dd-testbed-services', loadComponent: () => import('./topics/testing-dd-testbed-services/testing-dd-testbed-services.component').then(m => m.TestingDdTestbedServicesComponent) },
  {path:'testing-ee-jest-basics', loadComponent: () => import('./topics/testing-ee-jest-basics/testing-ee-jest-basics.component').then(m => m.TestingEeJestBasicsComponent) },
  {path:'testing-ff-testing-library', loadComponent: () => import('./topics/testing-ff-testing-library/testing-ff-testing-library.component').then(m => m.TestingFfTestingLibraryComponent) },
  {path:'testing-gg-marbles', loadComponent: () => import('./topics/testing-gg-marbles/testing-gg-marbles.component').then(m => m.TestingGgMarblesComponent) },
  {path:'testing-hh-routing', loadComponent: () => import('./topics/testing-hh-routing/testing-hh-routing.component').then(m => m.TestingHhRoutingComponent) },
  {path:'testing-ii-integration-tests', loadComponent: () => import('./topics/testing-ii-integration-tests/testing-ii-integration-tests.component').then(m => m.TestingIiIntegrationTestsComponent) },
];









