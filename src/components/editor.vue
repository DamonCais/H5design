<template>
	<div v-if="title!==''" class="editor-page">
		<h4>{{title}}</h4>
		<component :class="{'onedit':onEdit}" :data="data" v-bind:is="type+'Editor'"></component>
		<!-- <title-editor :data="data" v-if="type==='title'"/>
		<cell-editor :data="data" v-if="type==='cell'"/>
		<swiper-editor :data="data" v-if="type==='swiper'"/>
		<product-editor :data="data" v-if="type==='product'"/>
		<spacer-editor :data="data" v-if="type==='spacer'"/>
		<navgroup-editor :data="data" v-if="type==='navgroup'"/> -->
	</div>
</template>

<script>
import cellEditor from '@/edit/cellEditor'
import celltitleEditor from '@/edit/titleEditor'
import swiperEditor from '@/edit/swiperEditor'
import spacerEditor from '@/edit/spacerEditor'
import productEditor from '@/edit/productEditor'
import navgroupEditor from '@/edit/navgroupEditor'
import headerEditor from '@/edit/headerEditor'
export default {
	props:{
		data:{
			type:Object,
		},
		type:{
			type:String,
		},
		css:{
			type:Array,
		},
		onEdit:{
			type:Boolean,
		}
	},
	computed:{
		title(){
			let title = '';
			switch(this.type){
				case 'cell': title='导航条';break;
				case 'product': title='商品列表';break;
				case 'spacer': title='辅助留空';break;
				case 'swiper': title='轮播图';break;
				case 'celltitle': title='标题';break;
				case 'navgroup': title='导航列表';break;
				case 'header': title='主页标题';break;

			}
			return title;
		}
	},
	components:{
		cellEditor,
		spacerEditor,
		productEditor,
		swiperEditor,
		navgroupEditor,
		celltitleEditor,
		headerEditor
	}
}
</script>

<style lang="scss" scoped>
.editor-page{
		min-width:400px;
		padding:10px;
		border:1px solid #e5e5e5;
		background: #f8f8f8;
		border-radius: 5px;
		position: relative;
		&:before{
			right: 100%;
			top: 20px;
			border: solid #000;
			content: " ";
			height: 0;
			width: 0;
			position: absolute;
			pointer-events: none;
			border-color: transparent;
			border-right-color: #e5e5e5;
			border-width: 7px;
			margin-top: -7px;
		}
		&:after{
			right: 100%;
			top: 20px;
			border: solid #000;
			content: " ";
			height: 0;
			width: 0;
			position: absolute;
			pointer-events: none;
			border-color: transparent;
			border-right-color: #f8f8f8;
			border-width: 6px;
			margin-top: -6px;
		}
	h4{
		font-size:16px;
		padding:5px 0;
		border-bottom: 1px solid #999;
		margin-bottom: 5px;
	}
}

</style>
