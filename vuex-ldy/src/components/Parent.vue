<template>
	<div class="parent">
		{{name}}
		{{txt}}
		<button @click="updateName" value="更名">更名</button>
		<child-com></child-com>
		<p>您选择了{{radiotxt}}</p>
		<radioCon></radioCon>
	</div>
</template>
<script>
	import {mapGetters,mapState, mapMutations,mapActions} from 'vuex';
	import childCom from './Children.vue'
	import radioCon from './radio.vue'



	export  default {
		computed:{
			...mapState([
					'name',
					'txt',
					'radiotxt'
			]),
			/*getName(){
				return this.$store.state.name;
			},*/

			...mapGetters([
				'getReverseName',
				'getChild'
			]),
			/*getReverseName(){
				return this.$store.getters.getReverseName;
			}*/
		},
		methods:{
			/*changeName(){
				this.$store.commit('updateName')
			},*/
			... mapMutations([
				'updateName'
			]),
					...mapActions({

			})//this.$store.dipatch('');

		},
		components:{
			childCom,
					radioCon

		}

	}
</script>