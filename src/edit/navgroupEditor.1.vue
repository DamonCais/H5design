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

		<el-form ref="form" class="imgform" :model="form" label-width="60px">
			<div class="addimg">
				<div class="icon">
					<i class="el-icon-plus"></i>
					<h6>添加图片</h6>
				</div>
			</div>

			<el-form-item class="imgitem" label="标题">
				<el-input size="mini"></el-input>
			</el-form-item>
		
			<!-- <el-form-item class="imgitem" label="链接" prop="region">
				<el-select size="mini" placeholder="请选择活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item> -->
		</el-form>
			<el-button  @click="dialogVisible=true">默认按钮</el-button>
		<imgsel v-model="dialogVisible"/>
	</div>
</template>

<script>
import imgsel from '@/core/imgsel'
export default {
	props: {
		data: {
			type: Object,
		}
	},
	data() {
		return {
			form: {
				productFrom: '商品',
				fillType: 'nospace',
				listStyle: '2col'
			},
			dialogVisible:false
		}
	},
	methods: {
		onSubmit() {
			console.log('submit!');
		}
	},
	components:{
		imgsel,
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
    box-sizing: border-box;
    border: 1px dashed #aaa;
    position: relative;
    .addimg {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 90px;
      padding: 10px;
      .icon {
        height: 100%;
        text-align: center;
        border: 1px dashed #aaa;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: #38f;
        i {
          font-size: 40px;
        }
      }
    }
    .imgitem {
      margin: 0;
    }
  }
}
</style>