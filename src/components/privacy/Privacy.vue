<template>
  <div>
    <img :src="iconPath" alt="Privacy Icon" class="object-contain h-4 w-4 m-auto" />
  </div>
</template>

<script>
import privacyIcon from '@/assets/icons/privacy.svg';
export default {
  name: "Privacy",
  data() {
    return {
      iconPath: privacyIcon
    };
  }
}
</script>

<style scoped>

</style>
