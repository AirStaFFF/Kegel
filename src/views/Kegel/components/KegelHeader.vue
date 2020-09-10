<template>
  <div
    :style="{'background-image': bgImage}"
    class="kegel-header">
    <kegel-navbar/>
    <div class="header-left_block d-flex align-items-center">
      <div>
        <v-title
          :color="'#fff'"
          :fontSize="48"
          :text="'Dr. KEGEL: MEN’S SEXUAL HEALTH'"/>
        <v-discription
          :color="'#cacbce'"
          :fontSize="22"
          :text="'Improve Sexual Performance Without Pills.<br> Try #1 app for men of any age.'"/>
        <v-button
          :text="'Get 7 days for free'"/>
      </div>
    </div>
    <div class="header-right_block">
      <picture>
        <source  :style="{width: pngWidth}" media="(min-width: 768px)" class="header-right_block-img" srcset="@/assets/images/1.png">
        <img  :style="{width: pngWidth}" src="@/assets/images/mobile-header-1.png" class="header-right_block-img" alt="">
      </picture>
    </div>
  </div>
</template>

<script>
  import KegelNavbar from '@/views/Kegel/components/KegelNavbar';
  import VButton from '@/components/VButton';
  import VTitle from '@/components/VTitle';
  import VDiscription from '@/components/VDiscription';
  export default {
    name: "KegelHeader",
    components: {
      KegelNavbar,
      VButton,
      VTitle,
      VDiscription
    },
    data() {
      return {
        pngWidth: null,
        bgImage: null
      }
    },
    created() {
      this.handlerScrollY()
      addEventListener('resize', this.handlerScrollY)
    },
    methods: {
      handlerScrollY() {
        if(document.documentElement.clientWidth >=850) {
          this.pngWidth = document.documentElement.clientWidth / 2.6 + 'px';
        } else {
          this.pngWidth = document.documentElement.clientWidth / 2.3 + 'px';
        }
        if(document.documentElement.clientWidth >= 1650) {
          this.bgImage = 'url(' + require('@/assets/images/header-xxl.png') + ')'
        } else if (document.documentElement.clientWidth >= 1440) {
          this.bgImage = 'url(' + require('@/assets/images/header-xl.png') + ')'
        } else if (document.documentElement.clientWidth >= 850) {
          this.bgImage = 'url(' + require('@/assets/images/header-lg.png') + ')'
        } else if (document.documentElement.clientWidth >= 568) {
          this.bgImage = 'url(' + require('@/assets/images/header-md.png') + ')'
        } else {
          this.bgImage = 'url(' + require('@/assets/images/header-sm.png') + ')'
        }
      }
    },
    beforeDestroy() {
      removeEventListener('resize', this.handlerScrollY)
    },
  }
</script>

<style lang="scss">
  .kegel-header {
    display: flex;
    padding-top: 112px;
    padding-left: 321px;
    padding-right: 235px;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: -45px;
    .header-left_block {
      div {
        margin-top: -100px;
      }
      width: 40%;
      .custom-title {
        max-width: 450px;
      }
      .custom-discription {
        margin-top: 48px;
      }
      .custom-btn {
        margin-top: 48px;
      }
    }
    .header-right_block {
      width: 60%;
      position: relative;
      display: flex;
      justify-content: flex-end;
      &-img {
        max-width: 725px;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 1650px){
    .kegel-header {
      padding-left: 191px;
      padding-right: 165px;
    }
  }
  @media screen and (max-width: 1250px){
    .kegel-header {
      padding-right: 32px;
      padding-left: 64px;
      background-position-y:0px;
      .header-left_block {
        width: 45%;
        margin-top: 100px;
        .custom-title {
          font-size: 32px !important;
          max-width: 300px;
        }
        .custom-discription {
          font-size: 18px !important;
        }
      }
      .header-right_block {
        width: 55%;
        right: 0 !important;
        top: 10px;
        .header-right_block-img {
          /*max-width: 415px;*/
          /*width: 100% !important;*/
        }
      }
    }
  }
  @media screen and (max-width: 1024px){
    .kegel-header {
      .header-left_block {
        .custom-discription {
          margin-top: 16px;
        }
      }
    }
  }
  @media screen and (max-width: 600px){
    .kegel-header .header-right_block-img {
    }
    .kegel-header {
      padding-left: 58px;
      padding-right: 58px;
      padding-top: 99px;
      background-size: cover;
      flex-wrap: wrap-reverse;
      background-position-y: 0px;
      .header-left_block {
        margin-top: 0;
        width: 100%;
        justify-content: center;
        div {
          margin-top: 0;
          .custom-btn {
            margin-left: auto;
            margin-right: auto;
            margin-top: 46px !important;
          }
          .custom-title {
            font-size: 32px !important;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            /*margin-top: 45px !important;*/
          }
          .custom-discription {
            font-size: 18px !important;
            margin-top: 16px !important;
            text-align: center;
          }
        }
      }
      .header-right_block {
        width: 100%;
        justify-content: center;
        right: -25px;
      }
    }
  }
  @media screen and (max-width: 767px){
    .kegel-header {
      padding: 99px 0 90px;
      .header-left_block {
        padding-left: 48px;
        padding-right: 48px;
      }
      .header-right_block {
        max-width: 375px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  @media screen and (max-width: 568px){
    .kegel-header {
      padding: 99px 0px 90px;
      .header-right_block {
        right: 0 !important;
        .header-right_block-img {
          width: 100% !important;
        }
      }
    }
  }
</style>