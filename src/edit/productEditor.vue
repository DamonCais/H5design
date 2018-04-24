<template>
	<div>
		<el-form ref="form" class="form" :model="form" label-width="80px">
			<el-form-item label="商品来源">
				<el-radio-group v-model="form.productFrom">
					<el-radio label="商品"></el-radio>
					<el-radio label="商品分组"></el-radio>
				</el-radio-group>
			</el-form-item>

			<div class="product">
				<span>选择商品</span>
				<div >
					<draggable class="imgs" :options="dragOptions" v-model="data.items">
						<!-- <transition-group> -->
								<div class="img" v-for="(item,i) in data.items" :key="i" 
								:style="'background-image:url('+item.imgsrc+')'"
								@mouseover="del=i" @mouseout="del=-1">
									<i v-show="del===i" @click="itemDel(i)" class="el-icon-error del"></i>
								</div>
						<!-- </transition-group> -->
					</draggable>
					<div @click="productAdd" class="plus">
						<i class="el-icon-plus"></i>
					</div>
				</div>	
			</div>



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
		<!-- <el-button @click="productAdd">切换商品</el-button> -->
		<productsel :pagination="pagination" @pageChange="pageChange" @productsel="productsel" v-model="dialogVisible" :showData="showData" :gridData="gridData"/>
	</div>
</template>

<script>
import draggable from 'vuedraggable'

import productsel from '@/core/productsel'
import {doPost,doGet} from '@/api/api'
  export default {
		props:{
			data:{
				type:Object,
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
				showData:[
					{prop:'image.url',label:'image',width:120,type:'image'},
					{prop:'name',label:'name',width:120,type:'string'},
					{prop:'price',label:'price',width:120,type:'string'},
				],
				gridData:[],
				pagination:{
					currentPage:1,
					total:50,
				},
				del:-1,
				form:{
					productFrom:'商品'
				}
      }
    },
    methods: {
			itemDel(i){
				this.data.items.splice(i,1);
			},
			productsel(products){
				products.forEach(element => {
					this.data.items.push({
						imgsrc:this.deepGet(element,'image.url'),
						name:element.name,
						price:element.price,
					})
				});
				this.dialogVisible=false;
			},
      onSubmit() {
        console.log('submit!');
      },
			productAdd(){
				this.gridData=[];
				doGet('/products',{p:this.pagination.currentPage-1}).then(res=>{
					console.log(res);
					this.pagination.total= parseInt(res.headers['x-total-count']);
					this.gridData=res.data;
					this.dialogVisible = true;
				})
			},
			pageChange(val){
				this.pagination.currentPage=val;
				this.productAdd();
			},
    deepGet(value,path){
      return (!Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path).reduce((o, k) => (o || {})[k], value) || undefined;
    }
    },
		components:{
			productsel,
			draggable
		},
  }
</script>

<style lang="scss" scoped>
.form{
	width:500px;
	padding:10px;
	box-sizing: border-box;
	.product{
		min-height:60px;
		border:1px solid #999;
		padding:15px 10px;
		font-size: 14px;
		margin-bottom: 10px;
		display: flex;
		background: #fff;
		span{
			width:120px;
			padding-top: 3px;
		}
	}
		.imgs{
			// display: flex;
			// flex-wrap: wrap;
			width:75%;
			min-height:40px;
			padding:0 10px;
			.img{
				float: left;
				margin:0 5px 5px 0;
				width:50px;
				height: 50px;
				background-size:cover;
				background-position: center center;
				background-repeat: no-repeat;
				text-align: center;
				line-height: 50px;
				border: 1px solid #999;
				position: relative;
				.del{
					position: absolute;
					right: -10px;
					top:-10px;
					font-size:20px;
					color:#aaa;
					z-index: 500;
				}
			}
		}
			.plus{
				float: left;
				margin:0 5px 5px 0;
				width:50px;
				height: 50px;
				background-size:cover;
				background-position: center center;
				background-repeat: no-repeat;
				text-align: center;
				line-height: 50px;
				border: 1px solid #999;
				position: relative;
				border:1px dashed #999;
				cursor: pointer;
			}
}

</style>
<style>


.el-radio+.el-radio{
	margin:0;
		margin-right:30px;
}
.el-radio{
	margin-right:30px;
	margin-bottom: 5px;
}
</style>
