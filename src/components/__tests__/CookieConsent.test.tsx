import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import CookieConsent from '../CookieConsent';

describe('CookieConsent', () => {
  it('shows banner until accepted', () => {
    localStorage.clear();
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => {
      root.render(<CookieConsent />);
    });
    expect(container.textContent).toMatch(/We use cookies/);
    const button = container.querySelector('button');
    act(() => {
      button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(container.textContent).not.toMatch(/We use cookies/);
  });
});
