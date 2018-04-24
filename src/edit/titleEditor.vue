<template>
	<div>
		<el-form ref="form" class="form" :model="form" label-width="80px">
			<el-form-item label="标题">
				<el-input v-model="block.items[0].title[editlang]"></el-input>
			</el-form-item>
			<el-form-item label="子标题">
				<el-input v-model="block.items[0].subtitle[editlang]"></el-input>
			</el-form-item>
			<!-- <el-form-item label="显示箭头">
				<el-switch v-model="islink"></el-switch>
			</el-form-item> -->
		</el-form>
	</div>
</template>

<script>
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
	}
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>
