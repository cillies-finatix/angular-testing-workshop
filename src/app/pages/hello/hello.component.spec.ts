import {render, screen} from "@testing-library/angular";
import {HelloComponent} from "./hello.component";

describe('HelloComponent', () => {
  beforeEach(async () => {
    await render(HelloComponent);
  });

  it('should create', () => {
    expect(screen.getByText("A) Testbed-Basics")).toBeTruthy();
    expect(screen.getByText("B) Testbed-DebugElement")).toBeTruthy();
    expect(screen.getByText("C) Testbed-directives-and-pipes")).toBeTruthy();
    expect(screen.getByText("D) Testbed-services")).toBeTruthy();
    expect(screen.getByText("E) Jest-basics")).toBeTruthy();
    expect(screen.getByText("F) Testing-library")).toBeTruthy();
    expect(screen.getByText("G) Marbles")).toBeTruthy();
    expect(screen.getByText("H) Routing")).toBeTruthy();
    expect(screen.getByText("I) Integration-tests")).toBeTruthy();
  });
});
