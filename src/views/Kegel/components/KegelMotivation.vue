<template>
  <div class="not-all_block">
    <div class="not-all_title">And That’s Not All! Scientists also claim about:</div>
    <div class="not-all_items">
      <div
        v-for="(item, id) in not_all_block"
        :key="id"
        class="not-all_item">
        <img :src="item.img" alt="" class="item-img">
        <div class="item-text">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "KegelMotivation",
    computed: {
      ...mapState('kegel', ['not_all_block'])
    }
  }
</script>

<style lang="scss">
  .not-all_block {
    margin-top: 130px;
    .not-all_title {
      max-width: 452px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      font-size: 32px;
      font-weight: bold;
      color: #333e51;
      text-align: center;
    }
    .not-all_items {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      max-width: 920px;
      margin-left: auto;
      margin-right: auto;
      .not-all_item {
        margin-right: 100px;
        margin-top: 69px;
        min-width: 210px;
        &:nth-child(3) {
          margin-right: 0;
        }
        &:nth-child(6) {
          margin-right: 0;
        }
        .item-img {
          /*box-shadow: 27px 21px 47px 0 rgba(0, 0, 0, 0.12);*/
          /*border-radius: 38%;*/
          margin-left: auto;
          margin-right: auto;
          display: block;
          max-width: 202px;
        }
        .item-text {
          margin-top: -24px;
          font-size: 16px;
          line-height: 1.81;
          color: #5a6175;
          max-width: 210px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }
      }
    }
  }
  @media screen and (max-width: 1024px){
    .not-all_block {
      margin-top: 89px;
      .not-all_title {
        font-size: 24px;
      }
      .not-all_items {
        max-width: 800px;
        .not-all_item {
          margin-right: 0;
          margin-top: 55px;
          /*&:nth-child(2n + 2) {*/
          /*  margin-right: 93px !important;*/
          /*}*/
          .item-text {
            max-width: 210px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .not-all_block {
      margin-top: 69px;
      .not-all_items {
        max-width: 550px;
        margin-left:auto;
        margin-right: auto;
        .not-all_item {
          margin-right: 0;
          &:nth-child(2n + 1) {
            margin-right: 50px !important;
          }
        }
      }
    }
  }
  @media screen and (max-width: 568px){
    .not-all_block {
      padding-left: 48px;
      padding-right: 48px;
      margin-top: 55px;
      .not-all_items {
        justify-content: center;
        .not-all_item {
          margin-right: 0;
          margin-top: 55px;
          &:nth-child(2n + 1) {
            margin-right: 0px !important;
          }
          .item-text {
            min-width: 210px;
            max-width: 210px;
          }
        }
      }
    }
  }
</style>