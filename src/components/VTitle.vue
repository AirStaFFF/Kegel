<template>
  <div
    class="custom-title"
    :style="{color: color, fontSize: fontSize + 'px'}">
    {{text}}
  </div>
</template>

<script>
  export default {
    name: "VTitle",
    props: ['text', 'color', 'fontSize']
  }
</script>

<style lang="scss">
  .custom-title {
    font-weight: bold;
    line-height: 1.14;
    color: #333e51;
  }
  @media screen and (max-width: 1024px){
    .custom-title {
      font-size: 24px !important;
    }
  }
</style>