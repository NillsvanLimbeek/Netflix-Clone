<template lang="html">
  <div class="hero">
    <div class="info-box">
      <h1>Stranger Things</h1>

      <div class="info">
        <p>2016</p>
        <p>2 seasons</p>
      </div>

      <p class="description">When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.</p>

      <div class="buttons">
        <p class="red"><i class="fa fa-play" aria-hidden="true"></i>Play</p>
        <p class="white"><i class="fa fa-plus" aria-hidden="true"></i>My List</p>
      </div>

    </div>

    <div class="black-fade"></div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import "../../scss/_reset.scss";
  @import "../../scss/_variables.scss";
  @import "../../scss/_elements.scss";

  .hero {
    @include open-sans;
    display: flex;
    height: 100vh;
    width: 100%;
    background-position-x: center;
    background-image: url(https://image.tmdb.org/t/p/original/6c4weB3UycHwPgzv31Awt7nku9y.jpg);
    background-origin: border-box;
  }

  .info-box {
    @include flex-center;
    flex-direction: column;
    width: 40%;
    color: white;
    margin-left: 50px;

    h1 {
      font-size: 65px;
      margin-bottom: 5px;
    }

    p {
      font-size: 18px;
    }
  }

  .info {
    display: flex;

    p {
      font-size: 18px;
      margin: 0 15px 15px 0;
    }
  }

	.buttons {
		display: flex;
		margin-top: 25px;

		.red {
			@include flex-center-align;
			@include red-button;
		}

		.white {
			@include flex-center-align;
			@include white-button;
      transition: all 1s ease;

			&:hover {
				background-color: rgba(82, 82, 82, 0.4);
			}
		}

		p {
			color: white;

			&:hover i {
				margin-right: 20px;
			}
		}

		i {
			margin-right: 10px;
			transition: all .5s ease;
		}

	}

  .black-fade {
    width: 100vw;
    height: 200px;
    position: absolute;
    top: 750px;
    background: linear-gradient(to top, rgba(0,0,0,1) 0%,rgba(0,0,0,0.75) 50%,rgba(0,0,0,0) 100%);
  }
</style>
