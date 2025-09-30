<script setup>
import FancyList from './v-scoped-slot-FancyList.vue';
// Original from https://play.vuejs.org/#eNrNVG1z2kYQ/itbuR1gBiQMcetSTKfJuJl23JQpbmc6Vj4c0gounO4090KMCf89exICMXacTD7lk3S7++zLsy/b4LeiCNcOg1EwNonmhQWD1hWTWPK8UNrC70wmmxtuLGRa5dAKo4PEA1uxHEcVkjD0sJgXglmkF8B4OZi8Uk4bhFueo2VzgeOIhKXy6JoVvOe0uIoDW5v5dxzAqEDdK9gCSXfej4MSSdg6DJxx+iXlFuYq3XQhxSobrmQX1kw4hN0BRsCUryERzBjCeGhDR9pisq0cwW43jjwNR9UB5jMk2HwDZNyIRxj44GX7sDsQfIWm6WccUfy6huiUqyOxJZMVezdOJkv4C6V7njfh7b59zj5H2PdfRdaJkp7GbgSCSVSBKUlCHxy2HpcpaXuGP+AI+uEl5r94YaKE0iM4ezGYX14OSbQrh9o7mQTd4GTeP70oW9CYwW6/JtVqxDJRkvpUaFUYuKLaMy5x6l/tuxZ1718tWl1oUcOm1K/W284R44n2GPLavqsUUQS5SlYkyhW1MWVUVoY2WXK5iCXl45dMOdtud+BqUlXMM2iX4cMq3K8hl4lw1IV267BsrU6nsiZ7HzasGnIFd3Uvqg6PoDUrWYWZUNbAa8dTpAIaPSWT6zWT8L9ypCj9jGDQh133kav/KMSts0pz5lk4dfKGihOcwS0WwlGB7OjtnLxVzt76zw5Q0IH5wvyn/OHB+zqNNmOC5fw0xOOEXzq9QP0I/FojrmDm56Xh4eIpD1Nm7BPRaVmXaG0zAYI3a6Sh7FJW/T4NwnMH14l6YQSHdY9ntHvfVZwIlAu7bOzujWIpTU4YhvWOCX6CzpTebzxwWTHbPAuGZgAky/2dqc4CYeZcpod3dNjevedxVCb4mYUFcKLup6DF65X6nt0UxIxUEsu1BShY6gsYwUVxvxfNWbJaaOVkOiKoRKZ7C01lorTt4flFiouuX/R0+PMABhc/0OPHFz9hlnVKfEk5lb6P3fRPM3wIkjO94NS486OoGfcsy7LaXeOOWKpPZnwRvjNK0h0pg8RBovKCC9R/l9NABI/q8HHAhFDv/yxlVjvczxNhlpisnpC/M/deFgdTjQb1GuPgoLOUNNpKfT17g/f0f1DmKnWCrJ9R/oNGCedzrMxeUq2UdsOuzPaP8hoSa7fm+t6iNHVRPtGSlNI+DuhCvnqm9GO6w3BYr0Cw+wjOtc5E
</script>

<template>
  <h2>Course Timetable</h2>
  <FancyList api-url="timetable-url" :per-page="10">
    <template #item="{ body, description, value }">
      <div class="item">
        <p>{{ body }}</p>
        <p class="meta">by {{ description }} | {{ value }} likes</p>
      </div>
    </template>
  </FancyList>

  <h2>Lunch Menu</h2>
  <FancyList api-url="lunch-url" :per-page="10">
    <template #item="{ body, description, value }">
      <div class="item">
        <p>{{ body }}</p>
        <p class="meta">{{ description }} | {{ value }} $</p>
      </div>
    </template>
  </FancyList>
</template>

<style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>
