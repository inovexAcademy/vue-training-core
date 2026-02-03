import 'vue-router';

/**
 * Typing the route meta fields of the vue-router.
 * For more information see: https://router.vuejs.org/guide/advanced/meta.html#typescript
 */
declare module 'vue-router' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-object-type --
   * The empty object types are needed in this file in order for the type intellisense to work properly
   */
  interface RouteMeta {}
}
