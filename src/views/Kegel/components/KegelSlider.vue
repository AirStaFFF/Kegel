<template>
  <div class="slider_block">
    <v-border-title
      :font-size="48"
      :text="'Scientific Facts for Kegel Exercises'"/>
    <div class="custom-carousel">
      <hooper>
        <slide
          v-for="(slide) in sliders"
          :key="slide.id">
          <div class="slide-text">{{ slide.text }}</div>
          <div class="slide-link-block">
            <img :src="slide.info.img" alt="" class="link-block_img">
            <div class="link-block_link">
              <span class="text">{{ slide.info.title }}</span>
              <span class="link">{{ slide.info.discription }}</span>
            </div>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>
  </div>
</template>

<script>
  import VBorderTitle from '@/components/VBorderTitle';
  import {
    Pagination as HooperPagination,
    Navigation as HooperNavigation,
    Hooper,
    Slide
  } from 'hooper';
  import 'hooper/dist/hooper.css';
  import { mapState } from 'vuex';
  export default {
    name: "KegelSlider",
    components: {
      VBorderTitle,
      Hooper,
      Slide,
      HooperPagination,
      HooperNavigation
    },
    data() {
      return {
        slide: 0
      }
    },
    computed: {
      ...mapState('kegel', ['sliders'])
    }
  }
</script>

<style lang="scss">
  .slider_block {
    margin-top: 133px;
    padding-left: 456px;
    padding-right: 456px;
    .red-border_block {
      justify-content: center;
    }
    .custom-carousel {
      margin-top: 64px;
      section, button {
        outline: none !important;
      }
      .hooper {
        max-width: 807px;
        min-height: 315px;
        border-radius: 21px;
        box-shadow: 0 50px 150px 0 rgba(96, 106, 140, 0.11);
        background-color: #ffffff;
        margin-left: auto;
        margin-right: auto;
        .hooper-slide {
          padding: 48px 100px 45px;
          max-width: 807px;
          width: 100% !important;
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;
           .slide-text {
             width: 100%;
             line-height: 1.86;
             color: #5a6175;
           }
           .slide-link-block {
             display: flex;
             height: 64px;
             .link-block_img {
               width: 64px;
               height: 64px;
             }
             .link-block_link {
               margin-left: 20px;
               padding-left: 20px;
               border-left: 1px solid #fa2724;
               display: flex;
               flex-wrap: wrap;
               align-items: center;
               .text {
                 width: 100%;
                 font-weight: bold;
                 color: #333e51;
               }
               .link {
                 width: 100%;
                 color: #5a6175;
               }
             }
          }
        }
        .hooper-prev {
          left: -128px;
        }
        .hooper-next {
          right: -128px;
        }
        .hooper-next, .hooper-prev {
          width: 57px;
          height: 57px;
          box-shadow: 0 20px 50px 0 rgba(96, 106, 140, 0.11);
          background-color: #ffffff;
          border-radius: 50%;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-arrowLeft {
          }
          .icon-arrowRight {
          }
          .icon-arrowRight, .icon-arrowLeft {
            height: 42px !important;
            width: 42px !important;
          }
        }
        .hooper-prev.is-disabled, .hooper-next.is-disabled {
          background: #fff;
          opacity: 0.5;
        }
        .hooper-indicator {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: #cacbce;
          margin: 0 8px;
          &.is-active {
            background-color: #fa2724;
          }
        }
        .hooper-pagination {
          bottom: -80px !important;
        }
      }
    }
  }
  @media screen and (max-width: 1650px){
    .slider_block {
      padding-left: 356px;
      padding-right: 356px;
    }
  }
  @media screen and (max-width: 1440px){
    .slider_block {
      margin-top: 133px;
      padding-left: 156px;
      padding-right: 156px;
    }
  }
  @media screen and (max-width: 1250px){
    .slider_block {

    }
  }
  @media screen and (max-width: 1024px){
    .slider_block {
      margin-top: 69px;
    }
  }
  @media screen and (max-width: 768px){
    .slider_block {

    }
  }
  @media screen and (max-width: 568px){
    .slider_block {
      padding-right: 48px;
      padding-left: 48px;
      margin-top: 84px;
      .custom-carousel {
        .hooper {
          .hooper-slide {
            padding: 24px;
          }
          .hooper-prev {
            display: none !important;
          }
          .hooper-next {
            display: none !important;
          }
          .hooper-pagination {
            .hooper-indicator {
              margin: 0 4px;
              height: 8px;
              width: 8px;
            }
          }
        }
      }
    }
  }
</style>