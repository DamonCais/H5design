<!-- Table -->
<template>
<div>
  <el-dialog 
    :before-close="handleClose"
    :title="title" 
    v-if="dialogVisible" 
    :visible.sync="visible"
    :show-close="false">
    <el-table 
      ref="multipleTable"
      v-if="dialogVisible"
      class="table"
      :data="gridData"
      height="500"
      @select-all="handleSelectionChange"
      @select="handleSelectionChange">
    <el-table-column width="55" v-if="!multi" fixed>
      <template slot-scope="scope">
          <input type="radio" name="select" v-model="picked" :value="scope.row['_id']" >
      </template>
    </el-table-column>
    <el-table-column width="55"  type="selection"  v-if="multi" fixed>
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
        <el-button v-if="item.type ==='button'" @click="toUrl(item.url + scope.row._id)">{{item.prop}}</el-button>
      </div>
    </template>
    </el-table-column>

    </el-table>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="params.pageSize||10"
        :total="total">
      </el-pagination>
    </div>
    <div slot="footer" class="dialog-footer">
        <el-button @click="cancleSelect">取消</el-button>
        <el-button type="primary" @click="userSelect">确定</el-button>
    </div>
  </el-dialog>
<!-- Form -->
</div>

</template>

<script>
import _ from "lodash";
import { doPost } from "@/api/api";
export default {
  props: {
    url: {
      type: String,
      default: ""
    },
    params: {
      type: Object,
      default: {}
    },
    title: {
      type: String,
      default: "GUZZU弹框"
    },
    showData: {
      type: Array,
      default: []
    },
    multi: {
      type: Boolean,
      default: false
    },
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      gridData: [],
      multipleSelection: [],
      users: [],
      picked: "",
      visible: false,
      currentPage: 1,
      total: 0,
      val: []
    };
  },
  filters: {
    lodash(value, key) {
      return _.get(value, key);
    },
    deepGet(value,path){
      return (!Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path).reduce((o, k) => (o || {})[k], value) || undefined;
    }
  },
  methods: {
    toUrl(val){
      console.log(val);
    },
    handleClose(done) {},
    toggleSelection(obj) {
      obj.forEach(row => {
        this.$refs.multipleTable.toggleRowSelection(row);
      });
    },
    getUsers() {
      this.gridData = [];
      doPost(this.url, this.params).then(result => {
        console.log(result.data);
        this.total = result.data.total;
        this.gridData = result.data.results;
        if (!this.multipleSelection[this.currentPage]) return;
        let obj = this.gridData.filter(
          d => this.multipleSelection[this.currentPage].indexOf(d._id) !== -1
        );
        setTimeout(() => {
          this.toggleSelection(obj);
        }, 20);
      });
    },
    userSelect() {
      this.visible = false;
      this.users = [];
      if (this.multi) {
        this.multipleSelection.forEach(element => {
          this.users.push(...element);
        });
      } else {
        this.users.push(this.picked);
      }
      this.$emit("userSelect", this.users);
    },
    cancleSelect() {
      this.visible = false;

      this.$emit("cancleSelect");
    },
    handleSelectionChange(val) {
      let arr = [];
      val.forEach(element => {
        arr.push(element._id);
      });
      this.multipleSelection[this.currentPage] = arr;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.params["page"] = this.currentPage;
      this.getUsers();
    }
  },
  watch: {
    dialogVisible() {
      if (this.dialogVisible) {
        this.visible = this.dialogVisible;
        this.params.page = 1;
        this.currentPage = this.params.page;
        this.multipleSelection = [];
        this.getUsers();
      }
    },
    visible() {
      if (!this.visible) {
        this.cancleSelect();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  max-height: 600px;
}
.block {
  text-align: right;
  margin: 10px 10px 0 0;
}
</style>