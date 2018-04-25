<template>
	<div class="block">

		<el-form ref="form" :model="block" label-width="75px">
			<el-form-item label="标题">
				<el-input v-model="block.pageTitle[editlang]"></el-input>
			</el-form-item>
			<el-form-item label="页面描述">
				<el-input v-model="block.pageDescription"></el-input>
			</el-form-item>
			<el-form-item label="背景颜色:">
				<el-color-picker v-model="block.color" show-alpha></el-color-picker>
			</el-form-item>
		</el-form>

	</div>
</template>

<script>
export default {
	props: {
		block: {
			type: Object,
		}
	}
}
</script>

<style lang="scss" scoped>
.block {
  min-width: 400px;
  margin-top: 20px;
}
</style>
