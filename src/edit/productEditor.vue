<template>
	<div>
		<el-form ref="form" class="form" :model="form" label-width="80px">
			<el-form-item label="商品来源">
				<el-radio-group v-model="form.productFrom">
					<el-radio label="商品"></el-radio>
					<el-radio label="商品分组"></el-radio>
				</el-radio-group>
			</el-form-item>

			<el-form-item label="列表样式">
				<el-radio-group v-model="data.css.listStyle">
					<el-radio label="single">大图</el-radio>
					<el-radio label="double">小图</el-radio>
					<el-radio label="triple">一行三个</el-radio>
					<el-radio label="onebig">一大两小</el-radio>
					<el-radio label="list">详细列表</el-radio>
				</el-radio-group>
			</el-form-item>

			<el-form-item label="填充方式">
				<el-radio-group v-model="data.css.fillType">
					<el-radio label="nospace">填充</el-radio>
					<el-radio label="haspace">留白</el-radio>
				</el-radio-group>
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
		},
    data() {
      return {
        form: {
					productFrom:'商品',
					fillType:'nospace',
					listStyle:'2col'
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="scss" scoped>
.form{
	width:580px;
	padding:10px;
	box-sizing: border-box;
}

</style>
