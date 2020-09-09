<template>
  <div class="d-flex red-border_block" :class="{'justify-content-center': textCenter}">
    <div class="v-border-title">
      <div class="red-border"></div>
      <div
        :style="{fontSize: fontSize + 'px'}"
        class="title">{{text}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VBorderTitle",
    props: ['text', 'fontSize', 'textCenter']
  }
</script>

<style lang="scss">
  .v-border-title {
    .red-border {
      width: 50px;
      height: 4px;
      background-color: #fa2724;
    }
    .title {
      font-weight: bold;
      color: #333e51;
      width: 100%;
    }
  }
  @media screen and (max-width: 1024px){
    .v-border-title {
      .title {
        text-align: left;
        font-size: 24px !important;
      }
    }
  }
  @media screen and (max-width: 568px){
    .justify-content-center.red-border_block {
      justify-content: flex-start !important;
      padding-left: 48px;
      padding-right: 48px;
    }
    .v-border-title {
      .title {
        text-align: left;
        font-size: 24px !important;
      }
    }
  }
</style>