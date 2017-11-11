<template lang="html">
  <div class="dropdown-wrapper">
    <i class="fa fa-play arrow" aria-hidden="true"></i>
    <div class="dropdown">
      <div class="content" v-for="alert in alerts">
        <div class="left">
          <img src="" alt="" :src="alert.imgUrl">
        </div>

        <div class="right">
          <p class="message">{{ alert.message }}</p>
          <p class="title">{{ alert.title }}</p>
          <p class="date-added">{{ alert.dateAdded }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ["alerts"]
}
</script>

<style lang="scss" scoped>
  @import "../../scss/reset.scss";
  @import "../../scss/variables.scss";

  .arrow {
    color: white;
    transform: rotate(-90deg) translateY(228px) translateX(-18px) scaleX(.5);
  }

  .dropdown-wrapper {
    @include open-sans;
    position: absolute;
    top: 20px;
    right: -105px;
  }

  .dropdown {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    background-color: black;
    border-top: 2px solid white;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .content {
    display: flex;
    border: 1px solid #6b6b6b;
    width: 350px;

    &:hover {
      background-color: rgba(0, 0, 0, 1);
    }
  }

  .left {
    //width: 35%;
    @include flex-center-align;

    img {
      width: 150px;
      margin: 20px 15px;
    }
  }

  .right {
    @include flex-center;
    flex-direction: column;
    margin-left: 5px;
  }

  .message {
    font-style: italic;
    font-size: 13px;
  }

  .title {
    margin: 3px 0;
  }

  .date-added {
    font-size: 10px;
  }
</style>
