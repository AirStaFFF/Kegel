<template>
  <div class="kegel-footer">
    <div class="kegel-footer-wrapper">
      <div class="kegel-footer_left-block">
        <div class="footer-logo">
          <img src="@/assets/images/footer-logo.png">
          <span class="footer-logo-title">
          Dr. KEGEL: MEN’S SEXUAL HEALTH
        </span>
        </div>
        <span class="copy">
        Copyright 2020. All Rights Reserved.
      </span>
      </div>
      <div class="kegel-footer_right-block">
        <div
          class="links-block"
          v-for="(navigation, id) in footer_navigation"
          :key="id">
          <div class="link-block">
            <span class="link-block-title">{{navigation.title}}</span>
            <div
              class="link-block-item"
              v-for="(link, id2) in navigation.links"
              :key="id2">
              <a
                class="link-block-link"
                :href="link.link">{{link.text}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "Footer",
    computed: {
      ...mapState('kegel', ['footer_navigation'])
    },
  }
</script>

<style lang="scss">
  .kegel-footer {
    padding: 64px 64px;
  }
  .kegel-footer-wrapper {
    display: flex;
    max-width: 1278px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    .kegel-footer_left-block {
      .footer-logo {
        display: flex;
        align-items: center;
        &-title {
          font-weight: 600;
          max-width: 149px;
          line-height: 1.23;
          color: #333e51;
        }
        img{
          width: 42px;
          height: 42px;
          margin-right: 16px;
        }
      }
      .copy {
        display: block;
        margin-top: 16px;
        font-size: 10px;
        font-weight: 300;
        color: #5a6175;
      }
    }
    .kegel-footer_right-block {
      display: flex;
      .links-block {
        margin-right: 138px;
        &:last-child {
          margin-right: 0;
        }
        .link-block-title {
          display: block;
          padding: 4px 4px 4px 0px;
          width: 100px;
          border-bottom: 2px solid #fa2724;
          margin-bottom: 12px;
        }
        .link-block-item {
          padding: 4px 4px 4px 0px;
          .link-block-link {
            text-decoration: none;
            color: #5a6175;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1140px){
    .kegel-footer-wrapper {
      .kegel-footer_right-block {
        .links-block {
          margin-right: 82px;
        }
      }
    }
  }
  @media screen and (max-width: 936px){
    .kegel-footer-wrapper {
      flex-wrap: wrap-reverse;
      .kegel-footer_left-block {
        margin-top: 64px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .copy {
          width: 100%;
          text-align: center;
        }
      }
      .kegel-footer_right-block {
        margin-right: auto;
        margin-left: auto;
        flex-wrap: wrap;
      }
    }
  }
  @media screen and (max-width: 710px){
    .kegel-footer {
      padding: 64px 48px;
    }
    .kegel-footer-wrapper {
      .kegel-footer_right-block {
        .links-block {
          margin-right: 54px;
        }
      }
    }
  }
  @media screen and (max-width: 620px){

    .kegel-footer {
      .kegel-footer_right-block {
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
        .link-block-title {
          margin-left: auto;
          margin-right: auto;
        }
        .links-block {
          margin-right: 0px;
          text-align: center;
          margin-top: 32px;
          &:nth-child(1) {
            margin-top: 0;
          }
        }

      }
    }
  }
</style>