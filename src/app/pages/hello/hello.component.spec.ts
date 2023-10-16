import {screen, render} from "@testing-library/angular";
import {HelloComponent} from "./hello.component";

describe('HelloComponent', () => {
  beforeEach(async () => {
    await render(HelloComponent);
  });

  it('should create', () => {
    expect(screen.getByText('Hello works!')).toBeTruthy();
  });
});
