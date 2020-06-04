<template>
  <div :style="{height:mainHeight-40+'px'}"  >
    <!-- 按钮 -->
    <div style=" position: relative; top: 3%; left: 3%;height:6%;width:100%;">
      <el-button type="primary" >批量删除</el-button>

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
        <el-table-column  prop="createTime"  label="应到人数"  sortable align="center" ></el-table-column>
        <el-table-column  prop="state"  label="实到人数"   align="center" ></el-table-column>
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

    <!--签到管理查看-->
    <el-dialog title="签到管理" :visible.sync="dialogTableVisible" :close-on-click-modal="dialogTableVisible11" :close-on-press-escape="dialogTableVisible11">
      <h2>主题：空间管理云平台系统研发技术问题协调会</h2>
      <h3>2020.03.02  周二   13:30 - 15:30</h3>
      <div>
          <div style="float: left;  left: 1%;  position: relative;">
            <label style="font-weight: 600;font-size: 1.6vh">活动发起人:</label>
            <span style="font-size: small;color: #8a8a7e;">shirley  (123456790)</span>
          </div>
          <div style="float: left;  left: 25%;  position: relative;">
            <label style="font-weight: 600;font-size: 1.6vh">活动地址:</label>
            <span style="font-size: small;color: #8a8a7e;">上地国际科技创业园</span>
          </div>
          <div style="float: right;    position: relative;">
            <label style="font-weight: 600;font-size: 1.6vh">创建时间:</label>
            <span style="font-size: small;color: #8a8a7e;">2020-02-06   14:30</span>
          </div>
          
      </div>
      <el-table :data="gridData" style="height: 80%;">
        <el-table-column type="selection" width="25"></el-table-column>
        <el-table-column prop="id"  label="序号"  width="50" align="center" > </el-table-column>
        <el-table-column property="date" label="部门" align="center"></el-table-column>
        <el-table-column property="name" label="姓名" align="center"></el-table-column>
        <el-table-column property="name" label="工号" align="center"></el-table-column>
        <el-table-column property="name" label="签到情况" align="center"></el-table-column>
        <el-table-column property="name" label="签到时间" align="center"></el-table-column>
      </el-table>
      <el-pagination style="margin-left: 15%;"  @current-change="handleCurrentChange"
                         @prev-click="prevClick"
                         @next-click="nextClick"
                        :current-page="currentPage"  background  layout=" jumper , prev, pager, next , total "  :total="total"> </el-pagination>
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
      tableData: [],
       gridData: [{
          id:'1',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'2',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'3',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'4',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'5',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'6',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'7',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'8',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'9',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'10',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      selseTableRowList: [],
      total: 0,
      currentPage: 0
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
      // this.$emit('addTab', params)
      this.dialogTableVisible=true
    }
  }

}
</script>
<style>
.el-dialog{
  border-radius: 10px
}
.el-dialog__body{
  height: 700px;
}
.el-dialog{
  margin-top: 6vh !important;
}
</style>
