<template>
  <div class="kegel-pre-footer" :style="{backgroundImage: bgImage}">
    <div class="pre-footer-left_block">
      <v-border-title
        :font-size="48"
        :text="'Start Boosting Your Sex Life Now!'"
      ></v-border-title>
      <v-button
        :text="'Get 7 days for free'"
      ></v-button>
    </div>
    <div class="pre-footer-right_block">
      <img
        class="pre-footer-image"
        :style="{width: pngWidth}"
        src="@/assets/images/16.png">
    </div>
  </div>
</template>

<script>
  import VBorderTitle from '@/components/VBorderTitle';
  import VButton from '@/components/VButton';

  export default {
    name: "KegelPreFooter",
    components: {
      VBorderTitle,
      VButton
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
        if(document.documentElement.clientWidth >= 1024) {
          this.pngWidth = document.documentElement.clientWidth / 2.8 + 'px';
        } else {
          this.pngWidth = document.documentElement.clientWidth / 1.5 + 'px';
        }

        if(document.documentElement.clientWidth >= 1650) {
          this.bgImage = 'url(' + require('@/assets/images/footer-xxl.png') + ')'
        } else if (document.documentElement.clientWidth >= 1025) {
          this.bgImage = 'url(' + require('@/assets/images/footer-xl.png') + ')'
        } else if (document.documentElement.clientWidth >= 376) {
          this.bgImage = 'url(' + require('@/assets/images/footer-lg.png') + ')'
        } else {
          this.bgImage = 'url(' + require('@/assets/images/footer-sm.png') + ')'
        }
      },
    },
    beforeDestroy() {
      removeEventListener('resize', this.handlerScrollY)
    },
  }
</script>

<style lang="scss">
  .kegel-pre-footer {
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    background-position: bottom;
    max-height: 790px;
    margin-top: 230px;
    padding-left: 321px;
    padding-right: 242px;
    background-position-y: 0px;
    justify-content: space-between;
    .pre-footer-left_block {
      max-width: 445px;
      .v-border-title {
        .title {
          color: #fff;
        }
      }
      .custom-btn {
        margin-top: 48px;
      }
    }
    .pre-footer-right_block {
      .pre-footer-image {
        position: relative;
        top: -70px;
        max-width: 731px;
      }
    }
  }
  @media screen and (max-width: 1650px){
    .kegel-pre-footer {
      padding-left: 128px;
      padding-right: 119px;
    }
  }
  @media screen and (max-width: 1024px){
    .kegel-pre-footer {
      padding-left: 64px;
      padding-right: 64px;
      max-height: 445px;
      margin-top: 89px;
      .pre-footer-left_block {
        max-width: 300px;
        .v-border-title {
          .title {
            font-size: 32px !important;
            color: #fff;
          }
        }
      }
      .pre-footer-right_block {
        .pre-footer-image {
          position: relative;
          top: -70px;
          width: 100% !important;
          max-width: 431px;
        }
      }
    }
  }
  @media screen and (max-width: 868px){
    .kegel-pre-footer {
      .pre-footer-left_block {
      }
      .pre-footer-right_block {
        .pre-footer-image {
          position: relative;
          top: -70px;
          width: 100% !important;
          max-width: 331px;
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .kegel-pre-footer {
      padding-left: 48px;
      padding-right: 48px;
      .pre-footer-left_block {
      }
      .pre-footer-right_block {
        .pre-footer-image {
          position: relative;
          top: -70px;
          width: 100% !important;
          max-width: 331px;
        }
      }
    }
  }
  @media screen and (max-width: 734px){
    .kegel-pre-footer {
      flex-wrap: wrap-reverse;
      margin-top: 280px;
      padding-bottom: 71px;
      .pre-footer-left_block {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        .red-border_block {
          margin-left: auto;
          margin-right: auto;
          margin-top: 24px;
        }
        .custom-btn {
          margin-left: auto;
          margin-right: auto;
        }
      }
      .pre-footer-right_block {
        width: 100%;
        display: flex;
        justify-content: center;
        .pre-footer-image {
          top: 0px;
          width: 100% !important;
          max-width: 331px;
        }
      }
    }
  }
  @media screen and (max-width: 400px){
    .kegel-pre-footer {
      padding-left: 48px;
      padding-right: 48px;
      margin-top: 220px;
      .pre-footer-right_block {
        .pre-footer-image {
          right:  -5%;
        }
      }
    }
  }
</style>