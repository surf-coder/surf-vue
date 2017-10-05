<template>
  <header class="header"
          :class="{ 'is-open': this.sideBarOpen }"
          role="banner">
    <router-link to="/">
      <div class="header__logo">
      <header-bar-logo></header-bar-logo>
      </div>
    </router-link>
    <header-bar-nav></header-bar-nav>
    <header-bar-button @change="toggleSideBar"></header-bar-button>
  </header>
  <!--header class="global-header" role="banner" :class="{ 'is-open': sidebarOpen }">
    <router-link to="/"
                 class="global-header__title"
                 @click.native="goHome">IBM Design | <b class="u-text--bold">Hybrid Cloud</b>
    </router-link>
    <button @click="toggleSidebar" class="global-header__nav-button js-nav-button" role="button">
      <span class="nav-button__icon icon--top"></span>
      <span class="nav-button__icon icon--bottom"></span>
    </button>
    <hcd-navigation>
    </hcd-navigation>
	</header-->
</template>
<script>
  import headerBarNav from './header-bar-nav';
  import headerBarLogo from './header-bar-logo';
  import headerBarButton from './header-bar-button';

  export default {
    name: 'header-bar',
    components: {
      headerBarNav,
      headerBarLogo,
      headerBarButton
    },
    data () {
      return {
        sideBarOpen: false
      }
    },
    methods: {
      toggleSideBar (isActive) {
        this.sideBarOpen = isActive;
      }
    }
  }
</script>

<style lang="scss">
  $nav-header-height: 100px !default;
  $nav-header-height-mobile: 50px !default;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: $nav-header-height;
    background-color: $blue-2;
    @include size(100%, $nav-header-height-mobile);
    @include z(front);
    padding: 0 20px;

    @include breakpoint(large) {
      height: $nav-header-height;
      padding: 0 60px;
    }
  }

  .header__logo {
    width: 120px;
    position: absolute;
    top: 0;

    @include breakpoint(large) {
      width: 250px;
    }
  }

  // Is Open
  .header.is-open {

    // remove the middle line
    .header__nav-button {

      &:before,
      &:after {
        opacity: 0;
      }

      &:before {
        // left: 6px;
      }

      &:after {
        // right: 6px;
      }
    }

    .nav-button__icon {

      // transform to cross
      &.icon--top {
        top: 22px;

        @include breakpoint(small) {
          top: 22px;
        }

        &:before {
          left: 2px;
          transform: rotate(45deg);
        }

        &:after {
          right: 2px;
          transform: rotate(-45deg);
        }
      }

      &.icon--bottom {
        bottom: 20px;

        @include breakpoint(small) {
          bottom: 20px;
        }

        &:before {
          left: 2px;
          transform: rotate(-45deg);
        }

        &:after {
          right: 2px;
          transform: rotate(45deg);
        }
      }
    }
  }
  /*
  // Global Header Variables

  $global-header-height: 60px !default;
  $global-header-height-mobile: 50px !default;
  $global-header-nav-button-speed: .3s !default;
  $global-header-hover-color: $blue-20;


  // Global Header
  .global-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: z(absolute);
    padding: 0 20px;
    @include size(100%, $global-header-height-mobile);
    background-color: $blue-80;

    @include breakpoint(small) {
      height: $global-header-height;
    }

    @include breakpoint(large) {
      padding: 0 60px;
    }
  }

  .global-header__title {
    float: right;
    margin: 5px 0;
    color: $shade-0;
    font: {
      weight: 400;
    }
    line-height: 40px;
    margin: 5px 0 10px 20px;

    @include breakpoint(small) {
      margin: 10px 0;
    }

    @include breakpoint(large) {
      float: left;
    }

    &:hover {
      color: $shade-0;
    }
  }


  // Header Overflow Button
  .global-header__overflow-button {
    @include size($global-header-height-mobile);
    position: absolute;
    top: 0;
    right: 0;

    @include breakpoint(small) {
      height: $global-header-height;
    }

    @include breakpoint(medium) {
      display: none;
    }

    .icon--overflow {
      @include size(20px);
      fill: color('white');
    }
  }


  // Nav Button
  .global-header__nav-button {
    @include size($global-header-height-mobile);
    @include transition();
    position: relative;
    float: left;
    background-color: $purple-60;
    outline: none;

    @include breakpoint(small) {
      @include size($global-header-height);
    }

    &:hover {
      background-color: $purple-50;
    }

    &:before,
    &:after {
      @include size(10px, 2px);
      @include translate(Y, -50%);
      position: absolute;
      top: 50%;
      background-color: $shade-0;
      content: '';
      transition: all $global-header-nav-button-speed ease-in-out;
    }

    &:before {
      left: 15px;

      @include breakpoint(small) {
        left: 20px;
      }
    }

    &:after {
      right: 15px;

      @include breakpoint(small) {
        right: 20px;
      }
    }
  }

  .nav-button__icon {
    @include size(20px, 2px);
    @include translate(-50%, -50%);
    position: absolute;
    left: 25px;
    transition: all $global-header-nav-button-speed ease-in-out;

    @include breakpoint(small) {
      left: 30px;
    }

    &:before,
    &:after {
      @include size(50%, 100%);
      position: absolute;
      background-color: $shade-0;
      content: '';
      transition: all $global-header-nav-button-speed ease-in-out;
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }

    &.icon--top {
      top: 18px;
      transition: all $global-header-nav-button-speed ease-in-out;

      @include breakpoint(small) {
        top: 23px;
      }
    }

    &.icon--bottom {
      bottom: 16px;
      transition: all $global-header-nav-button-speed ease-in-out;

      @include breakpoint(small) {
        bottom: 21px;
      }
    }
  }


  // Is Open
  .global-header.is-open {

    .global-header__nav-button {

      &:before,
      &:after {
        opacity: 0;
      }

      &:before {
        left: 6px;
      }

      &:after {
        right: 6px;
      }
    }

    .nav-button__icon {

      &.icon--top {
        top: 22px;

        @include breakpoint(small) {
          top: 27px;
        }

        &:before {
          left: 2px;
          transform: rotate(45deg);
        }

        &:after {
          right: 2px;
          transform: rotate(-45deg);
        }
      }

      &.icon--bottom {
        bottom: 20px;

        @include breakpoint(small) {
          bottom: 25px;
        }

        &:before {
          left: 2px;
          transform: rotate(-45deg);
        }

        &:after {
          right: 2px;
          transform: rotate(45deg);
        }
      }
    }
  }


  // Nav Button Focus
  [data-peripheral='keyboard'] .global-header__nav-button:focus {
    border-radius: 0;
    box-shadow: 0 0 2px 2px $blue-30;
  }
   */
</style>
