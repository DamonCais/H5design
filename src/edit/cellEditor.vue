<template>
	<div>
		<el-form ref="form" class="form" :model="form" label-width="80px">
			<el-form-item label="左边内容">
				<el-input v-model="data.left"></el-input>
			</el-form-item>
			<el-form-item label="中间内容">
				<el-input v-model="data.center"></el-input>
			</el-form-item>
			<el-form-item label="右边内容">
				<el-input v-model="data.right"></el-input>
			</el-form-item>
			<el-form-item label="显示箭头">
				<el-switch v-model="data.islink"></el-switch>
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
	width:100%;
	padding:10px;
	box-sizing: border-box;
}

</style>
