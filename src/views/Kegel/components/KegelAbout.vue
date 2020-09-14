<template>
  <div class="what-is_block d-flex align-items-center" id="Overview">
    <div class="what-is_block_img">
      <img src="@/assets/images/2.png" alt="" class="w-100">
    </div>
    <div class="what-is_block_info">
      <v-border-title
        :font-size="32"
        :text="'What is Dr. Kegel app?'"/>
      <div class="what-is_block-text">
        Kegel exercises are simple and effective exercises aimed at strengthening the Pelvic Floor muscles. This helps to prevent and deal with Premature Ejaculation, Erectile Dysfunction and other sexual and overall health issues. We have packed Kegel exercises into a systematic app to help men keep their health in a perfect condition.
      </div>
    </div>
  </div>
</template>

<script>
  import VBorderTitle from '@/components/VBorderTitle';
  export default {
    name: "KegelAbout",
    components: {
      VBorderTitle
    }
  }
</script>

<style lang="scss">
  .w-100 {
    width: 100% !important;
  }
  .what-is_block {
    padding-left: 321px;
    padding-right: 321px;
    justify-content: space-between;
    &-text {
      font-size: 16px;
      line-height: 1.81;
      color: #5a6175;
      margin-top: 32px;
    }
    .what-is_block_img {
      width: 60%;
      max-width: 704px;
      img {
        max-width: 704px;
      }
    }
    .what-is_block_info {
      width: 40%;
      padding-left: 120px
    }
  }
  @media screen and (max-width: 1650px){
    .what-is_block {
      padding-left: 191px;
      padding-right: 191px;
    }
  }
  @media screen and (max-width: 1440px){
    .what-is_block {
      padding-left: 90px;
      padding-right: 128px;
      .what-is_block_info {
        width: 40%;
        padding-left: 95px;
      }
    }
  }
  @media screen and (max-width: 1024px){
    .what-is_block {
      padding-left: 38px;
      padding-right: 58px;
      .what-is_block_info {
        width: 40%;
        padding-left: 35px;
      }
    }
  }
  @media screen and (max-width: 1023px){
    .what-is_block {
      padding-left: 48px;
      padding-right: 48px;
      flex-wrap: wrap;

      .what-is_block_img {
        width: 100%;
        max-width: 404px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 51px;
        img {
          max-width: 704px;
        }
      }
      &-text {
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
      }
      .what-is_block_info {
        width: 100%;
        padding-left: 0px;
        .red-border_block {
          justify-content: center;
          margin-top: 32px;
        }
      }
    }
  }
  @media screen and (max-width: 568px){
    .what-is_block {
      .what-is_block_info {
        .red-border_block {
          justify-content: start;
        }
      }
    }
  }
</style>