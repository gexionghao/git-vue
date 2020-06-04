<template>
  <div :style="{height:mainHeight-40+'px'}">
    <div style="width:75%;height:100%;float:left;background-color: #fff;position: relative;">
      <div style="height:10%;width:100%;float:left;">
        <div style=" position: relative; top: 20%; left: 3%;width:50%;float:left;">
          <el-button type="primary">上传文件</el-button>
          <el-button type="primary">批量下载</el-button>
          <el-button type="primary">批量删除</el-button>

        </div>
        <div style=" position: relative; top: 20%; right: 3%;width:30%;float:right;">
          <el-input placeholder="请输入内容" class="input-with-select"> <el-button slot="append" icon="el-icon-search"></el-button></el-input>
       </div>
      </div>
      <div style="height:90%;width:100%;float:left;">
        <el-table :data="tableData" >
          <el-table-column type="selection" width="25"></el-table-column>
          <el-table-column  prop="id"  label="序号"  width="50" align="center" > </el-table-column>
          <el-table-column  prop="basicInfo"  label="活动基本信息"  width="400" align="center"></el-table-column>
          <el-table-column  prop="activityTime"  label="活动时间"  sortable align="center" ></el-table-column>
          <el-table-column  prop="address"  label="地点"  align="center" ></el-table-column>
          <el-table-column  prop="creator"  label="创建人"   align="center" ></el-table-column>
          <el-table-column  prop="createTime"  label="创建时间"  sortable align="center" ></el-table-column>
          <el-table-column   label="操作"  align="center" >
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="editRow(scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>        
      </div>
    </div>
    <div style="width:24%;height:100%;float:left;background-color: #fff;position: relative;left:1%;">
      <div style="width:100%;height:40%;float:left;">
        <div style="width:100%;height:20%;float:left;">
          <span style=" position: relative;left: 5%;top: 25%;font-weight: 600;font-family: fantasy;">文件数据</span>
          <el-button style="position: relative;float: right;right: 10%;top: 20%;" type="primary" size="mini">导出</el-button>
        </div>
        <div style="width:100%;height:80%;float:left;">
          <div  ref="pieBase" style="width:100%;height:100%;float:left;position:relative;"></div>
        </div>
      </div>
      <div style="width:100%;height:60%;float:left;">
        <div style="width:100%;height:15%;float:left;margin-top:1%;">
          <div style="width: 20%;height: 100%;float: left;position: relative;left: 5%;">
            <img style="width: 100%;height:100%;"  src="../../assets/touxiang.jpg"/>
          </div>
          <div style="width: 45%;height: 100%;float: left;position: relative;left: 8%;">
            <div style="width:100%;height: 50%;align-items: center;display: flex;">图片</div>
            <div style="width:100%;height: 50%;align-items: center;display: flex;">2679   files</div>
          </div>
          <div style="width: 20%;height: 100%;position: relative;float: left;left: 10%;"></div>
        </div>
        <div style="width:100%;height:15%;float:left;margin-top:1%;">
          <div style="width: 20%;height: 100%;float: left;position: relative;left: 5%;">
            <img style="width: 100%;height:100%;"  src="../../assets/touxiang.jpg"/>
          </div>
          <div style="width: 45%;height: 100%;float: left;position: relative;left: 8%;">
            <div style="width:100%;height: 50%;align-items: center;display: flex;">图片</div>
            <div style="width:100%;height: 50%;align-items: center;display: flex;">2679   files</div>
          </div>
          <div style="width: 20%;height: 100%;position: relative;float: left;left: 10%;"></div>
        </div>
        <div style="width:100%;height:15%;float:left;margin-top:1%;">
          <div style="width: 20%;height: 100%;float: left;position: relative;left: 5%;">
            <img style="width: 100%;height:100%;"  src="../../assets/touxiang.jpg"/>
          </div>
          <div style="width: 45%;height: 100%;float: left;position: relative;left: 8%;">
            <div style="width:100%;height: 50%;align-items: center;display: flex;">图片</div>
            <div style="width:100%;height: 50%;align-items: center;display: flex;">2679   files</div>
          </div>
          <div style="width: 20%;height: 100%;position: relative;float: left;left: 10%;"></div>
        </div>
        <div style="width:100%;height:15%;float:left;margin-top:1%;">
          <div style="width: 20%;height: 100%;float: left;position: relative;left: 5%;">
            <img style="width: 100%;height:100%;"  src="../../assets/touxiang.jpg"/>
          </div>
          <div style="width: 45%;height: 100%;float: left;position: relative;left: 8%;">
            <div style="width:100%;height: 50%;align-items: center;display: flex;">图片</div>
            <div style="width:100%;height: 50%;align-items: center;display: flex;">2679   files</div>
          </div>
          <div style="width: 20%;height: 100%;position: relative;float: left;left: 10%;"></div>
        </div>
        <div style="width:100%;height:15%;float:left;margin-top:1%;">
          <div style="width: 20%;height: 100%;float: left;position: relative;left: 5%;">
            <img style="width: 100%;height:100%;"  src="../../assets/touxiang.jpg"/>
          </div>
          <div style="width: 45%;height: 100%;float: left;position: relative;left: 8%;">
            <div style="width:100%;height: 50%;align-items: center;display: flex;">图片</div>
            <div style="width:100%;height: 50%;align-items: center;display: flex;">2679   files</div>
          </div>
          <div style="width: 20%;height: 100%;position: relative;float: left;left: 10%;"></div>
        </div>
        <div style="width:100%;height:15%;float:left;margin-top:1%;">
          <div style="width: 20%;height: 100%;float: left;position: relative;left: 5%;">
            <img style="width: 100%;height:100%;"  src="../../assets/touxiang.jpg"/>
          </div>
          <div style="width: 45%;height: 100%;float: left;position: relative;left: 8%;">
            <div style="width:100%;height: 50%;align-items: center;display: flex;">图片</div>
            <div style="width:100%;height: 50%;align-items: center;display: flex;">2679   files</div>
          </div>
          <div style="width: 20%;height: 100%;position: relative;float: left;left: 10%;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
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
  mounted(){
     this.lineEchart()
  },
  methods:{
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
    lineEchart(){
      const  pieBase = this.$refs.pieBase
      let mypieBase =this.$echarts.init(pieBase);
      mypieBase.setOption({ 
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        
        color : [ '#2D68EA', '#2ACCBF', '#8C8C8C'],
        series: [
         {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: ['0%', '25%'],
            label: {
              normal:{
                    color:'#fff',
                    show: true,
                    position: 'center',
                }  
            },
            labelLine: {
                show: false
            },
            data: [
              {value: 335, name: '使用率\n'+50+'%'}
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['60%', '85%'],
            label: {
               position: 'inner',
               fontSize:'0'
            },
            data: [
                {value: 335, name: '使用率'},
                {value: 310, name: '空闲率'}
            ]
          }
        ]
      })
    }
  }
}
</script>

<style >

</style>