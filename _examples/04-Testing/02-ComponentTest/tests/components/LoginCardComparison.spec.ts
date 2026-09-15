// ⚠️ DEMO / THROWAWAY — companion to LoginCardComparison.story.ts. It proves the
// `.story.ts` format works end-to-end, mirroring LoginCard.spec.ts test-for-test.
// Delete together with LoginCardComparison.story.ts once the format is decided.
//
// Note how most tests mount the BARE component (`/Default`, no wrapper); only the two
// emit tests need the wrapping story (`/Emitting`).

import { expect, test } from '@playwright/test';
import type { LoginCardProps } from './LoginCardComparison.story';

const rendering = 'components/LoginCardComparison/Default';
const emitting = 'components/LoginCardComparison/Emitting';

test.describe('LoginCard (.story.ts)', () => {
  // Given
  test.describe('given the user is not logged in', () => {
    test('shows a login message', async ({ mount }) => {
      const component = await mount<LoginCardProps>(rendering, {
        isLoggedIn: false,
        name: '',
      });

      await expect(component.getByTestId('login-message')).toHaveText(
        'Login to continue',
      );
    });

    test('shows a login button', async ({ mount }) => {
      const component = await mount<LoginCardProps>(rendering, {
        isLoggedIn: false,
        name: '',
      });

      await expect(component.getByTestId('login-button')).toBeVisible();
    });

    test('does not show a welcome message', async ({ mount }) => {
      const component = await mount<LoginCardProps>(rendering, {
        isLoggedIn: false,
        name: '',
      });

      await expect(component.getByTestId('welcome-message')).not.toBeVisible();
    });

    // When
    test.describe('when user clicks on login button', () => {
      // Then
      test('emits "login" with true', async ({ mount }) => {
        const component = await mount<LoginCardProps>(emitting, {
          isLoggedIn: false,
        });

        await component.getByTestId('login-button').click();

        await expect(component.getByTestId('login-emit')).toHaveValue(
          'LOGIN_EVENT:true',
        );
      });
    });

    test.describe('when user clicks on cancel button', () => {
      // Then
      test('emits "cancel"', async ({ mount }) => {
        const component = await mount<LoginCardProps>(emitting, {
          isLoggedIn: false,
        });

        await component.locator('.cancel-btn').click();

        await expect(component.getByTestId('cancel-events')).toHaveValue(
          JSON.stringify(['CANCEL_EVENT']),
        );
      });
    });
  });

  // Given
  test.describe('given the user is logged in', () => {
    test('displays the welcome message', async ({ mount }) => {
      const component = await mount<LoginCardProps>(rendering, {
        isLoggedIn: true,
        name: 'Dieter Schwarz',
      });

      await expect(component.getByTestId('welcome-message')).toHaveText(
        'Welcome, Dieter Schwarz',
      );
    });

    test('does not display the login button anymore', async ({ mount }) => {
      const component = await mount<LoginCardProps>(rendering, {
        isLoggedIn: true,
        name: 'Dieter Schwarz',
      });

      await expect(component.getByTestId('login-button')).not.toBeVisible();
    });

    test('displays a logout button', async ({ mount }) => {
      const component = await mount<LoginCardProps>(rendering, {
        isLoggedIn: true,
        name: 'Dieter Schwarz',
      });

      await expect(component.getByTestId('logout-button')).toBeVisible();
    });

    test('displays nested details', async ({ mount }) => {
      const component = await mount<LoginCardProps>(rendering, {
        isLoggedIn: true,
        name: 'Dieter Schwarz',
        details: {
          lastLogin: '2024-06-01T12:00:00Z',
          timeToLogout: 3600,
          email: 'dieter.schwarz@example.com',
          address: {
            city: 'Berlin',
            country: 'Germany',
          },
        },
      });

      await expect(component.getByTestId('details')).toHaveText(
        'Last Login: 2024-06-01T12:00:00ZTime to Logout: 3600 minutesEmail: dieter.schwarz@example.com Address: Berlin, Germany',
      );
    });

    // When
    test('the name prop changes', async ({ mount }) => {
      const component = await mount<LoginCardProps>(rendering, {
        isLoggedIn: true,
        name: 'Dieter Schwarz',
      });

      // update() replaces props on the same root, so re-pass isLoggedIn.
      await component.update({ isLoggedIn: true, name: 'Dieter Bohlen' });

      await expect(component.getByTestId('welcome-message')).toHaveText(
        'Welcome, Dieter Bohlen',
      );
      await expect(component.getByTestId('login-button')).not.toBeVisible();
      await expect(component.getByTestId('logout-button')).toBeVisible();
    });
  });
});
