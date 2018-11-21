<template>
	<div class="child">
		<button @click="giveChild">点我把子内容给父亲</button>
	</div>
</template>
<script>
	export default{
		name:'child-com',
		computed:{
			con(){
				return this.$store.state.childCon;
			}
		},
		methods:{
			giveChild(){
				 this.$store.commit("getChildCon");
			}
		}
	}
</script>