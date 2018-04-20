<template>
	<div >
		<section v-if="hasimage" class="navgroup">
			<div class="imgs" v-for="(item,index) in data.items" :key="index">
				<div v-if="index!==0" class="img" :style="'background-image:url('+item.imgsrc+')'">
				</div>
				<img v-else :src="item.imgsrc" alt="">
			</div>
		</section>
		<section  v-if="hastext" class="navgroup">
			<div class="titles" v-for="(item,index) in data.items" :key="index">
				<h5>{{item.title}}</h5>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	props:{
		data:{
			type:Object,
		}
	},
	computed:{
		hasimage(){
			return this.data.template!=='noimage'
		},
		hastext(){
			return this.data.template!=='notext'
		}
	}
}
</script>

<style lang="scss" scoped>
.navgroup{
	display: flex;
	.titles{
		flex:1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    word-wrap: break-word;
		text-align: center;
		line-height: 20px;
	}
	.imgs{
		flex:1;
		line-height: 15px;
		position: relative;
		box-sizing: border-box;
		// padding:5px;
		// padding-bottom:20px;
		.img{
			width:100%;
			height: 100%;
			background-size:cover;
			background-position: center center;
			background-repeat: no-repeat;
		}
		img{
			width:100%;
		}
	}
}

</style>
