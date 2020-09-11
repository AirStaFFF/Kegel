<template>
  <div
    class="new-kegel-navbar"
    v-click-outside="outSideClick"
    id="navigate"
    :class="visible === true ? 'showNav' :
            visible === false ? 'hideNav' :
            'hideItems'">
    <div
      class="burger-img"
      @click="changeVisible(true)"
      v-if="!visible">
      <img src="@/assets/images/burger.png" alt="">
    </div>
    <div
      class="cross-img"
      @click="changeVisible(false)"
      v-else-if="visible === true">
      <img src="@/assets/images/close-burger.png">
    </div>
    <div class="nav-logo">
      <img
        src="@/assets/images/header-logo.png"
        class="nav-logo_img">
    </div>
    <div class="nav-items">
      <div
        v-for="(navItem, id) in navbar"
        :key="id"
        class="nav-item">
        <a
          v-scroll-to="navItem.link"
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
    data() {
      return {
        visible: null
      }
    },
    computed: {
      ...mapState('kegel', ['navbar'])
    },
    methods: {
      outSideClick() {
        this.visible = false
      },
      changeVisible(type) {
        this.visible = type
      },
    }
  }
</script>

<style lang="scss">
  .new-kegel-navbar {
    position: absolute;
    padding-left: 321px;
    padding-right: 321px;
    top: 16px;
    left: 0;
    padding-top: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    .cross-img, .burger-img {
      display: none;
    }
    .nav-logo {
      width: 48px;
      height: 48px;
      margin-right: 48px;
      img {
        width: 100%;
      }
    }
    .nav-items {
      display: flex;
      align-items: center;
      .nav-item {
        margin-right: 48px;
        &:last-child {
          margin-right: 0;
        }
        .nav-link {
          padding: 0;
          line-height: 1.81;
          color: #ffffff;
        }
      }
    }
  }
  @media screen and (max-width: 767px){
    .hideItems {
      .nav-items {
        display: none !important;
      }
    }
    .showNav {
      .nav-items {
        animation-name: bgIn;
        animation-duration: 1s;
        animation-direction: alternate;
        animation-fill-mode: forwards;
        .nav-item {
          animation-name: textIn;
          animation-duration: .5s;
          animation-direction: alternate;
          animation-fill-mode: forwards;
          animation-delay: 1s;
        }
      }
    }
    .hideNav {
      .nav-items {
        animation-name: bgOut;
        animation-duration: 1s;
        animation-direction: alternate;
        animation-fill-mode: forwards;
        animation-delay: .5s;
        .nav-item {
          animation-name: textOut;
          animation-duration: .5s;
          animation-direction: alternate;
          animation-fill-mode: forwards;
        }
      }
    }
    .new-kegel-navbar {
      align-items: start;
      z-index: 1111;
      padding-top: 0;
      .cross-img, .burger-img {
        display: block;
        position: absolute;
        z-index: 11111111;
      }
      .burger-img {
        margin-top: 12px;
        width: 20px;
        height: 14px;
        img {
          width: 20px;
          height: 14px;
        }
      }
      .cross-img {
        margin-top: 12px;
        width: 15px;
        height: 15px;
        margin-left: 2px;
        img {
          width: 15px;
          height: 15px;
        }
      }
      .nav-logo {
        margin-left: auto;
        position: relative;
        margin-right: auto;z-index: 111111;
      }
      .nav-items {
        background-image: linear-gradient(to top, rgba(#1f242d, 1), rgba(#111113, 1));
        position: absolute;
        flex-direction: column;
        top: -16px;
        padding-top: 100px;
        padding-bottom: 24px;
        left: 0;
        justify-content: center;
        text-align: center;
        z-index: 111;
        width: 100%;
        .nav-item {
          margin-right: 0;
          opacity: 0;

        }
      }
    }
  }
  @keyframes bgIn {
    from {
      padding-bottom: 0;
      height: 0px;
      padding-top: 0;
    }
    to {
      padding-top: 100px;
      height: 300px;
      padding-bottom: 24px;
      opacity: 0.95;
    }
  }
  @keyframes bgOut {
    from {
      padding-top: 24px;
      padding-bottom: 24px;
      height: 300px;
      opacity: 0.95;
    }
    to {
      padding-bottom: 0;
      padding-top: 0;
      height: 0px;
    }
  }
  @keyframes textIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes textOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @media screen and (max-width: 1650px) {
    .new-kegel-navbar {
      padding: 32px 191px 0;
    }
  }
  @media screen and (max-width: 1024px) {
    .new-kegel-navbar {
      padding: 32px 64px 0;
    }
  }
  @media screen and (max-width: 768px) {
    .new-kegel-navbar {
      padding: 32px 58px 0;
    }
  }
  @media screen and (max-width: 767px) {
    .new-kegel-navbar {
      padding: 0px 48px 0;
    }
  }
  @media screen and (max-width: 568px) {
    .new-kegel-navbar {
      padding: 0 48px;
    }
  }
</style>