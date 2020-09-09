<template>
  <div class="kegel-navbar">
    <div class="nav-logo">
      <img src="@/assets/images/header-logo.png" alt="" class="nav-logo_img">
    </div>
    <div class="nav-items">
      <div
        v-for="(navItem, id) in navbar"
        :key="id"
        class="nav-item">
        <a
          :href="navItem.link"
          class="nav-link">
          {{ navItem.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "Navbar",
    computed: {
      ...mapState('kegel', ['navbar'])
    }
  }
</script>

<style lang="scss">
  .kegel-navbar {
    display: flex;
    position: absolute;
    top: 0;
    padding-top: 48px;
    .nav-logo {
      margin-right: 32px;
      .nav-logo_img {
        width: 48px;
        height: 48px;
      }
    }
    .nav-items {
      display: flex;
      align-items: center;
      .nav-item {
        .nav-link {
          line-height: 1.81;
          color: #fff;
        }
      }
    }
  }
  @media screen and (max-width: 1024px){
    .kegel-navbar {
      left: 50%;
      margin-left: -24px;
      padding-top: 16px;
      .nav-logo {
        margin-right: 0px;
      }
      .nav-items {
        display: none;
      }
    }
  }
</style>