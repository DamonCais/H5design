<template>
	<div class="navgrounp">
		<el-form ref="form" class="form" label-width="80px">
			<el-form-item label="填充方式">
				<el-radio-group v-model="data.template">
					<el-radio label="default">默认</el-radio>
					<el-radio label="notext">仅图片</el-radio>
					<el-radio label="noimage">仅文字</el-radio>
				</el-radio-group>
			</el-form-item>
		</el-form>
	<draggable :options="dragOptions" v-model="data.items">
		<transition-group>
		<div @mouseover="del=i" @mouseout="del=-1" v-for="(item,i) in data.items" :key="i" 
		class="imgform"
		:class="{'noimg':data.template==='noimage'}"
		>
			<i v-show="del===i" @click="itemDel(i)" class="el-icon-error del"></i>
			<div class="addimg" v-show="data.template!=='noimage'" >
				<div class="icon" :style="'background-image:url('+item.imgsrc+')'">
					<i v-if="!item.imgsrc"  class="el-icon-plus"></i>
					<h6 v-if="!item.imgsrc">添加图片</h6>
					<h5 v-if="item.imgsrc">更换图片</h5>
				</div>
				</div>
			<div class="row" v-show="data.template!=='notext'">
				<label for="">标题</label>
				<input v-model="item.title" type="text">
			</div>
			<div class="row">
				<label for="">链接</label>
				<el-select size="small" v-model="selvalue" placeholder="请选择">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</div>
		</div>
		</transition-group>
	</draggable>
		<div @click="itemAdd" class="additem">
			<i class="el-icon-plus"></i>
			<h6>添加一个图文导航</h6>
		</div>
		<imgsel v-model="dialogVisible"/>
	</div>
</template>

<script>
import draggable from 'vuedraggable'
import imgsel from '@/core/imgsel'
export default {
	props: {
		data: {
			type: Object,
		}
	},
	data() {
		return {
			dragOptions: {
				animation: 120,
				scroll: true,
				group: 'sortlist',
				ghostClass: 'ghost-style'
			},
			dialogVisible:false,
			selvalue:'beijing',
			del:-1
		}
	},
	methods: {
		onSubmit() {
			console.log('submit!');
		},
		itemDel(i){
			this.data.items.splice(i,1);
		},
		itemAdd(){
			this.data.items.push({
				title:'',
			})
		}
	},
	components:{
		imgsel,
		draggable
	}
}
</script>

<style lang="scss" scoped>
.navgrounp {
  // width: 500px;
  .imgform {
    width: 100%;
		min-height:100px;
    padding: 10px 10px 10px 100px;
		margin-bottom: 15px;
    box-sizing: border-box;
    border: 1px dashed #aaa;
    position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

    .addimg {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 80px;
      padding: 10px;
      .icon {
        height: 100%;
        text-align: center;
        border: 1px dashed #aaa;
				background-size:cover;
				background-position: center center;
				background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: #38f;
				font-size:14px;
				position: relative;
				cursor: pointer;
        i {
          font-size: 40px;
        }
				h5{
					width:100%;
					background: #666;
					color:#fff;
					position: absolute;
					bottom: 0;
					line-height: 20px;
				}
      }
    }
		.row{
			padding:0 10px;
			input{
				width:195px;
			}
		}
		.del{
			position: absolute;
			right: -10px;
			top:-10px;
			font-size: 20px;
			color:#aaa;

		}
    .imgitem {
      margin: 0;
    }
  }
	.noimg{
		padding:10px;
	}
	.additem{
		min-height:35px;
    padding: 10px 15px;
		margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px dashed #aaa;
		color: #38f;
		cursor: pointer;
		i{
			float: left;
			margin-right: 15px;
		}
	}
}
</style>