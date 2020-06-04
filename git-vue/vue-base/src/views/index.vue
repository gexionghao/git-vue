<template>
  <el-container class="home-container">
    <el-aside :width="isCollapse ? '66px' : '200px'">
      <!-- 侧边菜单-->
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :collapse-transition="collapseTransition"
        background-color="#2F68E9"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- 头像-->
        <img class="headShot" src="../assets/touxiang.jpg" />
        <!-- 名称-->
        <div
          style=" text-align: center;position: relative;margin-top: 10%; height: 10%;"
        >
          <span>北京数典科技有限公司</span>
        </div>
        <!--Ul 列表-->
        <template v-for="item in menulist">
          <el-submenu
            v-if="item.children != null"
            :key="item.id"
            :index="item.id + ''"
          >
            <template slot="title">
              <i class="el-icon-my icon-password"></i>
              <span>{{ item.menuName }}</span>
            </template>
            <el-menu-item
              v-for="subItem in item.children"
              :key="subItem.id"
              :index="subItem.id + ''"
              @click="addTab(subItem)"
            >
              <i class="el-icon-my-password"></i>
              <span slot="title">{{ subItem.menuName }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item
            v-else-if="item.children == null"
            :key="item.id"
            :index="item.id + ''"
            @click="addTab(item)"
          >
            <i class="el-icon-my-password"></i>
            <span slot="title">{{ item.menuName }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- 头部-->
      <el-header style="height: 10%;"
        ><!--<el-button type="info" v-on:click=logout>退出</el-button>-->

        <!-- 头部隐藏菜单-->
        <div class="asideHide" @click="toggleColler">隐藏菜单</div>

        <!-- 头部搜索-->
        <div style="margin-top: 15px;width: 40%;float: left;">
          <el-input placeholder="请输入内容" icon="el-icon-search"
            ><!-- v-model="input2"-->
            <template slot="append" style="background-color: blue;"
              >搜索</template
            >
          </el-input>
        </div>
        <!-- 头部天气-->
        <div class="myWeather" style="top:25%;width:15%;left:30%;">
          <div class=" myWeather " style="width:10%;">
            <span>{{weather.weather}}</span>
          </div>
          <div class="myWeather " style="width:39%;">
            <div style="font-size: 1.3em;">
              <span>{{weather.Tp}}</span>
            </div>
            <div>
              <span>{{weather.TpRange}}</span>
            </div>
          </div>
          <div class="myWeather" style="width:2%;"><span>|</span></div>
          <div class="myWeather" style="width:49%;">
            <div style="font-size: 1.3em;">
              <span>{{weather.TimeDetails}}</span>
            </div>
            <div>
              <span>{{weather.Time}}</span>
            </div>
          </div>
        </div>


      </el-header>
      <!-- main-->
      <el-main ref="tabPane">
          <!-- <myCalendar></myCalendar> -->

        <el-tabs  id="tabPane" v-model="editableTabsValue" type="card"  @tab-remove="removeTab">
          <el-tab-pane  v-for="item in editableTabs" :key="item.id" :label="item.title"  :name="item.indexTable"  :closable="item.close">
            <!-- 首页 -->
            <home  v-if="tabs.homeShow===item.lable" :mainHeight="tabPaneHeight"></home>

            <!-- 活动列表 -->
            <activityList  v-if="tabs.activityListShow===item.lable"  @addTab="addTab" :mainHeight="tabPaneHeight" ></activityList>

            <!-- 活动详情-->
            <activityDetails v-if="tabs.activitySeeShow===item.lable"  :mainHeight="tabPaneHeight"></activityDetails>

            <!--签到管理-->
            <signManagement v-if="tabs.signManagementShow===item.lable" :mainHeight="tabPaneHeight"> </signManagement>

            <!--投票管理-->
            <votMana v-if="tabs.votingManagementShow===item.lable" :mainHeight="tabPaneHeight" ></votMana>

            <!--预约管理-->
            <appoint v-if="tabs.appotinManagementShow===item.lable" :mainHeight="tabPaneHeight" @addTab="addTab"></appoint>

            <!--添加预约活动-->
            <appointDetail v-if="tabs.appointDetailShow===item.lable" :mainHeight="tabPaneHeight" ></appointDetail>

            <!--设备管理-->
            <device v-if="tabs.deviceShow===item.lable" :mainHeight="tabPaneHeight"></device>

            <!--审核管理-->
            <audit v-if="tabs.auditShow===item.lable" :mainHeight="tabPaneHeight"></audit>
            
            <!--文档管理-->
            <doc v-if="tabs.docShow===item.lable" :mainHeight="tabPaneHeight" ></doc>

            <!--用户管理-->
            <userList v-if="tabs.userListShow===item.lable" :mainHeight="tabPaneHeight"></userList>

            <!--通知管理-->
            <notityList v-if="tabs.notityListShow===item.lable" :mainHeight="tabPaneHeight"></notityList>

            <!--数据统计-->
            <statistical v-if="tabs.statisticalShow===item.lable" :mainHeight="tabPaneHeight"> </statistical>



            

            <spaceList v-if="tabs.spaceListShow===item.lable"></spaceList>

            

          </el-tab-pane>
        </el-tabs>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
 import home from "../components/homeFolder/home" 
 import userList from "../components/user/userList"
 import spaceList from "../components/space/spaceList"
 import notityList from "../components/notify/notifyList"
 import activityList from "../components/activity/activityList"
 import activityDetails from "../components/activity/activityDetails"
 import signManagement from "../components/activity/signManagement"
 import votMana from "../components/activity/votingManagement"
 import appoint from "../components/activity/appotinManagement"
 import appointDetail from "../components/activity/appotinDetails"
 import statistical from "../components/statistical/statistical"
 import doc from "../components/doc/docment"
 import audit from "../components/space/audit"
 import device from "../components/space/device"

export default {
     components: {
  //      // myCalendar
        home,
        userList,
        spaceList,
        notityList,
        activityList,
        activityDetails,
        signManagement,
        votMana,
        appoint,
        appointDetail,
        statistical,
        doc,
        audit,
        device
     },
  data() {
    return {
      activityDetails: {},
      isCollapse: false,
      collapseTransition: false,
      menulist: [],
      weather: {},
      activity: {},
      tabs: {
        homeShow: "index",
        userListShow: "user",
        spaceListShow: "space",
        notityListShow: "tongzhi",
        activityListShow: "activityList",
        activitySeeShow: "activitySee",
        signManagementShow:"sign",
        votingManagementShow:"toupiao",
        appotinManagementShow:"yuyue",
        appointDetailShow:"appointShow",
        statisticalShow:"yunying",
        docShow:"wendang",
        auditShow:"shenhe",
        deviceShow:"device"
      },
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "首页",
          indexTable: "1",
          id: 1,
          lable: "index"
        }
      ],
      tabIndex: 1,
      tabPaneHeight: 0
    };
  },
  // 页面刚加载的时候加载菜单
  created() {
    this.getMenuList();
    this.getWeather()
    //this.getActivity()
  },
  mounted() {
    const that = this
    const tabPa = this.$refs.tabPane
    this.tabPaneHeight = tabPa.$el.offsetHeight*0.95
     window.onresize = function() {
       that.tabPaneHeight = tabPa.$el.offsetHeight*0.95
       
     }
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getMenuList() {
     
      const that = this;
      this.axios.get("testApi/getMenuList").then(res => {
    
        if (res.data.code === 200) {
          
          that.menulist = res.data.data;
        }
      });
    },
    getWeather() {
      const that = this
      this.axios.get('testApi/getWeather').then((res) => {
        if (res.data.code === 200) {
          that.weather = res.data.data
        }
      })
    },
    getActivity() {
      const that = this
      this.axios.get('testApi/getActivity').then((res) => {
          if (res.data.code === 200) {
            that.activity = res.data.data
          }
      })
    },
    addTab(item) {
      
      let ishave = false
      const tables = this.editableTabs
      
      let newTableIndex
      tables.forEach(function(table) {
        if (table.id === item.id) {
          ishave = true
          newTableIndex = table.indexTable
        }
      })
      if (!ishave) {
        const newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          id: item.id,
          title: item.menuName,
          indexTable: newTabName,
          lable: item.lable,
          close: 'closable'
        })
        this.editableTabsValue = newTabName + '';
      } else {
        this.editableTabsValue = newTableIndex;
      }
    },
    toggleColler() {
      this.isCollapse = !this.isCollapse;
    },
    removeTab(targetName) {
      
      const tabs = this.editableTabs
      let activeName = this.editableTabsValue
      
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.indexTable === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.indexTable
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.indexTable !== targetName)
    }
  }
};
</script>

<style scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #f9fafe;
}
.el-aside {
  background-color: #2f68e9;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.headShot {
  border-radius: 50%;
  width: 40%;
  position: relative;
  margin-top: 10%;
  left: 25%;
}
.el-menu {
  position: relative;
  width: 100%;
  float: left;
  text-align: left;
}
.el-main {
  background-color: #edf0f7;
  padding-top: 10px;
}
.asideHide {
  width: 10%;
  float: left;
  position: relative;
  height: 100%;
}
.el-tabs {
  width: 100%;
  height: 100%;
}
.toggle-button {
  background-color: brown;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  color: #f9fafe;
  letter-spacing: 0.2em;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.myWeather {
  float: left;
  position: relative;
  text-align: center;
  color: blue;
}
</style>
