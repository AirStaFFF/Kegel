<template>
  <div class="kegel-programm">
    <v-border-title
      :font-size="48"
      :text-center="true"
      :text="'App Features'"/>
    <div class="kegel-programm-items">
      <kegel-programm-item
        v-for="(item, id) in appFeatures"
        :key="id"
        :reverse="item.reverse"
        :item="item"
      ></kegel-programm-item>
    </div>
  </div>
</template>

<script>
  import VBorderTitle from '@/components/VBorderTitle';
  import KegelProgrammItem from './components/KegelProgrammItem';
  import { mapState } from 'vuex';
  export default {
    name: "KegelProgramm",
    components: {
      VBorderTitle,
      KegelProgrammItem
    },
    computed: {
      ...mapState('kegel', ['appFeatures']),
    }
  }
</script>

<style lang="scss">
  .kegel-programm {
    margin-top: 182px;
  }
  .kegel-programm-items {
    margin-top: 81px;
  }
  @media screen and (max-width: 1440px){
    .kegel-programm {
      margin-top: 170px;
    }
    .kegel-programm-items {
      margin-top: 71px;
    }
  }
  @media screen and (max-width: 1024px){
    .kegel-programm {
      margin-top: 170px;
    }
    .kegel-programm-items {
      margin-top: 71px;
    }
  }
  @media screen and (max-width: 1024px){
    .kegel-programm {
      margin-top: 140px;
    }
    .kegel-programm-items {
      margin-top: 0px;
    }
  }
</style>