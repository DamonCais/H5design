
<template>
	<div>
		<el-dialog class="dialog" title="选择图片" :visible.sync="show" width="50%">
			<ul class="content">
				<li v-for="(item,i) in imgdata" :key="i" class="item" :class="{'active':i===sel}">
					<div class="img">
						<img @click="sel=sel===i?-1:i" :src="item.image.url" alt="">
					</div>
				</li>
			</ul>
		<el-pagination
			class="pagination"
			@current-change="handleCurrentChange"
			layout="prev, pager, next"
			:current-page.sync="pagination.currentPage"
			:total="pagination.total">
		</el-pagination>
			<div class="clearfix"></div>
			<el-button class="btn" @click="imgsel">确定</el-button>
			<div class="clearfix"></div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	props: {
		value: Boolean,
		imgdata: {
			type: Array,
		},
		pagination:{
			type:Object,
		}
	},
	data() {
		return {
			show: this.value,
			imgsrc: 'https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg',
			sel: -1,
		}
	},
	methods:{
		imgsel(){
			this.$emit('imgsel',this.sel);
		},
		handleCurrentChange(val){
			this.$emit('pageChange',val);
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
    .item {
      flex-basis: 20%;
      position: relative;
      // width: 25%;
      height: 0;
      padding-bottom: 20%;
      .img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        position: absolute;
				padding:5px;
				img{
					width:100%;
					height: 100%;
				}
      }
    }
    .active {
      img {
        border: 1px solid blue;
      }
    }
  }
	.pagination{
		margin:5px 0;
		float: right;
	}
	.btn{
				margin:5px 0;
		float:right;
	}
	.clearfix{
		clear: both;
	}
}
</style>
