<template>
  <div>
    <div id="mobile-nav" class="w-screen bg-lightblue-100 h-0 invisible">
      <div class="p-6 font-semibold">
        Menu <br />
        <NavContent />
      </div>
  </div>
</div>

</template>

<script>
import NavContent from "./NavContent.vue";
export default {
    components: { NavContent }
}
</script>
