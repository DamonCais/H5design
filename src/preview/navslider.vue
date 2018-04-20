<template>
	<div>
    <Slider v-if="!onEdit" :items="data.items" :options="data.options" :cname="$style.slider"/>
		<div class="onedit" v-else>
			<img :src="data.items[0].imgsrc" alt="">
		</div>
	</div>
</template>

<script>
import Slider from '@/core/slider.vue'
export default {
    components:{
        Slider,
    },
    props:{
			data:{
				type:Object,
			},
			onEdit:{
				type:Boolean,
				default:false
			}
    },
}
</script>

<style lang="scss">
.onedit{
	img{
		width:100%;
	}
}
</style>

<style lang="scss" module>
  .slider{
    // margin-top:120px;
    font-size:20px;
    text-align: center;
			height: 100%;
		div{
			position: relative;
			vertical-align: middle;
			height: 100%;
			display:flex;/*Flex布局*/
			align-items:center;/*指定垂直居中*/
			img{
				width:100%;
				// height: 197px;
				min-height:180px;

			}
			a{
				color:#000;
				text-decoration: none;
			}
			i{
				position: absolute;
				bottom:0;
				left:0;
				right:0;
			}
		}
  }
</style>