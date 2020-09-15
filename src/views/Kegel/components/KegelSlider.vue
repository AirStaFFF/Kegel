<template>
  <div class="slider_block">
    <v-border-title
      :font-size="48"
      :text="'Scientific Facts for Kegel Exercises'"/>
    <div class="custom-carousel">
      <vue-slick-carousel
        class="slider-swipe hooper"
        :autoplay="true"
        :autoplaySpeed="5000"
        :arrows="true"
        :adaptiveHeight="true"
        :dots="true">
        <template #prevArrow="arrowOption">
          <div
            :style="[{color: left ? '#fa2724' : '#333E51'}]"
            class="custom-prew-arrow">
            <prev-arrow />
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div
            :style="[{color: right ? '#fa2724' : '#333E51'}]"
            class="custom-next-arrow">
            <next-arrow/>
          </div>
        </template>
        <div
          v-for="(slide) in sliders"
          :key="slide.id"
          class="hooper-slide">
          <div class="slide-text">{{ slide.text }}</div>
          <a :href="slide.info.link"
             target="_blank"
             class="slide-link-block">
            <img :src="slide.info.img" alt="" class="link-block_img">
            <div class="link-block_link">
              <span class="ellipse"><span class="text">{{ slide.info.title }}</span></span>
              <div
                class="ellipse">
                <span class="link">{{ slide.info.discription }}</span>
              </div>
            </div>
          </a>
        </div>
      </vue-slick-carousel>
    </div>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import VBorderTitle from '@/components/VBorderTitle';
  import PrevArrow from '@/components/icons/PrevArrow';
  import NextArrow from '@/components/icons/NextArrow';
  import { mapState } from 'vuex';
  export default {
    name: "KegelSlider",
    components: {
      VBorderTitle,
      VueSlickCarousel,
      NextArrow,
      PrevArrow,
    },
    data() {
      return {
        slide: 0,
        left: false,
        right: false,
        prevSlide: 0
      }
    },
    methods: {
    },
    computed: {
      ...mapState('kegel', ['sliders']),
      getDevice() {
        return document.documentElement.clientWidth > 1024 ? false : true
      }
    },
  }
</script>

<style lang="scss">
  .custom-prew-arrow {
    font-size: 25px;
    color: #000;
    &:before {
      display: none;
    }
  }
  .custom-next-arrow {
    font-size: 25px;
    color: #000;
    &:before {
      display: none;
    }
  }
  .hooper {
    height: 100%;
    outline: none;
    .slick-prev, .slick-next {
      width: 57px;
      height: 57px;
      box-shadow: 0 20px 50px 0 rgba(96, 106, 140, 0.11);
      background-color: #ffffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .slick-prev {
      left: -128px;
    }
    .slick-next {
      right: -128px;
    }
    .slick-prev:before, .slick-next:before {
      font-size: 57px;
    }
    .slick-dots {
      bottom: -75px;
      li {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #cacbce;
        margin: 0 8px;
        &.slick-active {
          background-color: #fa2724;
        }
        button:before {
          font-size: 0;
        }
      }
    }
    .slick-list {
      height: inherit;
      min-height: inherit;
      .slick-track {
        height: inherit;
        min-height: inherit;
        .slick-slide {
          height: inherit;
          min-height: inherit;
          & > div {
            height: inherit;
            min-height: inherit;
          }
          .hooper-slide {
            height: inherit;
            min-height: inherit;
            display: flex !important;
          }
        }
      }
    }
  }
  .slide-link-block {
    text-decoration: none;
    position: relative;
    z-index:11111111;
    &:hover {
      text-decoration: none;
    }
  }
  .slider_block {
    margin-top: 133px;
    padding-left: 486px;
    padding-right: 486px;
    .red-border_block {
      justify-content: center;
    }
    .custom-carousel {
      margin-top: 64px;
      position: relative;
      /*&:after {*/
      /*  content: '';*/
      /*  height: 100%;*/
      /*  width: 100%;*/
      /*  position: absolute;*/
      /*  top: 0;*/
      /*  left: 0;*/
      /*  z-index: 111;*/
      /*}*/
      section, button {
        outline: none !important;
      }
      .hooper {
        max-width: 807px;
        border-radius: 21px;
        min-height: 315px;
        box-shadow: 0 50px 150px 0 rgba(96, 106, 140, 0.11);
        background-color: #ffffff;
        margin-left: auto;
        margin-right: auto;
        overflow: visible;
        position: relative;
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
             overflow: hidden;
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
               overflow-y: hidden;
               .ellipse {
                 width: 100%;
                 overflow: hidden;
                 display: inline-block;
                 text-decoration: none;
                 text-overflow: ellipsis;
                 white-space: nowrap;
                 line-height: 2;
               }
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
      padding-left: 148px;
      padding-right: 148px;
    }
  }
  @media screen and (max-width: 1250px){
    .slider_block {

    }
  }
  @media screen and (max-width: 1024px){
    .slider_block {
      margin-top: 69px;
      padding-left: 64px;
      padding-right: 64px;
      .custom-carousel {
        &:before {
          display: none;
        }
        .hooper {
          .hooper-slide {
            padding: 48px 62px 45px;
          }
          .slick-prev {
            display: none !important;
          }
          .slick-next {
            display: none !important;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .slider_block {
      padding-left:48px;
      padding-right: 48px;
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
            .slide-link-block {
              height: 60px;
              margin-top: 32px;
              .link-block_img {
                height: 60px;
                width: 60px;
              }
            }
          }
          .hooper-prev {
            display: none !important;
          }
          .hooper-next {
            display: none !important;
          }
          .slick-dots {
            li {
              margin: 0 4px;
              height: 8px;
              width: 8px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 498px){
    .slider_block {
      .custom-carousel {
        .hooper {
          min-height: 340px;
        }
      }
    }
  }
  @media screen and (max-width: 440px){
    .slider_block {
      .custom-carousel {
        .hooper {
          min-height: 400px;
          .hooper-slide {
            padding: 24px;
            .slide-link-block {
              height: 42px;
              margin-top: 32px;
              .link-block_img {
                height: 42px;
                width: 42px;
              }
            }
            .ellipse {
              line-height: 1.2 !important;
            }
            .text {
              font-size: 12px !important;
            }
            .link {
              font-size: 12px !important;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 395px){
    .slider_block {
      .custom-carousel {
        .hooper {
          min-height: 440px;
        }
      }
    }
  }
  @media screen and (max-width: 350px){
    .slider_block {
      .custom-carousel {
        .hooper {
          min-height: 470px;
        }
      }
    }
  }
</style>