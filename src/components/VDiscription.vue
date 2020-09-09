<template>
  <div
    class="custom-discription"
    :style="{color: color, fontSize: fontSize + 'px'}">
    <span v-html="text"></span>
  </div>
</template>

<script>
  export default {
    name: "VDiscription",
    props: ['color', 'text', 'fontSize']
  }
</script>

<style lang="scss">
  .custom-discription {
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #cacbce;
  }
</style>