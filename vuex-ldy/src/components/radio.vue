<template>
	<div class="radio">

		<p><span>单选:</span>{{getFoodVal}}</p>
		<input type="radio" value="大米" v-model="getFoodVal"/>大米
		<input type="radio" value="小米" v-model="getFoodVal"/>小米
		<!--<input :value="foodVal" @input="updateMessage"/>-->
		<p>{{getModel}}</p>
		<input v-model="getModel"/>
		<button @click="getFood">提交</button>
	</div>
</template>
<script>
	import {mapGetters,mapState, mapMutations,mapActions} from 'vuex';
	export default {
		name:'radio-con',
		/*data(){
			return{
				radioFood:'大米'
			}
		}*/
		computed:{
			/*...mapState([
					'food'
			]),*/
			/*...mapState({
				*//*food:'food',*//*
				foodVal : state =>state.food
			}),*/
		    getModel:{
				get(){
					return this.$store.state.inptxt
				},
				set(value){
					this.$store.commit('updateMessage1', value)
				}
	    	},
			getFoodVal:{
				get(){
					return this.$store.state.food
				},
				set(val){
					this.$store.commit('upRadioMessage',val)
				}
			}
		},
		methods:{
			getFood(){
				/*this.$store.commit('getRadioCon');*/
				this.$store.dispatch('updateRaioCon')
			},

			/*updateMessage (e) {
				this.$store.commit('updateMessage', e.target.value)
			}*/
		}
	}
</script>
