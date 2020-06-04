<template>
  <div :style="{height:mainHeight-40+'px'}">
     <!-- 按钮 -->
    <div style="position: relative;height:10%;width:100%;float:left;border-bottom: 1px solid #E2E4ED;">
      <div style=" position: relative; top: 20%; left: 3%;width:20%;float:left;">
        <el-button type="primary">临时通知</el-button>  
        <el-button type="primary"  >批量删除</el-button>
        
      </div> 
       <div style=" position: relative; top: 20%; right: 3%;width:30%;float:right;">
          <el-input placeholder="请输入内容" class="input-with-select"> <el-button slot="append" icon="el-icon-search"></el-button></el-input>
       </div>
    </div>

    <div style="position:relative;height:90%;width:100%;float:left;background-color: #EDF0F7;">
      <div style="position:relative;height:100%;width:33%;float:left;background-color: #fff;">

        <div style="position:relative;float:left;height:10%;width:100%;border-bottom: 1px solid #E2E4ED;">
          <span style="position: relative;float: left;top: 30%;left: 4%;">活动提醒</span>
          <span style="position: relative;float: right;top: 30%;right: 4%;color: #AAB4F1;">查看更多</span>
        </div>

        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :acitieList="acitieList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{acitieList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{acitieList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{acitieList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :acitieList="acitieList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{acitieList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{acitieList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{acitieList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :acitieList="acitieList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{acitieList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{acitieList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{acitieList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :acitieList="acitieList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{acitieList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{acitieList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{acitieList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :acitieList="acitieList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{acitieList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{acitieList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{acitieList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :acitieList="acitieList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{acitieList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{acitieList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{acitieList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :acitieList="acitieList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{acitieList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{acitieList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{acitieList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
      </div>


      <div style="postion:relative;height:100%;width:33%;float:left;position: relative;left: 0.5%;background-color: #fff;">
        <div style="position:relative;float:left;height:10%;width:100%;border-bottom: 1px solid #E2E4ED;">
          <span style="position: relative;float: left;top: 30%;left: 4%;">系统通知</span>
          <span style="position: relative;float: right;top: 30%;right: 4%;color: #AAB4F1;">查看更多</span>
        </div>

        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :sysetemList="sysetemList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{sysetemList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{sysetemList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{sysetemList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :sysetemList="sysetemList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{sysetemList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{sysetemList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{sysetemList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :sysetemList="sysetemList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{sysetemList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{sysetemList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{sysetemList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :sysetemList="sysetemList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{sysetemList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{sysetemList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{sysetemList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :sysetemList="sysetemList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{sysetemList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{sysetemList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{sysetemList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :sysetemList="sysetemList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{sysetemList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{sysetemList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{sysetemList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
        <div style="position:relative;float:left;height:15%;width:100%;border-bottom: 1px solid #E2E4ED;" :sysetemList="sysetemList">
          <div style="float:left;width:100%;height:30%;">
            <span style=" position: relative;float: left;top: 15%;left: 4%;color:#3166E6">{{sysetemList.title}}</span>
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">{{sysetemList.time}}</span>           
          </div>
          <div style="float:left;width:100%;height:40%;">
            <div style="width: 88%;word-wrap: break-word;position: relative;left: 5%; overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
               {{sysetemList.zhuti}}
            </div>         
          </div>
          <div style="float:left;width:100%;height:30%;">            
            <span style="position: relative;float: right;top: 15%;right: 3%;color: rgb(170, 180, 241);">查看详情>></span>           
          </div>
        </div>
      </div>


      <div style="postion:relative;height:100%;width:33%;float:left;position: relative;left: 1%;">
        <div style="width:100%;height:40%;float:left;position:relative;background-color: #fff;">
          <div style="width:100%;height:12%;float:left;">
            <div style="float:left;width:50%;height:100%;position: relative;left: 5%;">
              <span style=" font-weight: 600; font-family: serif;">历史活动情况统计</span>
            </div>
            <div style="float:right;width:15%;height:100%;"><el-button type="primary"  size="mini">导出</el-button></div>
          </div>
          <div  ref="myEchart" style="width:100%;height:88%;float:left;" ></div>
        </div>
        <div style="width:100%;height:59.5%;float:left;position:relative;top:0.5%;background-color: #fff;">
          <div style="height:15%;width:100%;float:left;">
            <span style="position: relative;left: 7%;top: 20%;font-size: 20px;font-weight: 600;float: left;">固定模板</span>
            <span style="position: relative;right: 8%;top: 20%;color: #a243dc;float: right; cursor: pointer;" @click="editRow()">编辑</span>
          </div>
          <div style="height: 80%;width: 88%;float: left;position: relative;left: 6%;border: 1px solid #DFDFDF;">
            <el-form ref="ruleForm1" :model="ruleForm1" label-width="100px"  style="width: 90%;position: relative;left: 5%; top: 5%;">
              <el-form-item label="通知类型"  style="letter-spacing: 8px;">
                <el-col :span="24">
                  <el-select style="width:100%" v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>

              <el-form-item label="活动主题"  label-width='100px' :label-position="labelPosition" style="letter-spacing: 8px;">
                <el-input v-model="ruleForm1.title"></el-input>
              </el-form-item>

              <el-form-item label="发送时间"  label-width='100px' :label-position="labelPosition" style="letter-spacing: 8px;">
                <el-input v-model="ruleForm1.time"></el-input>
              </el-form-item>

              <el-form-item label="接收人员"  label-width='100px' :label-position="labelPosition" style="letter-spacing: 8px;">
                <el-input v-model="ruleForm1.name"></el-input>
              </el-form-item>

              <el-form-item label="通知内容"  label-width='100px' :label-position="labelPosition" style="letter-spacing: 8px;">
                <el-input v-model="ruleForm1.content"></el-input>
              </el-form-item>


            </el-form>
          </div>
        </div>
      </div>
    </div>

    <!--签到管理查看-->
    <el-dialog  :visible.sync="dialogTableVisible" :close-on-click-modal="dialogTableVisible11" :close-on-press-escape="dialogTableVisible11">
      <div style="width: 10%; position: relative; left: 45%;">
        <h2>临时通知</h2>
      </div>
      <div style="width: 80%; position: relative; left: 10%;">
        <el-form ref="ruleForm" :model="ruleForm" label-width="100px" :label-position="labelPosition" >
        

          <el-form-item label="通知类别"  style="letter-spacing: 3px;">
            <el-col :span="10">
              <el-select style="width:100%" v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-col>
            <el-col style="text-align:center;letter-spacing: 8px;color: #606266;" class="line" :span="4">通知管理</el-col>
            <el-col :span="10">
              <el-form-item prop="date2">
                <el-input v-model="ruleForm.number" ></el-input>
              </el-form-item>
            </el-col>   
          </el-form-item>

           <el-form-item label="通知主题"  style="letter-spacing: 3px;">
            <el-col :span="10">
              <el-form-item prop="date1">
                <el-input v-model="ruleForm.creator" ></el-input>
              </el-form-item>
            </el-col>
            <el-col style="text-align:center;letter-spacing: 8px;color: #606266;" class="line" :span="4">通知部门</el-col>
            <el-col :span="10">
              <el-form-item prop="date2">
                <el-input v-model="ruleForm.number" ></el-input>
              </el-form-item>
            </el-col>   
          </el-form-item>

          <el-form-item label="发送时间"  style="letter-spacing: 8px;">
            <el-col :span="10">
              <el-form-item prop="date1">
                <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>

          <el-form-item label="接收人员" style="letter-spacing: 8px;">
            <el-col :span="22">
              <el-input v-model="ruleForm.popleArr" ></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="通知内容"  style="letter-spacing: 8px;">
            <el-col :span="22">
              <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="请输入内容" v-model="textarea2"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="信息公开" style="letter-spacing: 8px;">
            <el-col :span="22">
               <el-input v-model="ruleForm.tixing" ></el-input>
            </el-col>
          </el-form-item>


          
          <el-form-item style="text-align: center">
            <el-button type="primary"   >确认</el-button>
            <el-button type="primary"   >取消</el-button>
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
  data(){
    return{
      labelPosition:"left",
      acitieList:{
        title:'活动取消通知',
        time:'13:42',
        zhuti:'主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加'
      },
      sysetemList:{
        title:'系统通知',
        time:'13:42',
        zhuti:'您的预约活动已经预约成功'
      },
      ruleForm1: {
        content:'空间管理云平台系统研发技术问题协调会',
        name:'李丽丽',
        time:'2020-03-04',
        title:'综合空间1'
      
      },
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
      },
      dialogTableVisible: false,
      dialogTableVisible11:false,
      textarea2: '主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加主题为《关于云平台系统研发技术研讨会相关内容》还有30分钟，请准时参加'

    }
  },
  mounted() {
    //  const myEchart = this.$refs.myEchart
    //  console.log(myEchart)
    //  this.lineEchart(myEchart)
    this.lineEchart()
    
  },
  methods: {
    lineEchart(){
      const  myEchart = this.$refs.myEchart   
      
      let myLineEchart =this.$echarts.init(myEchart);
      myLineEchart.setOption({ 
          tooltip:{
              show:true,
              trigger:'axis',
              axisPointer: {
                  type: 'shadow'
              }
            },
         
          grid:{
            top:10,
            bottom:30           
          },   
          xAxis: {
            splitLine:{
              show:false
            }, 
            axisTick:{
              show:false
            },          
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          },
          yAxis: {
            splitLine:{
              show:false
            }, 
            axisTick:{
              show:false
            },
            type: 'value'
          },
          series: [{
              data: [0, 100, 300, 200, 600, 100, 800,300,700,200,600,900],
              type: 'line',
              smooth:true,
              lineStyle:{                                 
                color:'#18B3FB'                                               
              },
              itemStyle : { 
                normal: {
                  label : {
                    show: true
                  }
                }
              }
          },{
              data: [0, 200, 400, 300, 700, 300, 1100,500,800,300,700,1000],
              type: 'line',
              smooth:true,
              lineStyle:{                                 
                color:'#18B3FB'                                               
              },
              itemStyle : { 
                normal: {
                  label : {
                    show: true
                  }
                }
              }
          }]

      })
    },
    editRow(){
      this.dialogTableVisible=true
    }
  }
  
}
</script>
<style >

</style>
