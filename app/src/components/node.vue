<template>
	<div>
		<h1>note</h1>
		<ul>
			<li v-for="li in lis">
				<router-link :to="'/note/'+li.id+'/'+li.tit">{{li.tit}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				lis:[
					{tit:'第一章',id:'111'},
					{tit:'第二章',id:'222'},
					{tit:'第三章',id:'333'}
				]
			}
		}
	}
</script>