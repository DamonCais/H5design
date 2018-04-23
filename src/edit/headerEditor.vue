<template>
  <div class="block">
		
		<el-form ref="form" :model="data" label-width="75px">
			<el-form-item label="标题">
				<el-input v-model="data.title"></el-input>
			</el-form-item>
		  <el-form-item label="背景颜色:">
				<el-color-picker v-model="data.color" show-alpha></el-color-picker>
			</el-form-item>
    </el-form>


  </div>
</template>

<script>
export default {
	props:{
		data:{
			type:Object,
		}
	}
}
</script>

<style lang="scss" scoped>
.block{
	min-width: 400px;

}

</style>
