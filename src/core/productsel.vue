<template>
	<div>
		<el-dialog class="dialog" title="选择商品" :visible.sync="show" width="70%">


    <el-table 
      ref="multipleTable"
      class="table"
      :data="gridData"
      height="500"
      @select-all="handleSelectionChange"
      @select="handleSelectionChange">
    <el-table-column width="55"  type="selection"  fixed>
    </el-table-column>
    <el-table-column
      v-for="(item,index) in showData"
      :key="index"
      :sortable="item.sortable"
      :label="item.label"
      >
    <template slot-scope="scope">
      <div >
        <img v-if="item.type ==='image'" :src="scope.row|deepGet(item.prop)" alt="" style="width: 50px;height: 50px">
        <span v-if="item.type ==='string'">{{scope.row|deepGet(item.prop)}}</span>
        <!-- <el-button v-if="item.type ==='button'" @click="toUrl(item.url + scope.row._id)">{{item.prop}}</el-button> -->
      </div>
    </template>
    </el-table-column>
    </el-table>
		<el-pagination
			class="pagination"
			@current-change="handleCurrentChange"
			layout="prev, pager, next"
			:current-page.sync="pagination.currentPage"
			:total="pagination.total">
		</el-pagination>
			<div class="clearfix"></div>
			<el-button class="btn" @click="productsel">确定</el-button>
			<div class="clearfix"></div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	props: {
		value: Boolean,
		gridData: {
			type: Array,
		},
		showData:{
			type:Array,
		},
		pagination:{
			type:Object,
			default(){
				return{
					currentPage:1,
					total:50,
				}
			}
		}
	},
	data() {
		return {
			show: this.value,
			sel: -1,
			multipleSelection:[],
		}
	},
	methods:{
		productsel(){
			this.$emit('productsel',this.multipleSelection);
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
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
	},
  filters: {
    deepGet(value,path){
      return (!Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path).reduce((o, k) => (o || {})[k], value) || undefined;
    }
  },
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
