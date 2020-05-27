<template v-for="item in activityDetails" :key="item.id">
    <div class="actMainDiv" :style="{height:mainHeight-40+'px'}">
      <h2>会议详情</h2>
      <h3>{{activityDetails.theme}}</h3>
      <p>{{activityDetails.mettingTime}}</p>
      <label>活动发起人</label><span>{{activityDetails.creator}}</span> <br>
      <label>活动地址</label><span>{{activityDetails.address}}</span><br>
      <label>参会人员</label><span>{{activityDetails.thePeople}}</span><br>
      <label>创建时间</label><span>{{activityDetails.createTime}}</span><br>

        <div v-for="item  in activityDetails.documents" :key="item.id">
          <p>{{item.docName}} </p>
          <p>{{item.docSize}} </p>
          <p>{{item.docType}} </p>
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
