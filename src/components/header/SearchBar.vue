<template lang="html">
	<div class="search-wrapper">
		<div class="input-wrapper">
			<input 
				type="text" id="input-bar" placeholder="Titles, people, genres" 
				@focus="showText = false" @focusout="showText = true"
				v-model="search"
				:class="{ focus: isActive }"
				:keyup="getData">
			<label for="input-bar" class="fa fa-search search-icon-two">
				<transition name="fade">
					<span class="search-text" :class="{ opacity: textOpacity }" v-if="showText">Search</span>
				</transition>
			</label>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showText: true,
				isActive: false,
				textOpacity: false,
				search: "",
				baseUrl: "https://api.themoviedb.org/3/search/multi?api_key=9ea839ec7891591994ec0f540b4b199f&language=en-US&query=",
				searchResults: []
			}
		},
		computed: {
			getData() {
				if (this.search.length < 1) {
					this.$store.state.mainSection = true;
					console.log("Waiting for Input");
				} else {
					this.$store.state.mainSection = false;

					this.$http.get(this.baseUrl + this.search)
						.then(response => {
							return response.json();
						})
						.then(data => {
							this.searchResults.length = 0;
							
							for(let key in data.results) {
								this.searchResults.push(data.results[key]);
							}

							this.$store.state.search = this.searchResults;
						})
				}
			}
		},
		watch: {
			search: function() {
				if(this.search.length > 0) {
					this.isActive = true;
					this.textOpacity = true;
				} else {
					this.isActive = false;
					this.textOpacity = false;
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../scss/reset.scss";
	@import "../../scss/variables.scss";

	.input-wrapper {
		position: relative;
	}

	.search-text {
		@include open-sans;
		font-size: 16px;
		padding-left: 5px;
		cursor: pointer;
	}

	.opacity {
		opacity: 0;
		color: black;
		margin-left: 25px;
	}

	.search-icon-one {
		font-size: 12px;
		margin-right: 10px;
		transform: translateY(-2px);
	}

	input {
		height: 25px;
		background-color: rgba(255, 255, 255, 0);
		color: white;
		padding: 2px 0 2px 30px;
		width: 25px;
		border: 1px solid transparent;
		border-style: none;
		transition: width .5s ease-in-out;
		cursor: pointer;

		&::placeholder {
			opacity: 0;
		}

		&:focus {
			width: 200px;
			outline: none;
			border: 1px solid white;
			background-color: black;

			&::placeholder {
				opacity: 1;
			}
		}
	}

	.focus {
		width: 200px;
		outline: none;
		border: 1px solid white;
		background-color: black;
	}

	.search-icon-two {
		position: absolute;
		left: 5px;
		top: 7px;
		font-size: 15px;
		cursor: pointer;
	} 
	
	//Dropdown Transition
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-to {
		transition: opacity .25s ease-in-out;
	}

	.fade-leave {
		opacity: 1;
	}

	.fade-leave-to {
		opacity: 0;
		transition: opacity .25s ease-in-out;
	}
</style>