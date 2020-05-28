<template>

    <div class="homeMian" :style="{height:mainHeight-40+'px'}">
      <template  v-for="item in activityBlock" >
        <div class="top-black" :key="item.id">
          <div class="top-black-up">
            <div style="width: 40%;float: left;height: 100%;">图片</div>
            <div style="position: relative;float: left; width: 60%;b height: 100%; color: blue;">
              <span style="position: relative;top: 20%;font-size: 40px;">{{item.count}}</span>
              <span style="position: relative;left: 40%;">场</span>
            </div>
          </div>
          <div class="top-black-down">
            <span>{{item.content}}</span>
          </div>
        </div>
      </template>
      <div class="div-der">
        <el-divider></el-divider>
      </div>
      <div class="home-down">
        <div class="home-down-calender">
          <!-- <myCalendar :myCalendarHeight="mainHeight*0.7"></myCalendar> -->
        </div>
        <div class="home-down-timeline">
          <div style="height:100%;width:70%;position: relative;left:15%;">
            <el-timeline  v-for=" item in newTodo " :key="item.id" >
              <el-timeline-item :timestamp=item.time placement="top" >
                <el-card>
                  <div style="float:left;height:100%;width:60%;">

                    <h4>{{item.time}}</h4>
                    <h4>{{item.title}}</h4>
                    <p>{{item.address}}</p>
                  </div>
                  <div style="float:left;height:100%;width:40%;">
                    <el-button style="float:right;" size="small" type="success" round>{{item.state}}</el-button>
                  </div>
                </el-card>
              </el-timeline-item>

            </el-timeline>
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
     this.getNowTodo()
  },
  mounted() {
    // const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    // const topH = this.$refs.topInfo.offsetHeight
    // console.log(topH)
    // const tabH = this.$refs.tab.offsetHeight
    // console.log(tabH)
    // const subH = this.$refs.subBtn.offsetHeight
    // console.log(subH)
    // const scrollHight = this.$refs.scroller.offsetHeight
    // console.log(scrollHight)
    // const height = (h - topH - tabH - subH) + 'px'
    // console.log(height)
  },
  methods: {
    getNowTodo() {
      const that = this
      this.axios.get('testApi/getNowTodo').then(function(res) {
        console.info(res)
        if (res.data.code === 200) {
           that.newTodo = res.data.data
        }
      })
    }
  }

}
</script>

<style >
  .top-black{
    border: 1px solid blue;
      width: 14%;
      position: relative;
      left: 1%;
      height: 15%;
      float: left;
      border-radius: 5px;
      margin-left: 2%;
      top: 3%;
  }
  .top-black-up{
    position: relative;
    float: left;
    width: 100%;
    height: 60%;
  }
  .top-black-down{
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
