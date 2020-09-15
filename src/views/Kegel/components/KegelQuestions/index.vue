<template>
  <div class="kegel-questions" id="FAQ">
    <v-border-title
      :font-size="32"
      :text-center="true"
      :text="'Frequently Asked Questions'"/>
    <div class="questions-blocks">
      <div
        class="question-block"
        v-for="(questions, id) in questions_blocks"
        :key="id"
      >
        <kegel-questions-question
          v-for="(question, id2) in questions"
          :key="id2"
          :question="question"
        ></kegel-questions-question>
      </div>
    </div>
  </div>
</template>

<script>
  import VBorderTitle from '@/components/VBorderTitle';
  import KegelQuestionsQuestion from './components/KegelQuestionsQuestion';
  import { mapState } from 'vuex';
  export default {
    name: "KegelQuestions",
    components: {
      VBorderTitle,
     KegelQuestionsQuestion
    },
    computed: {
      ...mapState('kegel', ['questions_blocks'])
    }
  }
</script>

<style lang="scss">
  .kegel-questions {
    margin-top: 133px;
    padding-left: 128px;
    padding-right: 128px;
    .questions-blocks {
      max-width: 1140px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 118px;
      display: flex;
      justify-content: center;
      .question-block {
        width: 45%;
        &:first-child {
          margin-right: 56px;
        }
      }
    }
  }
  @media screen and (max-width: 1140px){
    .kegel-questions {
      margin-top: 64px;
      padding-right: 48px;
      padding-left: 48px;
      .justify-content-center.red-border_block {
        padding-left: 0;
        padding-right: 0;
      }
      .questions-blocks {
        flex-wrap: wrap;
        margin-top: 52px;
        .question-block {
          width: 100%;
          margin-right: 0 !important;
          &:nth-child(2) {
            margin-top: 32px;
          }
        }
      }
    }
  }
</style>