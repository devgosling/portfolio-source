<template>
  <div class="portofolio">
    <LeftSide />
    <RightSide />
  </div>
</template>
<script>
import LeftSide from "@/components/LeftSide.vue"
import RightSide from "@/components/RightSide.vue";

export default {
  components: {
    LeftSide,
    RightSide
  }
}
</script>
<style lang="scss">
.portofolio {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
} 
</style>