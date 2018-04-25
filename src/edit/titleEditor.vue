<template>
	<div>
		<el-form ref="form" class="form" :model="form" label-width="80px">
			<el-form-item :label="$t('TITLE_TITLE')">
				<el-input v-model="block.items[0].title[editlang]"></el-input>
			</el-form-item>
			<el-form-item :label="$t('TITLE_SUBTITLE')">
				<el-input v-model="block.items[0].subtitle[editlang]"></el-input>
			</el-form-item>
			<div class="row">
				<linktype :item="block.items[0]" />
			</div>
		</el-form>
	</div>
</template>

<script>
import linktype from '@/core/linktype'
export default {
	props: {
		block: {
			type: Object,
		}
	},
	data() {
		return {
			form: {
				productFrom: '商品',
				fillType: 'nospace',
				listStyle: '2col'
			}
		}
	},
	methods: {
		onSubmit() {
			console.log('submit!');
		}
	},
	computed: {
		islink() {
			return this.block.items[0].linkType !== undefined;
		}
	},
	components: {
		linktype,
	}
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  .row {
    padding: 0 40px;
    font-size: 14px;
    color: #666;
  }
}
</style>
