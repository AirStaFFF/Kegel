<template>
  <div
    :class="[{'flex-deraction': reverse}, item.class]"
    class="application-features-item">
    <div class="item-left-block">
      <img
        :src="item.titleImg"
        class="feature-block_title-img">
      <v-title
        :font-size="32"
        :text="item.title"
      ></v-title>
      <div
        v-for="(text, id) in item.textBlocks"
        :key="id"
        class="text-block">
        <div class="d-flex align-items-center">
          <img
            :src="text.img"
            v-if="text.img"
            class="text-block_small-img">
          <div class="text-block_title">{{text.title}}</div>
        </div>
        <div
          class="text-block_text"
          v-html="text.text"
        ></div>
        <v-button
          v-if="text.buttonText"
          :text="text.buttonText"
        ></v-button>
      </div>
    </div>
    <div class="item-right-block">
      <img
        v-if="item.manyImg"
        :src="img"
        class="application-main-img"
        alt="">
      <img
        v-else
        :src="item.mainImg"
        class="application-main-img">

    </div>
  </div>
</template>

<script>
  import VButton from '@/components/VButton';
  import VTitle from '@/components/VTitle';
  export default {
    name: "ImageBlock",
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
    },
    data() {
      return {
        img: null
      }
    },
    created() {
      this.handlerScrollY()
      addEventListener('resize', this.handlerScrollY)
    },
    methods: {
      handlerScrollY() {
        if(document.documentElement.clientWidth >= 1650) {
          this.img = require('@/assets/images/14-1.png')
        } else if (document.documentElement.clientWidth >= 1240) {
          this.img = require('@/assets/images/14-2.png')
        } else if (document.documentElement.clientWidth >= 769) {
          this.img = require('@/assets/images/14-3.png')
        } else if (document.documentElement.clientWidth >= 568) {
          this.img = require('@/assets/images/14-4.png')
        } else {
          this.img = require('@/assets/images/14-5.png')
        }
      },
    },
    beforeDestroy() {
      removeEventListener('resize', this.handlerScrollY)
    },
  }
</script>

<style lang="scss">
  .block-1, .block-2, .block-4  {
    padding-left: 321px;
    padding-right: 321px;
  }
  .block-3.application-features-item {
    padding-left: 321px;
    .item-right-block {
      max-width: 1500px;
      .application-main-img {
        max-width: 1500px;
        width: 100%;
      }
    }
  }
  .block-1, .block-3 {
    .item-left-block {
      margin-right: 108px;
    }
  }
  .block-2, .block-4 {
    .item-right-block {
      margin-right: 108px;
    }
  }
  .block-2 {
    margin-top: 115px;
  }
  .block-3 {
    margin-top: 0px;
  }
  .block-4 {
    margin-top: 80px;
  }
  .application-features-item {

    display: flex;
    align-items: center;
    .item-left-block {
      width: 35%;
      .feature-block_title-img {
        max-width: 292px;
        width: 100%;
      }
      .text-block {
        margin-top: 32px;
        .text-block_small-img {
          height: 24px;
          margin-right: 20px;
        }
        .text-block_title {
          font-size: 16px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.81;
          letter-spacing: normal;
          color: #5a6175;
        }
        .text-block_text {
          line-height: 1.81;
          color: #5a6175;
          margin-top: 16px;
        }
        .custom-btn {
          margin-top: 48px;
        }
      }
    }
    .item-right-block {
      width: 65%;
      max-width: 750px;
      .application-main-img {
        max-width: 750px;
        width: 100%;
      }
    }
  }
  .flex-deraction {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 1650px){
    .block-1, .block-2, .block-4 {
      padding-left: 220px;
      padding-right: 220px;
    }
    .block-3 {
      padding-left: 220px;
    }
    .block-1, .block-3 {
      .item-left-block {
        margin-right: 55px;
      }
    }
    .block-2, .block-4 {
      .item-right-block {
        margin-right: 55px;
      }
    }
  }
  @media screen and (max-width: 1440px){
    .block-1, .block-2, .block-4 {
      padding-left: 128px;
      padding-right: 128px;
    }
    .block-3.application-features-item {
      padding-left: 128px;
    }
    .block-1, .block-3 {
      .item-left-block {
        margin-right: 14px;
      }
    }
    .block-2, .block-4 {
      .item-right-block {
        margin-right: 14px;
      }
    }
  }
  @media screen and (max-width: 1250px){
    .block-1, .block-2, .block-4 {
      padding-left: 80px;
      padding-right: 80px;
    }
    .block-3.application-features-item {
      padding-left: 80px;
    }
    .block-1, .block-3 {
      .item-left-block {
        margin-right: 24px;
      }
    }
    .block-2, .block-4 {
      .item-right-block {
        margin-right: 24px;
      }
    }
    .application-features-item {
      .item-left-block {
        width: 45%;
      }
      .item-right-block {
        width: 55%;
        max-width: 600px;
        .application-main-img {
          max-width: 600px;
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 1024px){
    .block-1, .block-2, .block-4 {
      padding-left: 64px;
      padding-right: 64px;
    }
    .block-3.application-features-item {
      padding-left: 64px;
    }
    .block-1, .block-3 {
      .item-left-block {
        margin-right: 24px;
      }
    }
    .block-2, .block-4 {
      .item-right-block {
        margin-right: 24px;
      }
    }
    .application-features-item {
      .item-left-block {
        width: 45%;
      }
      .item-right-block {
        width: 55%;
        max-width: 450px;
        .application-main-img {
          max-width: 450px;
          width: 100%;
        }
      }
    }
    .block-2 {
      margin-top: 64px;
    }
  }
  @media screen and (max-width: 968px){
    .block-1, .block-2, .block-4 {
      padding-left: 48px;
      padding-right: 48px;
    }
    .block-3.application-features-item {
      padding-left: 48px;
    }
    .application-features-item {
      margin-top: 24px !important;
      .item-left-block {
        .feature-block_title-img {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .block-1, .block-2, .block-4 {
      padding-left: 0px;
      padding-right: 0px;
      .custom-title {
        font-size: 24px !important;
      }
    }
    .block-3.application-features-item {
      padding-left: 0;
      .custom-title {
        font-size: 24px !important;
      }
    }
    .flex-deraction {
      flex-direction: unset;
    }
    .application-features-item {
      flex-wrap: wrap-reverse;
      margin-top: 10px !important;
      .item-left-block {
        margin-top: 24px;
        margin-left: 0;
        width: 100%;
        padding-left: 48px;
        padding-right: 48px;
        .feature-block_title-img {
          display: none;
        }
      }
      .item-right-block {
        width: 100%;
        max-width: 450px;
        margin: 0 auto;
        .application-main-img {
          max-width: 450px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          display: block;
        }
      }
    }
    .block-2 {
      margin-top: 64px;
    }
    .block-1, .block-3 {
      .item-left-block {
        margin-right: auto;
      }
    }
    .block-2, .block-4 {
      .item-right-block {
        margin-right: auto;
      }
    }
    .application-features-item .item-left-block .text-block .custom-btn {
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>