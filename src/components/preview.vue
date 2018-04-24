<template>
	<div class="preview">
		<component :class="{'onedit':onEdit}" :block="block" v-bind:is="block.type|titlefilter"></component>
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
	components: {
		cell,
		banner: swiper,
		spacer,
		navgroup,
		celltitle,
		productgroup: product
	},
	props: {
		block: {
			type: Object,
		},
		onEdit: {
			type: Boolean,
		}
	},
	filters: {
		titlefilter(val) {
			if (val === 'title') {
				return 'celltitle'
			}
			return val;
		}
	}
}
</script>

<style lang="scss" scoped>
.preview {
  width: 100%;
  .onedit {
    border: 1px dashed red;
  }
}
</style>
