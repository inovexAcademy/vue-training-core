<template>
  <div class="card">
    <slot name="header">
      <h1>Default Header</h1>
    </slot>
    <slot name="body">
      <p class="meta">Default This is some meta information</p>
    </slot>
    <hr />
    <slot name="footer">
      <div class="ctas">
        <button>Cancel</button>
        <button>Delete</button>
      </div>
    </slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: block;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
  max-width: 320px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.ctas {
  padding: 12px;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
</style>
