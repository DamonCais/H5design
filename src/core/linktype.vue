<template>
	<div class="linktype">
		<label for="">链接</label>
		<span class="span">
			{{item.linkType}}
			<i v-show="item.linkType" @click="linkDel" class="el-icon-close"></i>
		</span>
		<el-dropdown @command="handleCommand">
			<span class="el-dropdown-link">
				{{linkType===''?'选择跳转到的页面':'修改'}}
				<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="product">商品</el-dropdown-item>
				<el-dropdown-item command="storeTopPage">店铺</el-dropdown-item>
				<el-dropdown-item command="shoppingMallCategory">商品分类</el-dropdown-item>
				<el-dropdown-item command="category">店铺商品分类</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<productsel :pagination="pagination" @pageChange="pageChange" @productsel="productsel" v-model="productDialog" :multi="false" :showData="showData" :gridData="gridData" />
	</div>

</template>

<script>
import { doPost, doGet } from '@/api/api'
import productsel from './productsel'
export default {
	props: {
		item: {
			type: Object,
		}
	},
	data() {
		return {
			linkType: '',
			productDialog: false,
			showData: [
				{ prop: 'image.url', label: 'image', width: 120, type: 'image' },
				{ prop: 'name', label: 'name', width: 120, type: 'string' },
				{ prop: 'price', label: 'price', width: 120, type: 'string' },
			],
			gridData: [],
			pagination: {
				currentPage: 1,
				total: 50,
			},
		}

	},
	methods: {
		linkDel() {
			this.item.linkType = '';
			this.item[this.item.linkType] = '';
		},
		handleCommand(command) {
			switch (command) {
				case 'product': this.productsGet(); break;
				// case 'storeTopPage': this.storeTopPageLink(); break;
				// case 'shoppingMallCategory': this.shoppingMallCategoryLink(); break;
				// case 'category': this.categoryLink(); break;
			}
		},
		productsel(products) {
			this.item.linkType = 'product';
			this.item[this.item.linkType] = products[0]['_id'];
			console.log(this.item);
			this.productDialog = false;
		},
		pageChange(val) {
			this.pagination.currentPage = val;
			this.productsGet();
		},
		productsGet() {
			this.gridData = [];
			doGet('/products', { p: this.pagination.currentPage - 1 }).then(res => {
				console.log(res);
				this.pagination.total = parseInt(res.headers['x-total-count']);
				this.gridData = res.data;
				this.productDialog = true;
			})
		},
	},
	components: {
		productsel,
	}
}
</script>

<style lang="scss" scoped>
.linktype {
  width: 100%;
  min-height: 20px;
  line-height: 20px;
  .span {
    margin-left: 5px;
    vertical-align: bottom;
    // max-width: 90px;
    background: #409eff;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    padding: 0 0 0 3px;
    position: relative;
    top: 0;
    bottom: 0;
    i {
      cursor: pointer;
    }
  }
}
</style>
