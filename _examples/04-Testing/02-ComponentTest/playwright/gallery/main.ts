import { createApp, h, shallowRef, type App, type Component } from 'vue';

// Mirror the app's own entry so stories look like the real app.
import '../../src/assets/main.css';

type MountParams = { story: string; props?: Record<string, unknown> };

// Stories live under tests/components as *.story.vue (one story per file).
const stories = import.meta.glob('../../tests/**/*.story.vue');
const idOf = (file: string) =>
  file.replace(/^(\.\.\/)+tests\//, '').replace(/\.story\.vue$/, '');

async function resolve(storyId: string): Promise<Component | undefined> {
  const file = Object.keys(stories).find(
    (f) => idOf(f) === storyId || idOf(f).endsWith('/' + storyId),
  );
  if (!file) return undefined;
  const mod = (await stories[file]!()) as { default: Component };
  return mod.default;
}

// Reactive host: mounted once, refs update in place so update() preserves state.
const story = shallowRef<Component | null>(null);
const props = shallowRef<Record<string, unknown>>({});
const host = { render: () => (story.value ? h(story.value, props.value) : null) };
let app: App | undefined;

// The Playwright `mount` fixture drives window.mount / window.unmount on the gallery page.
const mount = async ({ story: storyId, props: next }: MountParams): Promise<void> => {
  const resolved = await resolve(storyId);
  if (!resolved) throw new Error(`Unknown story: ${storyId}`);
  story.value = resolved;
  props.value = next ?? {};
  if (!app) {
    app = createApp(host);
    app.mount('#root');
  }
};

const unmount = async (): Promise<void> => {
  app?.unmount();
  app = undefined;
};

Object.assign(window, { mount, unmount });
