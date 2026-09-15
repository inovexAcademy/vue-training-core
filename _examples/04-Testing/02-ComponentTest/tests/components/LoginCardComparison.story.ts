// ⚠️ DEMO / THROWAWAY — this file exists only to compare the `.story.ts` authoring
// style against `LoginCard.story.vue` (same component, same scenarios). Delete it once
// the story format is decided.
//
// Compare with: ./LoginCard.story.vue
//
// Ids exposed by this file (resolved by playwright/gallery/main.ts):
//   components/LoginCardComparison/Default    — the bare component, no wrapper
//   components/LoginCardComparison/Emitting   — wraps only to record emits

import { defineComponent, h, ref } from 'vue';
import LoginCard from '../../src/components/LoginCard.vue';

export type LoginCardProps = {
  isLoggedIn?: boolean;
  name?: string;
  details?: {
    lastLogin: string;
    timeToLogout: number;
    email: string;
    address: {
      city: string;
      country: string;
    };
  };
};

// Plain rendering / prop scenarios need NO wrapper — the story IS the component.
// `mount<LoginCardProps>('components/LoginCardComparison/Default', { isLoggedIn: true })`
export const Default = LoginCard;

// Only the emit scenario wraps the component: it catches the emits and records them into
// a hidden form for the spec to read with toHaveValue() (the new model has no Node-side
// `on:` spy, so emitted values must be observable through the DOM).
export const Emitting = defineComponent(
  (props: LoginCardProps) => {
    const lastLogin = ref('');
    const cancelEvents = ref<string[]>([]);
    return () => [
      h(LoginCard, {
        ...props,
        onLogin: (value: boolean) => (lastLogin.value = `LOGIN_EVENT:${value}`),
        onCancel: () => cancelEvents.value.push('CANCEL_EVENT'),
      }),
      h('form', { hidden: true }, [
        h('input', {
          'data-testid': 'login-emit',
          value: lastLogin.value,
          readonly: true,
        }),
        h('input', {
          'data-testid': 'cancel-events',
          value: JSON.stringify(cancelEvents.value),
          readonly: true,
        }),
      ]),
    ];
  },
  { props: ['isLoggedIn', 'name', 'details'] },
);
