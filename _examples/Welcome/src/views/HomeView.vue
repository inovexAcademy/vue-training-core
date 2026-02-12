<script lang="ts" setup>
import { iconHeart } from '@sit-onyx/icons';
import { OnyxInfoCard, OnyxLink, OnyxPageLayout, OnyxSidebar } from 'sit-onyx';
</script>

<template>
  <OnyxPageLayout no-padding>
    <OnyxInfoCard
      is="h1"
      headline="Welcome to the Vue Core Training 👋"
      :icon="iconHeart"
      class="welcome-card"
    >
      Congratulations! You are now ready to take part in the exercises of the
      Course!
    </OnyxInfoCard>

    <template #sidebarRight>
      <OnyxSidebar label="Example sidebar" alignment="right">
        <div class="sidebar-cta">
          <h2 class="sidebar-headline">Useful Links</h2>

          <b>Core</b>
          <ul>
            <li><OnyxLink href="https://vuejs.org/">Vue Docs</OnyxLink></li>
            <li>
              <OnyxLink href="https://play.vuejs.org/">Vue Playground</OnyxLink>
            </li>
            <li>
              <OnyxLink href="https://template-explorer.vuejs.org/"
                >Vue Template Explorer</OnyxLink
              >
            </li>
          </ul>

          <b>Libraries</b>
          <ul>
            <li><OnyxLink href="https://vueuse.org/">Vue Use</OnyxLink></li>
            <li>
              <OnyxLink href="https://router.vuejs.org/">Vue Router</OnyxLink>
            </li>
            <li><OnyxLink href="https://pinia.vuejs.org/">Pinia</OnyxLink></li>
          </ul>

          <b>Testing</b>
          <ul>
            <li><OnyxLink href="https://vitest.dev/">Vitest</OnyxLink></li>
            <li>
              <OnyxLink href="https://playwright.dev/">Playwright</OnyxLink>
            </li>
          </ul>

          <b>Cheat Sheets</b>
          <ul>
            <li>
              <OnyxLink href="https://vue-cheatsheet.themeselection.com/"
                >Vue Sheet</OnyxLink
              >
            </li>
            <li>
              <OnyxLink href="https://learnvue.co/LearnVue-Vue-3-Cheatsheet.pdf"
                >Learn Vue</OnyxLink
              >
            </li>
          </ul>
        </div>
      </OnyxSidebar>
    </template>
  </OnyxPageLayout>
</template>

<style scoped lang="scss">
.welcome-card {
  margin: 0 auto;
  margin-top: 100px;
  max-width: 600px;
  font-size: 32px;
}

.sidebar-headline {
  margin-bottom: 24px;
}

.sidebar-cta {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

b {
  margin: 12px 0 6px 0;
}
</style>
