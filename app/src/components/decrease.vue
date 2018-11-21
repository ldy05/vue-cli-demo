<template>
	<button @click = 'decrease()'>-</button>
</template>
<script>
	import {EventBus} from '../event-bus.js';
	export default {
		name:'DecreaseCount',
		data(){
			return{
				num:1,
			}
		},
		methods:{
			decrease(){
				EventBus.$emit("decreased",{
					num:this.num
				})
			}
		}
	}
</script>