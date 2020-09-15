<template>
  <div class="prover-benefits" id="Benefits">
    <v-border-title
      :font-size="48"
      :text="'Scientifically Proven Benefits'"/>
    <div class="prover-benefits_content d-flex">
      <div
        v-for="(item, id) in benefits"
        :key="id"
        class="prover-benefits_item">
        <div class="item-img">
          <img :src="item.img" alt="">
        </div>
        <div class="item-text">
          {{item.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VBorderTitle from '@/components/VBorderTitle';
  import { mapState } from 'vuex';
  export default {
    name: "KegelProvenBenefits",
    components: {
      VBorderTitle
    },
    computed: {
      ...mapState('kegel', ['benefits'])
    }
  }
</script>

<style lang="scss">
  .d-flex {
    display: flex !important;
  }
  .prover-benefits {
    margin-top: 160px;
    padding-left: 368px;
    padding-right: 368px;
    .red-border_block {
      justify-content: center;
    }
    .prover-benefits_content {
      margin-top: 56px;
      .prover-benefits_item {
        position: relative;
        max-width: 342px;
        margin-right: 79px;
        .item-img {
          display: block;
          img {
            max-width: 342px;
            width: 100%;
          }
        }
        .item-text {
          position: absolute;
          width: 100%;
          max-width: 200px;
          left: 50%;
          margin-left: -100px;
          text-align: center;
          bottom: -10px;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.81;
          color: #5a6175;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  @media screen and (max-width: 1650px){
    .prover-benefits {
      padding-left: 191px;
      padding-right: 191px;
    }
  }
  @media screen and (max-width: 1440px){
    .prover-benefits {
      padding-left: 128px;
      padding-right: 128px;
    }
  }
  @media screen and (max-width: 1220px){
    .prover-benefits {
      padding-left: 88px;
      padding-right: 88px;
      .prover-benefits_content {
        .prover-benefits_item {
          margin-right: 44px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px){
    .prover-benefits {
      padding-right: 64px;
      padding-left: 64px;
      margin-top: 79px;
      .prover-benefits_content {
        justify-content: space-between;
        .prover-benefits_item {
          max-width: 260px;
          width: 33%;
          .item-text {
            font-size: 16px;
            max-width: unset;
            position: unset;
            left: unset;
            margin-left: auto;
            margin-right: auto;
            margin-top: -40px;
            max-width: 160px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 850px){
    .prover-benefits {
      padding-right: 64px;
      padding-left: 64px;
      margin-top: 79px;
      .prover-benefits_content {
        justify-content: space-between;
        .prover-benefits_item {
          max-width: 185px;
          width: 33%;
          .item-text {
            font-size: 16px;
            max-width: unset;
            position: unset;
            left: unset;
            margin-left: auto;
            margin-right: auto;
            margin-top: -40px;
            max-width: 160px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1023px){
    .prover-benefits {
      .prover-benefits_content {
        .prover-benefits_item {
          margin-right: 20px ;
          &:nth-child(2) {
            margin-right: 20px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px){
    .prover-benefits {
      margin-top: 60px;
      .prover-benefits_content {
        flex-wrap: wrap;
        margin-top: 0;
        .prover-benefits_item {
          max-width: unset;
          width: 100%;
          margin-right: 0px;
          margin-top: 55px;
          &:nth-child(2) {
            margin-right: 0;
          }
          .item-img {
            img {
              margin-left: auto;
              margin-right: auto;
              display: block;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 568px){
    .prover-benefits {
      margin-top: 55px;
      padding-left: 48px;
      padding-right: 48px;
      .prover-benefits_content {
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 0;
        .prover-benefits_item {
          max-width: 279px;
          width: 100%;
          margin-right: 0 !important;
          margin-top: 55px;
          .item-text {
            font-size: 16px;
            max-width: unset;
            position: relative;
            left: unset;
            margin-left: unset;
            margin-top: -50px;
          }
          &:first-child {
            margin-top: 32px !important;
          }
          &:nth-child(3) {
            margin-top: 55px;
          }
        }
      }
    }
  }
</style>