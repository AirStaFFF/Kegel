<template>
  <div class="application-features-title_block">
    <div class="max-width-800">
      <v-title
        :font-size="32"
        :text="item.titleText"/>
      <v-button
        :text="item.buttonText"/>
    </div>
  </div>
</template>

<script>
  import VTitle from '@/components/VTitle';
  import VButton from '@/components/VButton';
  export default {
    name: "TitleBlock",
    props: ['item'],
    components: {
      VButton,
      VTitle
    }
  }
</script>

<style lang="scss">
  .application-features-title_block {
    display: flex; justify-content: center;
    margin-left: auto;
    margin-right: auto;
    .custom-title {
      text-align: center;
      line-height: 1.81;
    }
    .custom-btn {
      margin-top: 24px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      z-index: 111;
    }
    .max-width-800 {
      max-width: 800px;
      position: relative;
      padding-top: 188px;
      padding-bottom: 188px;
      z-index: 111;
    }
    .max-width-800:before {
      content: '';
      background: url("../../assets/images/group-131.png");
      background-size: 85%;
      background-repeat: no-repeat;
      position: absolute;
      height: 100%;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      left: 7.5%;
      top: 0px;
    }
  }
  @media screen and (max-width: 1024px){
    .application-features-title_block {
      padding-left: 48px;
      padding-right: 48px;
      .custom-title {
        font-size: 24px !important;
        color: #333e51;
      }
      .max-width-800 {
        max-width: 606px;
        padding-top: 80px;
        padding-bottom: 80px;
        z-index: 11111222;
      }
      .max-width-800:before {
        background-size: 100%;
        background-position: center;
        height: 100%;
        width: 100%;
        max-width: 460px;
        left: 73px;
        top: -20px;
      }
    }
  }
  @media screen and (max-width: 768px){
    .application-features-title_block {
      margin-top: 34px;
    }
  }
  @media screen and (max-width: 700px){
    .block-3.application-features-item {
      margin-top: 52px !important;
    }
    .application-features-title_block {
      margin-top: 34px;
      .max-width-800 {
        max-width: 606px;
        padding-top: 0px;
        padding-bottom: 0px;
        z-index: 11111222;
      }
      .max-width-800:before {
        display: none;
        background: unset;
      }
    }
  }
</style>