<template>
  <div :style="{height:mainHeight-40+'px'}">
    <div style="width: 10%; position: relative; left: 45%;">
       <h2>活动预约</h2>
    </div>
    <div style="width: 50%; position: relative; left: 25%;">
      <el-form ref="ruleForm" :model="ruleForm" label-width="100px" :label-position="labelPosition">
        <el-form-item label="活动主题"  label-width='100px' :label-position="labelPosition" style="letter-spacing: 8px;">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="活动创建人"  style="letter-spacing: 3px;">
          <el-col :span="10">
            <el-form-item prop="date1">
              <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col style="text-align:center;letter-spacing: 8px;color: #606266;" class="line" :span="4">参与人数</el-col>
          <el-col :span="10">
            <el-form-item prop="date2">
              <el-date-picker type="datetime" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>   
        </el-form-item>

        <el-form-item label="开始时间"  style="letter-spacing: 8px;">
          <el-col :span="10">
            <el-form-item prop="date1">
              <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col style="text-align:center;letter-spacing: 8px;color: #606266;" class="line" :span="4">结束时间</el-col>
          <el-col :span="10">
            <el-form-item prop="date2">
              <el-date-picker type="datetime" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label="活动参与人员" >
          <el-col :span="22">
            <el-input v-model="ruleForm.name"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="空间选择"  style="letter-spacing: 8px;">
          <el-col :span="22">
            <el-select style="width:100%" v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item label="活动提醒" style="letter-spacing: 8px;">
          <el-col :span="22">
            <el-select style="width:100%" v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item label="签到有效时间" >
          <el-col :span="22">
            <el-select style="width:100%"  v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item label="准备时间" style="letter-spacing: 8px;">
          <el-col :span="10">
            <el-form-item prop="date1">
              <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col style="text-align:center;letter-spacing: 8px;color: #606266;" class="line" :span="4">后勤服务</el-col>
          <el-col :span="10">
            <el-form-item prop="date2">
              <el-date-picker type="datetime" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item class="upBt">
          <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>上传附件
        </span>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="primary"   >提交</el-button>
        </el-form-item>
        
       
      </el-form>
    </div>
   

  </div>
</template>
<script>
export default {
  props: {
      mainHeight: Number
  },
  data(){
      return{
        labelPosition:"left",
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
  }
}
</script>
<style >
.upBt .el-form-item__content{
  margin-left: 0px ! important;
}
</style>