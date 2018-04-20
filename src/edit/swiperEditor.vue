<template>
	<div>
		<el-form ref="form" class="form" :model="form" label-width="80px">
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
	width:100%;
	padding:10px;
	box-sizing: border-box;
}

</style>