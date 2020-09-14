<template>
  <div class="max-size-1920">
    <kegel-header/>
    <kegel-about/>
    <kegel-proven-benefits/>
    <kegel-motivation/>
    <kegel-slider/>
    <kegel-programm/>
    <kegel-questions/>
    <kegel-pre-footer/>
    <kegel-footer/>
  </div>
</template>

<script>
  import KegelHeader from '@/views/Kegel/components/KegelHeader';
  import KegelAbout from '@/views/Kegel/components/KegelAbout';
  import KegelProvenBenefits from '@/views/Kegel/components/KegelProvenBenefits';
  import KegelMotivation from '@/views/Kegel/components/KegelMotivation';
  import KegelSlider from '@/views/Kegel/components/KegelSlider';
  import KegelProgramm from '@/views/Kegel/components/KegelProgramm';
  import KegelQuestions from '@/views/Kegel/components/KegelQuestions';
  import KegelPreFooter from '@/views/Kegel/components/KegelPreFooter';
  import KegelFooter from '@/views/Kegel/components/KegelFooter';
  import { mapState } from 'vuex';

  export default {
    name: "index.vue",
    components: {
      KegelHeader,
      KegelAbout,
      KegelProvenBenefits,
      KegelMotivation,
      KegelSlider,
      KegelProgramm,
      KegelQuestions,
      KegelPreFooter,
      KegelFooter
    },
    computed: {
      ...mapState('kegel', [])
    }
  }
</script>

<style lang="scss">
  body {
    display: block;
    max-width: 1920px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .justify-content-center {
    justify-content: center !important;
  }
  @media screen and (max-width: 568px){
    body {
      .d-flex.red-border_block {
        .v-border-title {
          .title {
            font-size: 24px !important;
            text-align: left;
          }
        }
      }
    }
  }
</style>