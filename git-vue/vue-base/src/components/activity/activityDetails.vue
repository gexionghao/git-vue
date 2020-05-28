<template v-for="item in activityDetails" :key="item.id">
    <div class="actMainDiv" :style="{height:mainHeight-40+'px'}"  >
      <div style="position: relative;  left: 3%;height:100%;">
        <h2>会议详情</h2>
        <h3>{{activityDetails.theme}}</h3>
        <p style="color: #8a8a7e;  font-weight: 600;">{{activityDetails.mettingTime}}</p>
        <div style="height:5%;float:left;width:100%;">
          <div style="height:100%;float:left;width:5%;">
            <label style="font-weight: 600;font-size: 1.6vh">活动发起人:</label>
          </div>         
          <div style="height:100%;float:left;width:80%;">
            <span style="font-size: small;color: #8a8a7e;">{{activityDetails.creator}}</span> <br>
          </div>         
        </div>

        <div style="height:5%;float:left;width:100%;">
          <div style="height:100%;float:left;width:4%;">
            <label style="font-weight: 600;font-size: 1.6vh">活动地址:</label>
          </div>         
          <div style="height:100%;float:left;width:80%;">
            <span style="font-size: small;color: #8a8a7e;">{{activityDetails.address}}</span> <br>
          </div>         
        </div>

        <div style="height:5%;float:left;width:100%;">
          <div style="height:100%;float:left;width:4%;">
            <label style="font-weight: 600;font-size: 1.6vh">参会人员:</label>
          </div>         
          <div style="height:100%;float:left;width:80%;">
            <span style="font-size: small;color: #8a8a7e;">{{activityDetails.thePeople}}</span> <br>
          </div>         
        </div>

        <div style="height:5%;float:left;width:100%;">
          <div style="height:100%;float:left;width:4%;">
            <label style="font-weight: 600;font-size: 1.6vh">创建时间:</label>
          </div>         
          <div style="height:100%;float:left;width:80%;">
            <span style="font-size: small;color: #8a8a7e;">{{activityDetails.createTime}}</span> <br>
          </div>         
        </div>
        <div style="height:45%;float:left;width:100%;">
          <div style="height:10%;width:100%;">
            <label style="font-weight: 600;font-size: 1.6vh">相关文档:</label>
          </div>
          <div style="height:80%;width:100%;overflow: auto;">
            <div style="height:37%;width:100%;" v-for="item  in activityDetails.documents" :key="item.id" >           
              <template v-if="item.docType==='WORD'">
                <div style="height: 100%;  float: left;  width: 6%;  position: relative;  left: 2%;">
                  <i class="el-icon-my icon-WORD" style="font-size:6vh; position: relative;  top: 20%;"></i>
                </div>
                <div style="position: relative; height: 100%; font-size: 1.7vh;  float: left;  left: 2%;width: 80%;"> 
                  <p>{{item.docName}} </p>
                  <p>{{item.docSize}} </p>
                </div>
                <div style="float: left;  position: relative;  width: 10%;height:100%;color:#588FE5;">           
                    <i class="el-icon-my icon-Clouddownloadstorage" style="cursor: pointer;font-size:6vh; position: relative;  top: 20%;"></i>                 
                    <span style="position: relative;  top: 5%;  left: 10%;cursor: pointer;">下载</span>  
                </div>
              </template>
              <template v-else-if="item.docType==='XLSX'">
                <div style="height: 100%;  float: left;  width: 6%;  position: relative;  left: 2%;">
                  <i class="el-icon-my icon-Microsoft-Excel" style="font-size:6vh; position: relative;  top: 20%;"></i>
                </div>
                <div style="position: relative;  height: 100%; font-size: 1.7vh;  float: left;  left: 2%;width: 80%;"> 
                  <p>{{item.docName}} </p>
                  <p>{{item.docSize}} </p>
                </div>
                <div style="float: left;  position: relative;  width: 10%;height:100%;color:#588FE5;">           
                    <i class="el-icon-my icon-Clouddownloadstorage" style="cursor: pointer;font-size:6vh; position: relative;  top: 20%;"></i>                 
                    <span style="position: relative;  top: 5%;  left: 10%;cursor: pointer;">下载</span>  
                </div>
              </template>
              <template v-else-if="item.docType==='PDF'">
                <div style="height: 100%;  float: left;  width: 6%;  position: relative;  left: 2%;">
                  <i class="el-icon-my icon-PDF" style="font-size:6vh; position: relative;  top: 20%;"></i>
                </div>
                <div style="position: relative; height: 100%;  font-size: 1.7vh;  float: left;  left: 2%;width: 80%;"> 
                  <p>{{item.docName}} </p>
                  <p>{{item.docSize}} </p>
                </div>
                <div style="float: left;  position: relative;   width: 10%;height:100%;color:#588FE5;">           
                    <i class="el-icon-my icon-Clouddownloadstorage" style="cursor: pointer;font-size:6vh; position: relative;  top: 20%;"></i>                 
                    <span style="position: relative;  top: 5%;  left: 10%;cursor: pointer;">下载</span>  
                </div>
              </template>           
            </div>
          </div>
            
         
          
        </div>
        <div style="height:10%;width:100%;float:left;top: 3%;position: relative;">
          <div style="position: relative;  width: 6%;  left: 47%;">
            <el-button type="primary">强制取消</el-button>
          </div>
        </div>
       
      </div>      
    </div>

</template>
<script>
export default {

  props: {
    mainHeight: Number
  },
  data() {
    return {
      activityDetails: {}
    }
  },
  created() {
    this.getActivityDetails()
  },
  methods: {
      getActivityDetails() {
        const that = this
        console.log('getActivityDetails')
        this.axios.get('teatApi/getActivityDetails/' + 1).then((res) => {
          console.info(res)
          if (res.data.code === 200) {
            that.activityDetails = res.data.data
          }
        })
        
      }
  }
}
</script>

<style >
.actMainDiv{
  float: left;
  width: 100%;
}
</style>
