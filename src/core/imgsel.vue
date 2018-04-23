
<template>
	<div>
		<el-dialog class="dialog" title="选择图片" :visible.sync="show" width="50%">
			<ul class="content">
				<li v-for="i in 20" :key="i" class="img" :class="{'active':i===sel}">
					<img @click="sel=sel===i?-1:i" :src="imgsrc" alt="">
				</li>
			</ul>
			<el-button>确定</el-button>
		</el-dialog>
	</div>
</template>

<script>
export default {
	props: {
		value: Boolean
	},
	data() {
		return {
			show: this.value,
			imgsrc: 'https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg',
			sel: -1,
		}
	},
	watch: {
		show(val) {
			this.$emit('input', val);
		},
		value(val) {
			this.show = val;
		}
	}
}
</script>

<style lang="scss" scoped>
.dialog {
  .content {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    border-top: 1px solid #000;
		border-bottom: 1px solid #000;
    background: #eee;
    .img {
      flex-basis: 20%;
      padding: 5px;
      box-sizing: border-box;
      img {
				box-sizing: border-box;
        width: 100%;
      }
    }
    .active {
      img {
        border: 1px solid blue;
      }
    }
  }
}
</style>
