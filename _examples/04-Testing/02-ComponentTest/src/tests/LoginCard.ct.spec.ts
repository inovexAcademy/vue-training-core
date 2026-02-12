import LoginCard from '@/components/LoginCard.vue';
import { expect, test } from '@playwright/experimental-ct-vue';

const loginMsg = '[data-testid=login-message]';
const loginBtn = '[data-testid=login-button]';
const logoutBtn = '[data-testid=logout-button]';
const welcomeMsg = '[data-testid=welcome-message]';
const details = '[data-testid=details]';

// Component name as outmost describe
test.describe('LoginCard', () => {
  // Given
  test.describe('given the user is not logged in', () => {
    test('shows a login message', async ({ mount }) => {
      // Arrange
      const component = await mount(LoginCard, {
        props: { isLoggedIn: false, name: '' },
      });

      // Assert
      await expect(component.locator(loginMsg)).toHaveText('Login to continue');
    });

    test('shows a login button', async ({ mount }) => {
      // Arrange
      const component = await mount(LoginCard, {
        props: { isLoggedIn: false, name: '' },
      });

      // Assert
      await expect(component.locator(loginBtn)).toBeVisible();
    });

    test('does not show a welcome message', async ({ mount }) => {
      // Arrange
      const component = await mount(LoginCard, {
        props: { isLoggedIn: false, name: '' },
      });

      // Assert
      await expect(component.locator(welcomeMsg)).not.toBeVisible();
    });

    // When
    test.describe('when user clicks on login button', () => {
      // Then
      test('emits "login" with true', async ({ mount }) => {
        const messages: string[] = [];

        // Arrange
        const component = await mount(LoginCard, {
          props: {
            isLoggedIn: false,
          },
          on: {
            login: (val: boolean) => messages.push('LOGIN_EVENT:' + val),
          },
        });

        // Act
        await component.locator(loginBtn).click();

        // Assert
        expect(messages).toContain('LOGIN_EVENT:true');
      });
    });

    test.describe('when user clicks on cancel button', () => {
      // Then
      test('emits "cancel"', async ({ mount }) => {
        const messages: string[] = [];

        // Arrange
        const component = await mount(LoginCard, {
          props: {
            isLoggedIn: false,
          },
          on: {
            cancel: () => messages.push('CANCEL_EVENT'),
          },
        });

        // Act
        await component.locator('.cancel-btn').click();

        // Assert
        expect(messages).toHaveLength(1);
        expect(messages[0]!).toEqual('CANCEL_EVENT');
      });
    });
  });

  // Given
  test.describe('given the user is logged in', () => {
    test('displays the welcome message', async ({ mount }) => {
      // Arrange
      const component = await mount(LoginCard, {
        props: { isLoggedIn: true, name: 'Dieter Schwarz' },
      });

      // Assert
      await expect(component.locator(welcomeMsg)).toHaveText(
        'Welcome, Dieter Schwarz',
      );
    });

    test('does not display the login button anymore', async ({ mount }) => {
      // Arrange
      const component = await mount(LoginCard, {
        props: { isLoggedIn: true, name: 'Dieter Schwarz' },
      });

      // Assert
      await expect(component.locator(loginBtn)).not.toBeVisible();
    });

    test('displays a logout button', async ({ mount }) => {
      // Arrange
      const component = await mount(LoginCard, {
        props: { isLoggedIn: true, name: 'Dieter Schwarz' },
      });

      // Assert
      await expect(component.locator(logoutBtn)).toBeVisible();
    });

    test('displays nested details', async ({ mount }) => {
      // Arrange
      const component = await mount(LoginCard, {
        props: {
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
        },
      });

      // Assert
      await expect(component.locator(details)).toHaveText(
        'Last Login: 2024-06-01T12:00:00ZTime to Logout: 3600 minutesEmail: dieter.schwarz@example.com Address: Berlin, Germany',
      );
    });

    // When
    test('the name prop changes', async ({ mount }) => {
      // Arrange
      const component = await mount(LoginCard, {
        props: { isLoggedIn: true, name: 'Dieter Schwarz' },
      });

      await component.update({ props: { name: 'Dieter Bohlen' } });

      // Assert
      await expect(component.locator(welcomeMsg)).toHaveText(
        'Welcome, Dieter Bohlen',
      );
      await expect(component.locator(loginBtn)).not.toBeVisible();
      await expect(component.locator(logoutBtn)).toBeVisible();
    });
  });
});
