<template>
  <Component
    :item="item"
    :reverse="reverse"
    :is="item.type"/>
</template>

<script>
  import VButton from '@/components/VButton';
  import VTitle from '@/components/VTitle';
  export default {
    name: "KegelProgrammItem",
    props: {
      reverse: {
        type: Boolean
      },
      item: {
        type: Object
      }
    },
    components: {
      VButton,
      VTitle
    }
  }
</script>

<style lang="scss">

</style>