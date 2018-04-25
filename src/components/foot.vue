<template>
	<div class="foot">
		<el-row class="row">
			<el-button @click="upload" type="primary">{{$t('FOOTER_UPLOAD')}}</el-button>
			<el-button>{{$t('FOOTER_SAVE_AS_DRAFT')}}</el-button>
			<el-button>{{$t('FOOTER_PREVIEW')}}</el-button>
			<h6>
				<span :class="{'active':language==='en'}" @click="setlang('en')">EN</span>
				<span :class="{'active':language==='zh'}" @click="setlang('zh')">中</span>
			</h6>
		</el-row>
	</div>
</template>

<script>
export default {
	methods: {
		upload() {
			this.$emit('upload');
		},
		setlang(lang) {
			this.$i18n.locale = lang;
			this.$store.dispatch('setLanguage', lang)
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
    position: relative;
    h6 {
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      border: 1px solid red;
      justify-content: space-around;
      text-align: center;
      background: #fff;
      span {
        display: block;
        padding: 5px;
        width: 30px;
        cursor: pointer;
      }
      .active {
        background: #3f8;
      }
    }
  }
}
</style>
