<template>
  <div class="pt-4 flex flex-col md:w-64">
  <h1 class="text-4xl text-lightblue-800 font-bold w-5/6 md:w-64">Ningzy Works</h1>
  <div class="text-lg text-gray-700 font-light">Quality keyboards for serious work</div>
  <div class="invisible md:visible font-semibold pt-4 h-0 md:h-auto">
    <NavContent />
  </div>
  <div id="nav-tham" class="tham tham-e-squeeze tham-w-6 absolute top-8 right-6 md:invisible" @click="toggleMenu">
    <div class="tham-box">
      <div class="tham-inner bg-gray-500"></div>
    </div>
  </div>
</div>

</template>

<script>
import NavContent from "./NavContent.vue";
export default {
    components: { NavContent },
    methods: {
      toggleMenu() {
        const tham = document.getElementById('nav-tham');
        const nav = document.getElementById('mobile-nav')

        if (tham.classList.contains('tham-active')) {
          tham.classList.remove('tham-active');
          nav.classList.add('h-0')
          nav.classList.add('invisible')
          return
        }

        tham.classList.add('tham-active');
        nav.classList.remove('h-0')
        nav.classList.remove('invisible')
      }
    }
}
</script>

<style>

</style>
