<template>
  <div class="question">
    <div class="question-header">
      <img
        src="@/assets/images/question-1.png"
        class="question-img">
      <span class="question-title">
        {{question.title}}
    </span>
    </div>
    <span
      v-html="question.text"
      class="question-discription"
    ></span>
  </div>
</template>

<script>
  export default {
    name: "Question",
    props: {
      question: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .question {
    max-width: 564px;
    display: block;
    border-radius: 21px;
    box-shadow: 0 50px 150px 0 rgba(96, 106, 140, 0.11);
    background-color: #ffffff;
    padding: 32px 48px 52px 32px;
    margin-top: 29px;
    &:nth-child(1) {
      margin-top: 0;
    }
    &-img {
      width: 24px;
      height: 24px;
      margin-right: 16px;
    }
    &-title {
      display: block;
      width: 100%;
      font-weight: 600;
      line-height: 1.81;
      color: #333e51;
    }
    &-discription {
      width: 100%;
      display: block;
      line-height: 1.81;
      color: #5a6175;
      margin-top: 32px;
      padding-left: 40px;
    }
    &-header {
      display: flex;
    }
  }
  @media screen and (max-width: 1140px){
    .question {
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media screen and (max-width: 568px){
    .question {
      padding: 24px 24px 32px;
      &-discription {
        margin-top: 24px;
        padding-left: 0px;
      }
    }
  }
</style>