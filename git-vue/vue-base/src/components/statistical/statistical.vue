<template>

    <div class="homeMian" :style="{height:mainHeight-40+'px'}">
      <!-- 活动场数 -->
      <div style="width:100%;height:15%;position: relative; top: 3%;float: left;">
         <template  v-for="item in activityBlock" >
        <div class="top-black-echart" :key="item.id">
          <div class="top-black-up-echart">
            <div style="width: 40%;float: left;height: 100%;">图片</div>
            <div style="position: relative;float: left; width: 60%;b height: 100%; color: blue;height: 100%;">
              <span style="position: relative;top: 30%;font-size: 40px;">{{item.count}}</span>
              <span style="position: relative;left: 40%;top: 20%;">场</span>
            </div>
          </div>
          <div class="top-black-down-echart">
            <span>{{item.content}}</span>
          </div>
        </div>
      </template>
      </div>
     

      <!-- 统计图模块-->
      <div style="width:100%;height:75%;position:relative;top:6%;float:left;">
        <div style="width:100%;height:50%;position:relative;float:left;">
          <div style="width:47%;height:100%;float:left;position:relative;left: 3%;" >
              <div style="width:100%;height:12%;float:left;">
                <div style="float:left;width:50%;height:100%;position: relative;left: 5%;">
                  <span style=" font-weight: 600; font-family: serif;">历史活动情况统计</span>
                </div>
                <div style="float:right;width:10%;height:100%;"><el-button type="primary"  size="mini">导出</el-button></div>
              </div>
              <div  ref="myEchart" style="width:100%;height:88%;float:left;" ></div>
          </div>
          <div style="width:47%;height:100%;float:left;position:relative;left: 4%;">
            <div style="width:100%;height:12%;float:left;">               
                <div style="float:left;width:45%;height:100%;position: relative;left: 5%;">
                  <span style=" font-weight: 600; font-family: serif;">空间使用情况</span>
                </div>
                <div style="float:left;width:50%;height:100%;">
                  <div style="float:left;width:45%;height:100%;position: relative;left: 5%;">
                    <span style=" font-weight: 600; font-family: serif;">设备使用情况统计</span>
                  </div>
                  <div style="float:right;width:15%;height:100%;position: relative;left: 5%;">
                    <el-button type="primary"  size="mini">导出</el-button>
                  </div>
                  
                </div>
              </div>
              <div  style="width:100%;height:88%;float:left;" >
                <div  ref="pieBase" style="width:50%;height:100%;float:left;position:relative;"></div>
                <div  ref="pieDevice" style="width:50%;height:100%;float:left;position:relative;"></div>
              </div>
          </div>
        </div>
        <div style="width:100%;height:50%;position:relative;float:left;">
          <div style="float: left;height:10%;width:100%;position:relative;">
            <div style="float:left;width:45%;height:100%;position: relative;left: 2%;">
              <span style=" font-weight: 600; font-family: serif;">系统数据统计</span>
            </div>
            <div style="float:right;width:5%;height:100%;position: relative;">
              <el-button type="primary"  size="mini">导出</el-button>
            </div>
          </div>
          <div style="float: left; width: 96%;position: relative; left: 2%;">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column  prop="date"  align="center" label="日期"  ></el-table-column>
                <el-table-column  prop="one"  align="center" label="1月"  ></el-table-column>
                <el-table-column  prop="two"  align="center" label="2月"></el-table-column>
                <el-table-column  prop="three"  align="center" label="3月"  ></el-table-column>
                <el-table-column  prop="four"  align="center" label="4月"></el-table-column>
                <el-table-column  prop="five"  align="center" label="5月" ></el-table-column>
                <el-table-column  prop="six"  align="center" label="6月"></el-table-column>
                <el-table-column  prop="seven"  align="center" label="7月" ></el-table-column>
                <el-table-column  prop="eight"  align="center" label="8月"></el-table-column>
                <el-table-column  prop="nine"  align="center" label="9月"  ></el-table-column>
                <el-table-column  prop="ten"  align="center" label="10月"></el-table-column>
                <el-table-column  prop="eleven"  align="center" label="11月"  ></el-table-column>
                <el-table-column  prop="twelve"   align="center" label="12月"></el-table-column>
              </el-table>
          </div>
        </div>
      </div>

   
      
    </div>
</template>
<script>
// import myCalendar from './calemdar/myCalendar'
//import 'fullcalendar/dist/fullcalendar.css'
export default {
  components: {
    // myCalendar
  },
  props: {
    mainHeight: Number
  },
  data() {
    return {
      tableData: [{
          date: '活动预约(场)',
          one: '20',
          two: '21',
          three:'22',
          four:'23',
          five:'24',
          six:'25',
          seven:'26',
          eight:'27',
          nine:'28',
          ten:'29',
          eleven:'30',
          twelve:'31'        
        }, {
          date: '举办活动(场)',
          one: '20',
          two: '21',
          three:'22',
          four:'23',
          five:'24',
          six:'25',
          seven:'26',
          eight:'27',
          nine:'28',
          ten:'29',
          eleven:'30',
          twelve:'31'        
        }, {
          date: '空间使用(场)',
          one: '20',
          two: '21',
          three:'22',
          four:'23',
          five:'24',
          six:'25',
          seven:'26',
          eight:'27',
          nine:'28',
          ten:'29',
          eleven:'30',
          twelve:'31'        
        }, {
          date: '设备报修(场)',
          one: '20',
          two: '21',
          three:'22',
          four:'23',
          five:'24',
          six:'25',
          seven:'26',
          eight:'27',
          nine:'28',
          ten:'29',
          eleven:'30',
          twelve:'31'        
        }],
      newTodo: [],
      hideTimestamp: true,
      activityBlock: [
        {
          id: 1,
          count: 6,
          content: '待审核的活动'
        },
        {
          id: 2,
          count: 7,
          content: '待审核的活动'
        },
         {
          id: 3,
          count: 8,
          content: '待审核的活动'
        },
         {
          id: 4,
          count: 9,
          content: '待审核的活动'
        },
         {
          id: 5,
          count: 10,
          content: '待审核的活动'
        },
         {
          id: 6,
          count: 11,
          content: '待审核的活动'
        }
      ]
    }
  },
  created() {
     //const myEchart = this.$refs.myEchart
     //console.log(myEchart)
     //
     //this.lineEchart()
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
              },
              areaStyle: {
                  normal: {
                      color: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                              offset: 0, color: '#95B3FD' // 0% 处的颜色
                          }, {
                              offset: 1, color: '#C8DDF5' // 100% 处的颜色
                          }],
                          global: false // 缺省为 false
                      }
                  }
              }
          }]

      })

      const  pieBase = this.$refs.pieBase
      let mypieBase =this.$echarts.init(pieBase);
      mypieBase.setOption({ 
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color : [ '#2D68EA', '#2ACCBF', '#8C8C8C'],
        legend: {
          orient: 'vertical',
          right:10,
          top:100,
          data: ['使用率','空闲率']
        },
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
            radius: ['40%', '60%'],
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



      const  pieDevice = this.$refs.pieDevice
      let mypieDevice =this.$echarts.init(pieDevice);
      mypieDevice.setOption({ 
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
         color : [ '#2F68E9', '#FE7155', '#8C8C8C'],
        legend: {
          orient: 'vertical',
          right:10,
          top:100,
          data: ['正常','报修']
        },
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
              {value: 335, name: '报修率\n'+50/100*100+'%'}
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '60%'],
            label: {
               position: 'inner',
               fontSize:'0'
            },
            data: [
                {value: 335, name: '正常'},
                {value: 310, name: '报修'}
            ]
          }
        ]
      })
    }
  }

}
</script>

<style >
  .top-black-echart{
    border: 1px solid blue;
      width: 14%;
      position: relative;
      left: 1%;
      height: 90%;
      float: left;
      border-radius: 5px;
      margin-left: 2%;
      top: 3%;
  }
  .top-black-up-echart{
    position: relative;
    float: left;
    width: 100%;
    height: 60%;
  }
  .top-black-down-echart{
    position: relative;
    float: left;
    width: 100%;
    height: 35%;
    top: 3%;
    text-align: center;
  }

  .el-tabs__nav{
    background-color: #2F68E9;
  }
  .el-tabs__item{
    color: #fff !important;
  }
  .div-der{
    position: relative;
    float: left;
    height: 5%;
    width: 96%;
    top: 3%;
    left: 2%;
  }
  .home-down{
    position: relative;
    float: left;
    height: 75%;
    width: 96%;
    top: 3%;
    left: 2%;
  }
  .home-down-calender{
    position: relative;
    float: left;
    height: 100%;
    width: 60%;
  }
  .home-down-timeline{
    position: relative;
    float: left;
    height: 100%;
    width: 40%;
  }
  .el-timeline-item__tail{
    display: block !important ;
  }

</style>
