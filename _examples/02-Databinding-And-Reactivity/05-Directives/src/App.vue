<script lang="ts" setup>
import vBind from './components/v-bind.vue';
import vIf from './components/v-if.vue';
import vFor from './components/v-for.vue';
import vModel from './components/v-model.vue';
import vSlot from './components/v-slot.vue';
import vScopedSlot from './components/scoped-slot/v-scoped-slot.vue';
</script>

<template>
  <div class="demo">
    <h2>v-bind Example</h2>
    <v-bind />
  </div>

  <div class="demo">
    <h2>v-if Example</h2>
    <v-if />
  </div>

  <div class="demo">
    <h2>v-for Example</h2>
    <v-for />
  </div>

  <div class="demo">
    <h2>v-model Example</h2>
    <v-model />
  </div>

  <div class="demo">
    <h2>v-slot Example</h2>
    <v-slot />
  </div>

  <div class="demo">
    <h2>Scoped Slot Example</h2>
    <v-scoped-slot />
  </div>
</template>

<style lang="scss">
.demo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-block-end: 2rem;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #ccc;
    margin-top: 2rem;
  }
}
</style>
