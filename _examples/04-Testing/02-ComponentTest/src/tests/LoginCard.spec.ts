import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import LoginCard from '../components/LoginCard.vue';

const loginMsg = '[data-testid=login-message]';
const loginBtn = '[data-testid=login-button]';
const welcomeMsg = '[data-testid=welcome-message]';

// Component name as outmost describe
describe('LoginCard', () => {
  // Given
  describe('given the user is not logged in', () => {
    it('shows login message', () => {
      // Arrange
      const wrapper = mount(LoginCard, {
        props: { isLoggedIn: false, name: '' },
      });

      // Assert
      expect(wrapper.find(loginMsg).text()).toBe('Login to continue');
      expect(wrapper.find(loginBtn).exists()).toBe(true);
      expect(wrapper.find(welcomeMsg).exists()).toBe(false);
    });
    // When
    describe('when user clicks on login button', () => {
      // Then
      it('emits "login" with true', async () => {
        // Arrange
        const wrapper = mount(LoginCard, {
          props: { isLoggedIn: false },
        });

        // Act
        wrapper.find(loginBtn).trigger('click');

        // Assert
        expect(wrapper.emitted('login')[0][0]).toEqual(true);
      });
    });

     describe('when user clicks on cancel button', () => {
      // Then
      it('emits "cancel" with true', async () => {
        // Arrange
        const wrapper = mount(LoginCard, {
          props: { isLoggedIn: false },
        });

        // Act
        const cancelBtn = wrapper.get('.cancel-btn');
        console.log('Cancel Button:', cancelBtn.html()); // Debugging line
        await cancelBtn.trigger('click');

        // Assert
        expect(wrapper.emitted('cancel').length).toBe(1);
      });
    });
  });

  describe('given the user is logged in', () => {
    it('displays the welcome message', async () => {
      // Arrange
      const wrapper = mount(LoginCard, {
        props: { isLoggedIn: false },
      });

      // Act
      await wrapper.setProps({ isLoggedIn: true, name: 'Dieter Schwarz' });

      // Assert
      expect(wrapper.find(welcomeMsg).text()).toContain(
        'Welcome, Dieter Schwarz',
      );
      expect(wrapper.find(loginBtn).exists()).toBe(false);
    });
  });
});
