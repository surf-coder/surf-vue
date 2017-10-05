<template>
  <button
    class="header__nav-button"
    @click="toggleActive"
    role="button">
    <span class="nav-button__icon icon--top"></span>
    <span class="nav-button__icon icon--bottom"></span>
  </button>
</template>
<script>
  export default {
    name: 'header-bar-button',
    data () {
      return {
        isActive: false
      }
    },
    methods: {
      toggleActive () {
        this.isActive = !this.isActive;
        this.$emit('change', this.isActive);
      }
    }
  }
</script>
<style lang="scss">

  $header-height : 60px;
  $header-height-mobile : 50px;
  $header-nav-button-speed: 0.4s;

  .header__nav-button {
    @include size($header-height-mobile);
    @include transition();
    // position to the right of the screen
    position: absolute;
    right: 20px;
    background-color: transparent;

    @include breakpoint(large) {
      @include translate(300px);
    }

    &:hover {
      background-color: $blue-4;
    }

    // middle bar
    &:before,
    &:after {
      @include size(10px, 2px);
      @include translate(0, -50%);
      position: absolute;
      top: 50%;
      background-color: $blue-10;
      content: '';
      @include transition(0.4s);
    }

    &:before {
      left: 15px;

      @include breakpoint(small) {
        left: 15px;
      }
    }

    &:after {
      right: 15px;

      @include breakpoint(small) {
        right: 15px;
      }
    }
  }

  .nav-button__icon {
    @include size(20px, 2px);
    @include translate(-50%, -50%);
    position: absolute;
    // left: 25px;
    @include transition(0.4s);

    @include breakpoint(small) {
      left: 25px;
    }

    // top bottom bars
    &:before,
    &:after {
      @include size(50%, 100%);
      position: absolute;
      background-color: $blue-10;
      content: '';
      @include transition(0.4s);
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }

    &.icon--top {
      top: 18px;
      @include transition(0.4s);

      @include breakpoint(small) {
        // top: 23px;
      }
    }

    &.icon--bottom {
      bottom: 16px;
      @include transition(0.4s);

      @include breakpoint(small) {
        // bottom: 21px;
      }
    }
  }

  .nav-button__icon {

  }

  .icon--top {

  }

  .icon--bottom {

  }
</style>
