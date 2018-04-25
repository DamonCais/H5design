<template>
	<div class="linktype">
		<label for="">链接</label>
		<span v-show="linkType" class="span">
			{{linkType|strLenFilter}}
			<i @click="linkDel" class="el-icon-close"></i>
		</span>
		<el-dropdown @command="handleCommand">
			<span class="el-dropdown-link">
				{{item.linkType?'修改':'选择跳转到的页面'}}
				<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="product">商品</el-dropdown-item>
				<el-dropdown-item command="storeTopPage">店铺</el-dropdown-item>
				<el-dropdown-item command="shoppingMallCategory">商品分类</el-dropdown-item>
				<el-dropdown-item command="category">店铺商品分类</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<!-- <productsel :pagination="pagination" @pageChange="pageChange" @productsel="productsel" v-model="productDialog" :multi="false" :showData="showData" :gridData="gridData" /> -->
		<linksel :pagination="pagination" @pageChange="pageChange" @linksel="linksel" v-model="linkDialog" :multi="false" :showData="showData" :gridData="gridData" />
	</div>

</template>

<script>
import { doPost, doGet } from '@/api/api'
import productsel from './productsel'
import linksel from './linksel'
export default {
	props: {
		item: {
			type: Object,
		}
	},
	computed: {
	},
	data() {
		return {
			linkType: this.item.linkType || '',
			temporarylink: '',
			linkDialog: false,
			showData: [],
			productData: [
				{ prop: 'image.url', label: 'image', width: 120, type: 'image' },
				{ prop: 'name.en', label: 'name', width: 120, type: 'string' },
				{ prop: 'price', label: 'price', width: 120, type: 'string' },
			],
			shoppingmallpageData: [
				{ prop: 'pageTitle.en', label: 'pageTitle', width: 120, type: 'string' },
				{ prop: 'createdAt', label: 'createdAt', width: 120, type: 'string' },
				{ prop: 'status', label: 'status', width: 120, type: 'string' },
			],
			shoppingmallcategoryData: [
				{ prop: 'image.url', label: 'image', width: 120, type: 'image' },
				{ prop: 'name.en', label: 'name', width: 120, type: 'string' },
				{ prop: 'products.length', label: 'quantity', width: 120, type: 'string' },
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
			delete this.item[this.item.linkType];
			delete this.item.linkType;
			this.linkType = '';
		},
		handleCommand(command) {
			if (this.temporarylink !== command) {
				this.pagination = {
					currentPage: 1,
					total: 50,
				}
				this.temporarylink = command;
			}
			switch (command) {
				case 'product': this.productsGet(); break;
				case 'storeTopPage': this.storeTopPageGet(); break;
				case 'shoppingMallCategory': this.shoppingMallCategoryGet(); break;
				// case 'category': this.categoryLink(); break;
			}
		},
		linksel(links) {
			this.item.linkType = this.temporarylink;
			this.item[this.item.linkType] = links[0]['_id'];
			this.linkType = this.item.linkType;
			this.linkDialog = false;
		},
		pageChange(val) {
			this.pagination.currentPage = val;
			this.handleCommand(this.temporarylink);
		},
		productsGet() {
			this.gridData = [];
			this.showData = this.productData;
			doGet('/products', { p: this.pagination.currentPage - 1 }).then(res => {
				console.log(res);
				this.pagination.total = parseInt(res.headers['x-total-count']);
				this.gridData = res.data;
				this.linkDialog = true;
			})
		},
		storeTopPageGet() {
			this.gridData = [];
			this.showData = this.shoppingmallpageData;
			doGet('/shopping-malls/' + this.shoppingMallId + '/shopping-mall-pages', { p: this.pagination.currentPage - 1 }).then(res => {
				console.log(res);
				this.pagination.total = parseInt(res.headers['x-total-count']);
				this.gridData = res.data;
				this.linkDialog = true;
			})
		},
		shoppingMallCategoryGet() {
			this.gridData = [];
			this.showData = this.shoppingmallcategoryData;
			doGet('/shopping-malls/' + this.shoppingMallId + '/shopping-mall-categories', { p: this.pagination.currentPage - 1 }).then(res => {
				console.log(res);
				this.pagination.total = parseInt(res.headers['x-total-count']);
				this.gridData = res.data;
				this.linkDialog = true;
			})
		}
	},
	filters: {
		strLenFilter(str) {
			if (str.length > 15) {
				return str.substring(0, 15) + '...';
			}
			return str;
		}
	},
	components: {
		productsel,
		linksel
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
    border-color: rgba(51, 136, 255, 0.3);
    color: rgb(102, 102, 102);
    background: rgb(226, 243, 255);
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
