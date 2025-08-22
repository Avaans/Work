import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import ModelToggle from '../ModelToggle';
import { ModelProvider } from '../ModelContext';
import { UserProvider } from '../UserContext';

function render(role?: string) {
  localStorage.clear();
  if (role) localStorage.setItem('role', role);
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(
      <UserProvider>
        <ModelProvider>
          <ModelToggle />
        </ModelProvider>
      </UserProvider>
    );
  });
  return container;
}

test('hides toggle for normal users', () => {
  const container = render();
  expect(container.querySelector('select')).toBeNull();
});

test('shows toggle for editors and switches model', () => {
  const container = render('editor');
  const select = container.querySelector('select') as HTMLSelectElement;
  expect(select).toBeTruthy();
  act(() => {
    select.value = 'cloud';
    select.dispatchEvent(new Event('change', { bubbles: true }));
  });
  expect(select.value).toBe('cloud');
});
