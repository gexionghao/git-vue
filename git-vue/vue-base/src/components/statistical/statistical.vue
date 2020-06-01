<template>

    <div class="homeMian" :style="{height:mainHeight-40+'px'}">
      <!-- 活动场数 -->
      <div style="width:100%;height:20%;position: relative; top: 3%;float: left;">
         <template  v-for="item in activityBlock" >
        <div class="top-black-echart" :key="item.id">
          <div class="top-black-up-echart">
            <div style="width: 40%;float: left;height: 100%;">图片</div>
            <div style="position: relative;float: left; width: 60%;b height: 100%; color: blue;">
              <span style="position: relative;top: 20%;font-size: 40px;">{{item.count}}</span>
              <span style="position: relative;left: 40%;">场</span>
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
          <div style="width:50%;height:100%;float:left;position:relative;left: 3%;" >
              <div  ref="myEchart" style="width:100%;height:100%;border: 1px solid;" ></div>
          </div>
          <div style="width:50%;height:100%;float:left;position:relative;left: 5%;">

          </div>
        </div>
        <div style="width:100%;height:50%;position:relative;float:left;">

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
      console.log("333")
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
            top:30,
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
