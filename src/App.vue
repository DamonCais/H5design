<template>
	<div class="contain">
		<div class="app-preview"
		:style="'background-color:'+h5datas[0].data.color">
			<header class="header" 
			@click="sel=0"
			>
				<h1>{{h5datas[0].data.title}}{{sel}}</h1>
			</header>
			<div class="prelist">
				<!-- <test/> -->
				<draggable :options="dragOptions" v-model="h5datas" :move="getdata" @update="datadragEnd">
					<transition-group>
						<div ref="pre" class="pre" v-for="(pre,index) in h5datas" :key="index" v-if="index"  @click="getSel(index)">
							<preview :data="pre.data" :onEdit="sel===index" :type="pre.type" :css="pre.css" />
							<span @click.stop="del" v-show="sel===index" class="del">删除</span>
							<span @click="push" v-show="sel===index" class="add push"><i class="el-icon-circle-plus"></i></span>
							<span @click="insert" v-show="sel===index" class="add insert"><i class="el-icon-circle-plus"></i></span>
						</div>
					</transition-group>
				</draggable>
				<editor :style="'top:'+editOffset+'px'" ref="editor" class="editor" :data="h5datas[sel].data" :type="h5datas[sel].type" />
			</div>
			<div class="btns">
				<span v-for="(btn,index) in btns" :key="index">
						<el-button size="mini" type="primary" @click="edit(btn)">{{btn}}</el-button>
				</span>
			</div>
		</div>
		<el-dialog
			title="选择组件"
			:visible.sync="centerDialogVisible"
			width="500px"
			center>
			<div class="btns">
				<span v-for="(btn,index) in btns"   :key="index">
						<el-button size="mini" type="primary" @click="selbtn(btn)">{{btn}}</el-button>
				</span>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import preview from "./components/preview"
import draggable from 'vuedraggable'
import editor from './components/editor'
import test from './preview/product'
import {createObjByBtn} from './utils/btn'
export default {
	data() {
		return {
			btnType:'edit',
			centerDialogVisible:false,
			dragOptions: {
				animation: 120,
				scroll: true,
				group: 'sortlist',
				ghostClass: 'ghost-style'
			},
			btns: ['导航栏', '轮播图', '标题', '导航条', '商品','留空'],
			h5datas: [{data:{
				title:'店铺主页',
				color:'#eee'
			},type:'header'}, {
					type: 'navgroup',
					data: {
						template:'default',
						items: [
							{ imgsrc: "https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg", title: 'title1' },
							{ imgsrc: "http://cdn.iciba.com/news/word/big_20180417b.jpg", title: 'title1' },
							{ imgsrc: "http://cdn.iciba.com/news/word/big_20180417b.jpg", title: 'title1' },
							{ imgsrc: "http://cdn.iciba.com/news/word/big_20180417b.jpg", title: '所发生的浪费时间了' },
							{ imgsrc: "https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg", title: 'title1' },
						]
					}
				},
			
			{
				type:'product',

				data:{
					css:{
						fillType:'nospace',
						listStyle:'double'
					},
					items:[
						{imgsrc:'https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg',
							title:'商品一',
							price:'5.00'},
												{imgsrc:'https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg',
							title:'商品一',
							price:'5.00'},
												{imgsrc:'https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg',
							title:'商品一',
							price:'5.00'},
												{imgsrc:'https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg',
							title:'商品一',
							price:'5.00'}
					]
				}
			},
			{
				type:'celltitle',
				data:{
					title:'title很长很长水水水水水所发生的浪费时间了的房间里的数据分类世界的理解',
					subtitle:'subtitle长很长水水水水水所发生的浪费时间了水水所发生的浪费时间了水水所发生的浪费时间了水水所发生的浪费时间了的房间里的数据分类世界的理解',
					islink:true
				}
			},
				{
					type: 'cell',
					data: {
						left: 'left',
						center: 'center',
						right: 'right',
						islink: true
					}
				}, {
					type: 'swiper',
					data: {
					css:{
						fillType:'nospace',
						listStyle:'double'
					},
						items: [
							{ imgsrc: 'https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg', title: 'title1' },
							{ imgsrc: 'http://cdn.iciba.com/news/word/big_20180417b.jpg', title: 'title2' },
							{ imgsrc: 'http://cdn.iciba.com/news/word/big_201804-16b.jpg', title: 'title3' }
						]
					}
				}, {
					type: 'spacer',
					data: {
						height: 30,
						color:'#ddd'
					}
				}
			],
			sel: 0,
			editOffset: -50
		}
	},
	methods: {
		selbtn(btn){
			this.centerDialogVisible = false;
			let obj = createObjByBtn(btn);
			switch(this.btnType){
				case 'edit':
					this.h5datas.push(obj);
					this.sel=this.h5datas.length-1;
					break;
				case 'insert':
					this.h5datas.splice(this.sel,0,obj);
					break;
				case 'push':
					this.h5datas.splice(this.sel+1,0,obj);
					this.sel=this.sel+1;
					break;
			}
			this.btnType='edit';
		},
		getSel(index) {
			this.sel = index;
		},
		edit(btn) {
			this.btnType='edit';
			this.selbtn(btn);
		},
		del() {
			this.h5datas.splice(this.sel, 1);
			this.sel = this.sel-1;
		},
		push(){
			this.btnType='push';
			this.centerDialogVisible=true;
		},
		insert(){
			this.btnType='insert';
			this.centerDialogVisible = true;
		},
		getdata(evt) {
			this.sel = evt.draggedContext.index;
		},
		datadragEnd(evt) {
			this.sel = evt.newIndex+1;
		}
	},
	watch: {
		sel(val) {
			if(!val){
				this.editOffset = this.$refs.pre[0].offsetTop-50;
				return;
			}
			setTimeout(() => {
				this.editOffset = this.$refs.pre[val-1].offsetTop;
			}, 20);
			
		}
	},
	components: {
		preview,
		draggable,
		editor,
		test
	}
}
</script>

<style lang="scss" scoped>
.contain {
  width: 1000px;
  margin: 0 auto;
  min-height: 300px;
  background: #fff;
  padding: 20px;
	box-shadow: 0 0 1px 0 rgba(0,0,0,.2);
  .app-preview {
    border: 1px solid #000;
    width: 320px;
    min-height: 600px;
		margin-bottom: 300px;
    .header {
      background: #000;
      height: 50px;
      color: #fff;
      position: relative;
			cursor: pointer;
      h1 {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
      }
    }
    .prelist {
      width: 100%;
      // background: red;
      padding-bottom: 30px;
      min-height: 300px;
      border-bottom: 1px solid #aaa;
      position: relative;
      .editor {
        position: absolute;
        left: 104%;
        top: 0;
      }
      .pre {
        position: relative;
        margin: 2px 0;
        cursor: move;
        span {
          cursor: pointer;
        }
        .add {
          position: absolute;

          left: 50%;
					color:green;
					font-size:20px;
          z-index: 1000;
          // color: white;
        }
        .push {
          bottom: -10px;
        }
        .insert {
          top: -10px;
        }
        .del {
          z-index: 1000;
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: 8px;
          color: #fff;
          background: #666;
          padding: 3px;
        }
        &:last-child {
          // cursor: default;
        }
      }
    }

  }
}
.ghost-style {
  display: block;
  color: transparent;
  border-style: dashed;
}
    .btns {
      display: flex;
      flex-wrap: wrap;
      padding: 5px;
      span {
        cursor: pointer;
        box-sizing: border-box;
        width: 25%;
        text-align: center;
        padding: 5px;
        line-height: 20px;
        margin-bottom: 5px;
				button{
					width:100%;
					height: 100%;
					text-align: center;
				}
      }
    }
</style>
