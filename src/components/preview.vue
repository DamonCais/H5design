<template>
	<div class="preview">
		<product :class="{'onedit':onEdit}" :data="data" v-if="type==='product'"/>
		<celltitle :class="{'onedit':onEdit}" :data="data" v-if="type==='title'"/>
		<spacer :class="{'onedit':onEdit}" :data="data" v-if="type==='spacer'"/>
		<navgroup :class="{'onedit':onEdit}" :data="data" v-if="type==='navgroup'"/>
		<cell :class="{'onedit':onEdit}" :data="data" v-if="type==='cell'"/>
		<swiper :class="{'onedit':onEdit}" :onEdit="onEdit" :data="data" v-if="type==='swiper'"/>
	</div>
</template>

<script>
import cell from '@/preview/cell'
import swiper from '@/preview/swiper'
import spacer from '@/preview/spacer'
import navgroup from '@/preview/navgroup'
import celltitle from '@/preview/title'
import product from '@/preview/product'
export default {
	components:{
		cell,
		swiper,
		spacer,
		navgroup,
		celltitle,
		product
	},
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
	}
}
</script>

<style lang="scss" scoped>
.preview{
	width:100%;
	.onedit{
		border:1px dashed red;
	}
}

</style>
