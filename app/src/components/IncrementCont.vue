<template>
	<button @click='increment()'>+</button>
</template>
<script>
	import {EventBus} from '../event-bus.js';
	export default {
		name:'IncrementCount',
		data(){
			return{
				num:1,
			}
		},
		methods:{
			increment(){
				EventBus.$emit("incremented",{
					num:this.num
				})
			}
		}
	}
</script>