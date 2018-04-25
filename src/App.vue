<template>
	<div class="contain">
		<div class="app-preview" :style="'background-color:'+blocks[0].color">
			<!-- 页面标题 -->
			<header class="header" @click="sel=0">
				<h1>{{blocks[0].pageTitle[editlang]}}</h1>
			</header>
			<div class="prelist">
				<!-- 页面显示 -->
				<draggable :options="dragOptions" v-model="blocks" :move="getdata" @update="datadragEnd">
					<div ref="pre" class="pre" v-for="(pre,index) in blocks" :key="index" v-if="index" @click="getSel(index)">
						<preview :block="pre" :onEdit="sel===index" />
						<span @click.stop="del" v-show="sel===index" class="del">删除</span>
						<span @click="push" v-show="sel===index" class="add push">
							<i class="el-icon-circle-plus"></i>
						</span>
						<span @click="insert" v-show="sel===index" class="add insert">
							<i class="el-icon-circle-plus"></i>
						</span>
					</div>
				</draggable>
				<!-- 页面编辑 -->
				<editor :style="'top:'+editOffset+'px'" ref="editor" class="editor" :block="blocks[sel]" />
				<div class="clearfix"></div>
			</div>
			<!-- 添加按键 -->
			<div class="btns">
				<span v-for="(btn,index) in btns" :key="index">
					<el-button size="mini" type="primary" @click="edit(btn)">{{btn}}</el-button>
				</span>
			</div>
		</div>
		<div class="clearfix"></div>
		<!-- 弹出按键 -->
		<el-dialog title="选择组件" :visible.sync="centerDialogVisible" width="500px" center>
			<div class="btns">
				<span v-for="(btn,index) in btns" :key="index">
					<el-button size="mini" type="primary" @click="selbtn(btn)">{{btn}}</el-button>
				</span>
			</div>
		</el-dialog>
		<!-- 底部按钮 -->
		<foot @upload="upload" />
	</div>
</template>

<script>
import preview from "./components/preview"
import draggable from 'vuedraggable'
import editor from './components/editor'
import { createObjByBtn } from './utils/btn'
import foot from './components/foot'
export default {
	data() {
		return {
			btnType: 'edit',
			centerDialogVisible: false,
			dragOptions: {
				animation: 120,
				scroll: true,
				group: 'sortlist',
				ghostClass: 'ghost-style'
			},
			btns: ['导航栏', '轮播图', '标题', '导航条', '商品', '留空'],
			blocks: [
				{
					pageTitle: { zh: '', en: '' },
					pageDescription: '',
					color: '#eee',
					type: 'header'
				}
			],
			sel: 0,
			editOffset: -50
		}
	},
	methods: {
		upload() {
			console.log(this.blocks);
		},
		selbtn(btn) {
			this.centerDialogVisible = false;
			let obj = createObjByBtn(btn);
			switch (this.btnType) {
				case 'edit':
					this.blocks.push(obj);
					this.sel = this.blocks.length - 1;
					break;
				case 'insert':
					this.blocks.splice(this.sel, 0, obj);
					break;
				case 'push':
					this.blocks.splice(this.sel + 1, 0, obj);
					this.sel = this.sel + 1;
					break;
			}
			this.btnType = 'edit';
		},
		getSel(index) {
			this.sel = index;
		},
		edit(btn) {
			this.btnType = 'edit';
			this.selbtn(btn);
		},
		del() {
			this.blocks.splice(this.sel, 1);
			this.sel = this.sel - 1;
		},
		push() {
			this.btnType = 'push';
			this.centerDialogVisible = true;
		},
		insert() {
			this.btnType = 'insert';
			this.centerDialogVisible = true;
		},
		getdata(evt) {
			this.sel = evt.draggedContext.index;
		},
		datadragEnd(evt) {
			this.sel = evt.newIndex + 1;
		}
	},
	watch: {
		sel(val) {
			if (!val) {
				this.editOffset = this.$refs.pre[0].offsetTop - 50;
				return;
			}
			setTimeout(() => {
				if (!this.$refs.pre[val - 1]) { return; }
				this.editOffset = this.$refs.pre[val - 1].offsetTop;
			}, 20);

		}
	},
	components: {
		preview,
		draggable,
		editor,
		foot
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
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
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
        margin-bottom: 100px;
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
          color: green;
          font-size: 20px;
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
    button {
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
}
.clearfix {
  clear: both;
}
</style>
