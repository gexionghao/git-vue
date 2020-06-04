<template>
  <div :style="{height:mainHeight-40+'px'}"  >
    <!-- 按钮 -->
    <div style=" position: relative; top: 3%; left: 3%;height:6%;width:100%;">     
      <el-button type="primary"  @click="addMyselgTab"  >活动预约</el-button>
      <el-button type="primary"  @click="deleteSelectTableRow">批量删除</el-button>
    </div>

    <!-- table -->
    <div style="position: relative; top: 4%; left: 1%;width:100%;height:80%;">
      <el-table :data="tableData" @select="selectTableRow" @select-all="selectTableRow">
        <el-table-column type="selection" width="25"></el-table-column>
        <el-table-column  prop="id"  label="序号"  width="50" align="center" > </el-table-column>
        <el-table-column  prop="basicInfo"  label="活动基本信息"  width="400" align="center"></el-table-column>
        <el-table-column  prop="activityTime"  label="活动时间"  sortable align="center" ></el-table-column>
        <el-table-column  prop="address"  label="地点"  align="center" ></el-table-column>
        <el-table-column  prop="creator"  label="创建人"   align="center" ></el-table-column>
        <el-table-column  prop="createTime"  label="审核人"  sortable align="center" ></el-table-column>
        <el-table-column  prop="state"  label="状态"   align="center" :formatter=stateFormatter>
            <template slot-scope="scope">
              <span v-if="scope.row.state==='待审核'" style="color:darkgray">{{scope.row.state}}</span>
              <span v-else-if="scope.row.state==='已预约'" style="color:blue">{{scope.row.state}}</span>
              <span v-else-if="scope.row.state==='进行中'" style="color:pink">{{scope.row.state}}</span>
              <span v-else-if="scope.row.state==='已取消'" style="color:red">{{scope.row.state}}</span>
              <span v-else-if="scope.row.state==='已结束'" style="color:green">{{scope.row.state}}</span>
            </template>
        </el-table-column>
        <el-table-column   label="操作"  align="center" >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="editRow(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

     <!-- 底部分页 -->
    <div style="height: 6%;  position: relative;  float: left;  width: 100%;  top: 6%;">

      <div style="float: left; width:100%; position: relative;  left: 26%;">
        <el-pagination   @current-change="handleCurrentChange"
                         @prev-click="prevClick"
                         @next-click="nextClick"
                        :current-page="currentPage"  background  layout=" jumper , prev, pager, next , total "  :total="total"> </el-pagination>
      </div>
    </div>

    <el-dialog  :visible.sync="dialogTableVisible" :close-on-click-modal="dialogTableVisible11" :close-on-press-escape="dialogTableVisible11">
      <div style="width: 10%; position: relative; left: 45%;">
        <h2>活动详情</h2>
      </div>
      <div style="width: 80%; position: relative; left: 10%;">
        <el-form ref="ruleForm" :model="ruleForm" label-width="100px" :label-position="labelPosition" >
          <el-form-item label="活动主题"  label-width='100px' :label-position="labelPosition" style="letter-spacing: 8px;">
            <el-input v-model="ruleForm.title" :disabled="disabled"></el-input>
          </el-form-item>

          <el-form-item label="活动创建人"  style="letter-spacing: 3px;">
            <el-col :span="10">
              <el-form-item prop="date1">
                <el-input v-model="ruleForm.creator" :disabled="disabled"></el-input>
              </el-form-item>
            </el-col>
            <el-col style="text-align:center;letter-spacing: 8px;color: #606266;" class="line" :span="4">参与人数</el-col>
            <el-col :span="10">
              <el-form-item prop="date2">
                <el-input v-model="ruleForm.number" :disabled="disabled"></el-input>
              </el-form-item>
            </el-col>   
          </el-form-item>

          <el-form-item label="活动时间"  label-width='100px' :label-position="labelPosition" style="letter-spacing: 8px;">
            <el-input v-model="ruleForm.activeTime" :disabled="disabled"></el-input>
          </el-form-item>

          <el-form-item label="活动参与人员" >
            <el-col :span="22">
              <el-input v-model="ruleForm.popleArr" :disabled="disabled"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="空间选择"  style="letter-spacing: 8px;">
            <el-col :span="22">
              <el-input v-model="ruleForm.baseSele" :disabled="disabled"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="活动提醒" style="letter-spacing: 8px;">
            <el-col :span="22">
               <el-input v-model="ruleForm.tixing" :disabled="disabled"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="签到有效时间" >
            <el-col :span="22">
               <el-input v-model="ruleForm.signTime" :disabled="disabled"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="准备时间" style="letter-spacing: 8px;">
            <el-col :span="10">
              <el-form-item prop="date1">
                 <el-input v-model="ruleForm.zbTime" :disabled="disabled"></el-input>
              </el-form-item>
            </el-col>
            <el-col style="text-align:center;letter-spacing: 8px;color: #606266;" class="line" :span="4">后勤服务</el-col>
            <el-col :span="10">
              <el-form-item prop="date2">
                 <el-input v-model="ruleForm.baseSele" :disabled="disabled"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item class="upBt">
            <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>上传附件
          </span>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button type="primary"   >审核通过</el-button>
            <el-button type="primary"   >审核不通过</el-button>
            <el-button type="primary"   >强制取消</el-button>
          </el-form-item>
          
        
        </el-form>
      </div>

    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
      mainHeight: Number
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogTableVisible11:false,
      disabled:true,
      tableData: [],
      selseTableRowList: [],
      total: 0,
      currentPage: 0,
      labelPosition:"left",
      ruleForm: {
        title:'空间管理云平台系统研发技术问题协调会',
        creator:'李丽丽',
        number:'25人',
        activeTime:'2020-03-04  9:00-11:30(150分钟)',
        popleArr:'张明明、李明明、刘德华、张柏芝、谢霆锋、王菲、李亚鹏、陈冠希',
        baseSele:'综合空间1',
        tixing:'提前30分钟',
        signTime:'活动开始后15分钟',
        zbTime:'15分钟'
      }
    }
  },
  created() {
    this.getActivityList()
  },
  methods: {
     deleteSelectTableRow() {
      const rowList = this.selseTableRowList
      let rowIds = ''
      rowList.forEach(function(row) {
          if (rowIds.length < 1) {
            rowIds += row.id + ''
          }
          rowIds += ',' + row.id + ''
      })
      const that = this
      this.axios({
        method: 'delete',
        url: 'testApi/deleteRows',
        params: {
          ids: rowIds
        }
      }).then(function(res) {
        console.info(res.data)
          that.$message.success('删除成功' + res.data.data)
      })
    },
    selectTableRow(selection) {
      console.info(selection)
      this.selseTableRowList = selection
    },
    getActivityList() {
      this.axios({
        url: 'testApi/getActivityList',
        method: 'get'

      }).then((res) => {
        if (res.data.code) {
          this.tableData = res.data.data.data
          this.total = res.data.data.total
        }
      })
    },
    //
    handleCurrentChange(pageIndex) {
      const that = this
      this.axios({
        method: 'post',
        url: 'testApi/getCurrentList',
        params: {
          pageIndex: pageIndex
        }

      }).then(function(res) {
          if (res.data.code === 200) {
            that.tableData = res.data.data.data
            that.total = res.data.data.total
          }
          
        }
      )
    },
    prevClick(index) {
       this.handleCurrentChange(index)
    },
    nextClick(index) {
       this.handleCurrentChange(index)
    },
    stateFormatter(row, cloum) {
      console.log(row)
      console.log(cloum)
    },
    editRow() {
      // console.log(row)
      // const params = {
      //     id: row.id + 100,
      //     lable: 'activitySee',
      //     menuName: '活动详情'

      // }
     this.dialogTableVisible=true 
    },
    addMyselgTab(){
      console.log("111")
      const params = {
          id: '10000',
          lable: 'appointShow',
          menuName: '活动预约'

      }
      this.$emit('addTab', params)
    }
  }

}
</script>
<style>

</style>
