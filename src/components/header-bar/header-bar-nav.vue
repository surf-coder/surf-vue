<template>
  <nav class="header__nav-list" role="navigation">
    <ul class="list nav-list">
      <li
        @click.capture="selectLink(link)"
        v-for="link in links"
        class="nav-list__item"
        role="presentation">
        <router-link
          class="nav-list__link"
          :to="link.url">
          {{ link.label }}
        </router-link>
        <ul
          class="nav-sublist"
          :class="getSubListClasses(link)">
          <li
            v-for="subLink in link.subList"
            class="nav-sublist__item">
            <router-link
              class="nav-sublist__link"
              :to="subLink.url">{{ subLink.label }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
  import navigationLinks from './navigation-links';

  export default {
    name: 'header-bar-nav',

    props: {
      links: {
        type: Array,
        default: () => navigationLinks
      }
    },

    methods: {
      selectLink (link) {
        this.$store.commit('setCurrentPage', link.id);
        this.$store.commit('toggleSidebar');
      },
      getSubListClasses (link) {
        return {
          [`nav-sublist--${link.id}`]: true
        };
      }
    }
  }
</script>
<style lang="scss">

  $nav-bar-height: 60px;

  .header__nav-list {
    position: fixed;
    top: 45px;
    right: 0;

    @include size(auto, 100%);
    @include translate(320px);
    @include transition(.4s);

    @include breakpoint(large) {
      position: relative;
      float: right;
      right: 0;
      top: 40px;
      width: auto;
      @include translate(0)
    }

    .is-open & {
      @include translate(0);
    }
  }

  .nav-list {
    display: block;
    position: relative;
    top: 0;
    right: auto;
    left: 0;
    width: auto;
    background-color: $blue-2;

    @include breakpoint(large) {
      display: flex;
      width: auto;
      max-width: 650px;
    }
  }

  .nav-list__item {
    position: relative;
    // padding: 0;
    // border-bottom: 2px solid $red-6;

    &:hover {
      .nav-link__link {

      }
    }

    &:hover .nav-sublist {
      @include visible(true);
      @include translate(-50%, 0);
    }
  }

  .nav-list__link {
    color: $blue-16;
    font: {
      size: 24px;
      weight: 700;
    }
    padding: 0 30px;
    line-height: $nav-bar-height;
    // text-align: center;
    &:hover {
      color: $blue-18;
    }
  }

  .nav-sublist {
    position: absolute;
    top: 50px;
    display: none;
    @include visible(false);
    left: 50%;
    width: 200px;
    @include translate(-50%, 20px);
    @include transition();
    background-color: $blue-2;
    border-top: 5px solid $red-9;
    /* position: absolute;
    display: none;
    top: 54px;
    left: 50%;
    width: 200px;
    border-top: 6px solid $blue-ci;
    background-color: $blue-80;
    opacity: 0;
    visibility: hidden;
    @include translate(-50%, 20px);
    @include transition();
    z-index: 1;

    @include breakpoint(large) {
      display: block;
    } */
    @include breakpoint(large) {
      display: block;
    }
  }

  .nav-sublist__link {
    display: block;
    padding: 8px 20px;
    color: $blue-16;

    &:hover {
      background-color: $blue-4;
      color: $blue-18;
    }
  }
</style>
