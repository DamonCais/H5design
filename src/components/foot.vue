<template>
	<div class="foot">
		<el-row class="row">
			<el-button @click="upload" type="primary">上架</el-button>
			<el-button>保存成草稿</el-button>
			<el-button>预览</el-button>
		</el-row>
	</div>
</template>

<script>
export default {
	methods: {
		upload() {
			this.$emit('upload');
		}
	}
}
</script>

<style lang="scss" scoped>
.foot {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1800;
  .row {
    width: 1040px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background: #666;
    padding: 10px;
  }
}
</style>
