<template>
  <div class="block">
		
		<el-form ref="form" :model="data" label-width="75px">
		  <el-form-item label="高度:">
				<el-slider :min="10" :max="80" v-model="data.height"></el-slider>
			</el-form-item>
			<!-- <el-form-item label="显示线条:">
				<el-checkbox-group v-model="data.liners">
					<el-checkbox label="上边框" name="type"></el-checkbox>
					<el-checkbox label="水平线" name="type"></el-checkbox>
					<el-checkbox label="下边框" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item> -->
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
