<template>
  <a
    class="custom-btn"
    target="_blank"
    href="https://apps.apple.com/us/app/dr-kegel-for-mens-health/id1470065487">
    <span>
      {{ text }}
    </span>
  </a>
</template>

<script>
  export default {
    name: "VButton",
    props: ['text']
  }
</script>

<style lang="scss">
  .custom-btn {
    text-decoration: none;
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
    transition: .5s;
  }
  a.custom-btn:link, a.custom-btn:active, a.custom-btn:visited{
    color: #fff;
    text-decoration: none;
  }
  a.custom-btn:hover {
    background-color: #ff4c49;
  }
  a.custom-btn:active {
    background-color: #d81e1b;
  }
</style>