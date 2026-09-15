import { createApp, h, shallowRef, type App, type Component } from 'vue';

type MountParams = { story: string; props?: Record<string, unknown> };

// Stories live under tests/components as either:
//   *.story.vue — one story per file, addressed by path (its default export), or
//   *.story.ts  — many named exports per file, addressed by <path>/<ExportName>.
const stories = import.meta.glob('../../tests/**/*.story.{ts,vue}');
const idOf = (file: string) =>
  file.replace(/^(\.\.\/)+tests\//, '').replace(/\.story\.(ts|vue)$/, '');

async function resolve(storyId: string): Promise<Component | undefined> {
  // 1) Whole id is a file path → its default export (SFC story, or a .ts default).
  const byPath = Object.keys(stories).find(
    (f) => idOf(f) === storyId || idOf(f).endsWith('/' + storyId),
  );
  if (byPath) {
    const mod = (await stories[byPath]!()) as { default?: Component };
    return mod.default;
  }

  // 2) id is <path>/<ExportName> → a named export of a .story.ts file.
  const sep = storyId.lastIndexOf('/');
  if (sep === -1) return undefined;
  const path = storyId.slice(0, sep);
  const name = storyId.slice(sep + 1);
  const byExport = Object.keys(stories).find(
    (f) => idOf(f) === path || idOf(f).endsWith('/' + path),
  );
  if (!byExport) return undefined;
  const mod = (await stories[byExport]!()) as Record<string, Component | undefined>;
  return mod[name] ?? mod.default;
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
