<template>
  <button
    class="custom-btn"
    @click="$emit('on-btn-click')">
    <span>
      {{ text }}
    </span>
  </button>
</template>

<script>
  export default {
    name: "VButton",
    props: ['text']
  }
</script>

<style lang="scss">
  .custom-btn {
    width: 247px;
    height: 45px;
    border-radius: 75px;
    box-shadow: 0 0 60px 0 rgba(255, 0, 0, 0.54);
    border: none;
    background-color: #fa2724;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 16px;
  }
</style>