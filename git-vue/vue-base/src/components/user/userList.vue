<template>
  <div :style="{height:mainHeight-40+'px'}">
    <div style=" position: relative; top: 3%; left: 3%;height:6%;width:96%;">
      <el-button type="primary"   @click="addUser" >新增用户</el-button>
      <el-button type="primary" >新增分组</el-button>
      <el-button type="primary" >导入用户</el-button>
      <el-button type="primary" >批量删除</el-button>
    </div>
    <div class="div-der" style="top: 1%;">
      <el-divider ></el-divider>
    </div>
    <zTreeVue style="width:15%;height:85%;float:left;"></zTreeVue>
    <div style=" width: 81%; height: 85%; float: left; left: 2%; position: relative; top: 2%;">
      <div style="width:100%;height:5%;float:left;">
        <span style="float: left; position: relative; left: 3%; color: blueviolet; top: 10%;">北京数典科技有限公司---技术部---设计组</span>
        <el-button style="float: right;right: 3%; position: relative;" type="primary" size="mini" >添加</el-button>
      </div>
      <div style="width:100%;height:90%;float:left;border:1px solid #E9E9E9;">
        <el-table :data="tableData" id="userTable" style="height: 100%;padding: 10px 0;" >
          <el-table-column  type="selection" width="25"></el-table-column>
          <el-table-column  prop="id"  label="序号"  width="50" align="center" > </el-table-column>
          <el-table-column  prop="state"  label="头像"   align="center" >
              <template >
                <img style="width: 20%;" src="../../assets/touxiang.jpg" />                
              </template>
          </el-table-column>
          <el-table-column  prop="basicInfo"  label="姓名"  width="400" align="center"></el-table-column>
          <el-table-column  prop="activityTime"  label="工号"  sortable align="center" ></el-table-column>
          <el-table-column  prop="address"  label="部门"  align="center" ></el-table-column>
          <el-table-column  prop="creator"  label="电话"   align="center" ></el-table-column>
          <el-table-column  prop="createTime"  label="邮箱"  sortable align="center" ></el-table-column>         
          <el-table-column   label="操作"  align="center" >
            <template >
              <el-button
                size="mini"
               >编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination style="margin-left: 25%; float: left; width: 100%; height: 5%;"  @current-change="handleCurrentChange"
                         @prev-click="prevClick"
                         @next-click="nextClick"
                        :current-page="currentPage"  background  layout=" jumper , prev, pager, next , total "  :total="total"> </el-pagination>
    </div>

     <!--新增用户-->
    <el-dialog :visible.sync="dialogTableVisible" :close-on-click-modal="dialogTableVisible11" :close-on-press-escape="dialogTableVisible11">
      <div style=" width: 100%;height: 10%;">
        <h2 style="font-size:25px;left: 45%;position: relative;">用户添加</h2>
      </div>      
      <el-form  label-width="120px" style=" width: 75%;position: relative;left: 10%; height: 75%;">
        
        <el-form-item label="用户编码" style="letter-spacing: 8px;">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="用户真实姓名" style="letter-spacing: 1px;">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="用户昵称" style="letter-spacing: 8px;">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="所在部门" style="letter-spacing: 8px;">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="手机" style="letter-spacing: 25px;">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" style="letter-spacing: 25px;">
          <el-input ></el-input>
        </el-form-item>

      </el-form>
      <div style=" width: 100%;height: 6%;">
        <div style="position:relative;left:40%;width:30%;">
          <el-button type="primary" >确认添加</el-button>
          <el-button type="primary" >取消</el-button>
        </div>
        
      </div> 
      
    </el-dialog>

  </div>

  
</template>
<script>
import zTreeVue from "./zTree"
export default {
  components:{
    zTreeVue
  },
  props: {
    mainHeight: Number
  },
  data(){
    return{
      tableData: [],
      total: 0,
      dialogTableVisible:false,
      dialogTableVisible11 : false,
      currentPage: 0
    }
  },
  created(){
     this.getActivityList()
  },
  methods:{
    addUser(){
      this.dialogTableVisible=true
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
  }
}
</script>
<style >
#userTable >.el-table__body-wrapper>table>tbody>tr>td{
padding: 10px 0 !important;
}

#userTable >.el-table__header-wrapper>table>thead>tr>th{
padding: 0 0 !important;
}
</style>