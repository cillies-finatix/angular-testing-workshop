import {screen, render} from "@testing-library/angular";
import {HelloComponent} from "./hello.component";

describe('HelloComponent', () => {
  beforeEach(async () => {
    await render(HelloComponent);
  });

  it('should create', () => {
    expect(screen.getByText("Testing A: Testbed-basics")).toBeTruthy();
    expect(screen.getByText("Testing B: Testbed-debugelement")).toBeTruthy();
    expect(screen.getByText("Testing C: Testbed-directives-and-pipes")).toBeTruthy();
    expect(screen.getByText("Testing D: Testbed-services")).toBeTruthy();
    expect(screen.getByText("Testing E: Jest-basics")).toBeTruthy();
    expect(screen.getByText("Testing F: Testing-library")).toBeTruthy();
    expect(screen.getByText("Testing G: Marbles")).toBeTruthy();
    expect(screen.getByText("Testing H: Routing")).toBeTruthy();
    expect(screen.getByText("Testing I: Integration-tests")).toBeTruthy();
  });
});
