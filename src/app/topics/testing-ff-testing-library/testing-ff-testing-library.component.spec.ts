import {TestingFfTestingLibraryComponent} from './testing-ff-testing-library.component';
import {fireEvent, render, screen} from "@testing-library/angular";
import {userEvent} from "@testing-library/user-event";

describe('TestingFfTestingLibraryComponent', () => {
  beforeEach(async () => {
    await render(TestingFfTestingLibraryComponent)
  });

  describe('get by ...', () => {
    it('should be null if elements were not found', () => {
      // jest-dom funktioniert noch nicht mit dem Experimentellen Jest Support von Angular
      // Es würde aber mit einer eigenen Installation/Konfiguration von Jest funktionieren.
      // expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      // expect(screen.queryByText('Unbekannter Text')).not.toBeInTheDocument();

      expect(screen.queryByRole('alert')).toBeNull();
      expect(screen.queryByText('Unbekannter Text')).toBeNull();
    });

    it('should have button', () => {
      // jest-dom funktioniert noch nicht mit dem Experimentellen Jest Support von Angular
      // Es würde aber mit einer eigenen Installation/Konfiguration von Jest funktionieren.
      // expect(screen.getByRole('button')).toHaveTextContent('Ein Button');

      expect(screen.getByRole('button').textContent).toContain('Ein Button');
    });

    it('should have link', () => {
      // jest-dom funktioniert noch nicht mit dem Experimentellen Jest Support von Angular
      // Es würde aber mit einer eigenen Installation/Konfiguration von Jest funktionieren.
      // expect(screen.getByRole('link')).toHaveTextContent('Ein Button');

      expect(screen.getByRole('link').textContent).toContain('Ein Link');
    });

    it('should have navigation', () => {
      // jest-dom funktioniert noch nicht mit dem Experimentellen Jest Support von Angular
      // Es würde aber mit einer eigenen Installation/Konfiguration von Jest funktionieren.
      // expect(screen.getByRole('navigation')).toHaveTextContent('Ein Navigation');

      expect(screen.getByRole('navigation').textContent).toContain('Eine Navigation');
    });

    it('should have span', () => {
      // jest-dom funktioniert noch nicht mit dem Experimentellen Jest Support von Angular
      // Es würde aber mit einer eigenen Installation/Konfiguration von Jest funktionieren.
      // expect(screen.getByText('Ein Span')).toBeInTheDocument();

      expect(screen.getByText('Ein Span')).not.toBeNull();
    });
  });

  describe('simulate ui events', () => {
    it('should click on a button with fireEvent', () => {
      fireEvent.click(screen.getByRole('button', { name: /Ein Button/i }));

      expect(screen.getByTestId('result').textContent).toEqual('Button geklickt');
    });

    it('should click on a button with userEvent', async () => {
      await userEvent.click(screen.getByRole('button', {name: /Ein Button/i}));

      expect(screen.getByTestId('result').textContent).toEqual('Button geklickt');
    });
  });
});
