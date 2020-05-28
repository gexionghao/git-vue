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
      <el-main>
          <!-- <myCalendar></myCalendar> -->

        <el-tabs ref="tabPane" v-model="editableTabsValue" type="card"  @tab-remove="removeTab">
          <el-tab-pane  v-for="item in editableTabs" :key="item.id" :label="item.title"  :name="item.indexTable"  :closable="item.close">

            <home  v-if="tabs.homeShow===item.lable" :mainHeight="tabPaneHeight"></home>

            <activityList  v-if="tabs.activityListShow===item.lable"  @addTab="addTab" :mainHeight="tabPaneHeight" ></activityList>

            <activityDetails v-if="tabs.activitySeeShow===item.lable"  :mainHeight="tabPaneHeight"></activityDetails>

            <userList v-if="tabs.userListShow===item.lable"></userList>

            <spaceList v-if="tabs.spaceListShow===item.lable"></spaceList>

            <notityList v-if="tabs.notityListShow===item.lable"></notityList>

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

export default {
     components: {
  //      // myCalendar
        home,
        userList,
        spaceList,
        notityList,
        activityList,
        activityDetails
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
        activitySeeShow: "activitySee"
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
    this.tabPaneHeight = tabPa.$el.offsetHeight
     window.onresize = function() {
       that.tabPaneHeight = tabPa.$el.offsetHeight
     }
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getMenuList() {
      console.log("11");
      const that = this;
      this.axios.get("testApi/getMenuList").then(res => {
        console.log("222");
        if (res.data.code === 200) {
          console.log("333");
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
      console.info(item)
      let ishave = false
      const tables = this.editableTabs
      console.info(tables)
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
      console.log(targetName)
      const tabs = this.editableTabs
      let activeName = this.editableTabsValue
        console.log(activeName)
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
