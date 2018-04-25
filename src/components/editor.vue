<template>
	<div v-if="title!==''" class="editor-page">
		<h4>{{$t(title)}}</h4>
		<h6>
			<span :class="{'active':editlang==='en'}" @click="setlang('en')">EN</span>
			<span :class="{'active':editlang==='zh'}" @click="setlang('zh')">中</span>
		</h6>
		<component :class="{'onedit':onEdit}" :block="block" v-bind:is="block.type+'Editor'"></component>
	</div>
</template>

<script>
import cellEditor from '@/edit/cellEditor'
import titleEditor from '@/edit/titleEditor'
import swiperEditor from '@/edit/swiperEditor'
import spacerEditor from '@/edit/spacerEditor'
import productgroupEditor from '@/edit/productEditor'
import navgroupEditor from '@/edit/navgroupEditor'
import headerEditor from '@/edit/headerEditor'
export default {
	props: {
		block: {
			type: Object,
		},
		onEdit: {
			type: Boolean,
		}
	},
	data() {
		return {
		}
	},
	methods: {
		setlang(lang) {
			this.$store.dispatch('setEditlang', lang)
		}
	},
	computed: {
		title() {
			let title = '';
			switch (this.block.type) {
				// case 'cell': title = '导航条'; break;
				case 'productgroup': title = 'productgroup'; break;
				case 'spacer': title = 'spacer'; break;
				case 'banner': title = 'banner'; break;
				case 'title': title = 'title'; break;
				case 'navgroup': title = 'navgroup'; break;
				case 'header': title = 'header'; break;

			}
			return title;
		}
	},
	components: {
		cellEditor,
		spacerEditor,
		productgroupEditor,
		bannerEditor: swiperEditor,
		navgroupEditor,
		titleEditor,
		headerEditor
	}
}
</script>

<style lang="scss" scoped>
.editor-page {
  min-width: 400px;
  padding: 10px;
  border: 1px solid #e5e5e5;
  background: #f8f8f8;
  border-radius: 5px;
  position: relative;
  &:before {
    right: 100%;
    top: 20px;
    border: solid #000;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: transparent;
    border-right-color: #e5e5e5;
    border-width: 7px;
    margin-top: -7px;
  }
  &:after {
    right: 100%;
    top: 20px;
    border: solid #000;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: transparent;
    border-right-color: #f8f8f8;
    border-width: 6px;
    margin-top: -6px;
  }
  h4 {
    font-size: 16px;
    padding: 5px 0;
    border-bottom: 1px solid #999;
    margin-bottom: 5px;
  }
  h6 {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    border: 1px solid red;
    justify-content: space-around;
    text-align: center;
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
</style>
