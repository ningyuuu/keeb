<template>
  <div class="font-sans font-light max-w-screen-lg mx-auto">
    <MobileNav />

    <div class="container mx-auto px-6 md:flex">
      <Banner />
      <Nuxt/>
    </div>
  </div>
</template>
<script>
import Banner from "~/components/Banner.vue";
import MobileNav from "~/components/MobileNav.vue";
export default {
    components: { Banner, MobileNav }
}
</script>
