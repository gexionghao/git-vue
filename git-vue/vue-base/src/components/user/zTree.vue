<template>
    <div id="areaTree" style="position: relative;top: 2%;left: 1%;">
        <div class="box-title" style="width: 100%;height: 5%;">
            <a href="#">列表<i class="fa  fa-refresh" @click="freshArea"></i></a>
        </div>
        <div class="tree-box" style=" width: 100%; height: 95%;">
            <div class="zTreeDemoBackground left" style=" width: 100%;height: 100%;">
                <ul id="treeDemo" class="ztree" style="width: 95%;overflow: hidden;margin-top: 0;height: 100%;"></ul>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "../../plugins/jquery-vendor.js";
import 'jquery-ui'
import '../../plugins/zTree/js/jquery.ztree.core.min.js'
import '../../plugins/zTree/js/jquery.ztree.excheck.min.js'
import '../../plugins/zTree/js/jquery.ztree.exedit.min.js'
    export default {
      name: "zTree",
      data(){
        return{
          className :'dark',
          curDragNodes:'',
          autoExpandNode:'',
          newCount :1,
          

          setting:{
            data:{
              simpleData:{
                  enable: true,
                  idKey: "id",
                  pIdKey: "pId",
                  rootPId: 0
              }
            },
            view: {
              addHoverDom: this.addHoverDom,
              removeHoverDom: this.removeHoverDom,
              selectedMulti: false
            },
            edit: {
              drag: {
                autoExpandTrigger: true,
                prev: this.dropPrev,
                inner: this.dropInner,
					      next: this.dropNext
                
              },
              enable: true,
              editNameSelectAll: true,
              showRemoveBtn: this.showRemoveBtn,
              showRenameBtn: this.showRenameBtn
            },           
            callback: {
              beforeDrag: this.beforeDrag,
              beforeDrop: this.beforeDrop,
              beforeDragOpen: this.beforeDragOpen,
              onDrag: this.onDrag,
              onDrop: this.onDrop,
              onExpand: this.onExpand
            }
          }, 
          zNodes:[
                                                                                   
              { id:1, pId:0, name:"北京数典科技有限公司", open:true,childOuter:false,iconSkin:"pIcon01"},
              { id:11, pId:1, name:"董事会" , open:true,iconSkin:"pIcon01"},
              { id:111, pId:11, name:"董事会1" ,iconSkin:"icon01"},
              { id:12, pId:1, name:"行政部" , open:true,iconSkin:"pIcon01"},
              { id:121, pId:12, name:"行政部1",iconSkin:"icon03"},
              { id:13, pId:1, name:"人事部", open:true,iconSkin:"pIcon01"},
              { id:131, pId:13, name:"人事部1",iconSkin:"icon05"},
              { id:14, pId:1, name:"财务部", open:true,iconSkin:"pIcon01"},
              { id:141, pId:14, name:"财务部1",iconSkin:"icon01"},
              { id:15, pId:1, name:"销售部", open:true,iconSkin:"pIcon01"},
              { id:151, pId:15, name:"销售部1",iconSkin:"icon03"},
              { id:16, pId:1, name:"技术部", open:true,iconSkin:"pIcon01"},
              { id:161, pId:16, name:"研发组",iconSkin:"icon05"},
              { id:162, pId:16, name:"测试组",iconSkin:"icon06"},
              { id:163, pId:16, name:"开发组",iconSkin:"icon01"},
              { id:164, pId:16, name:"网络组",iconSkin:"icon02"},
              { id:165, pId:16, name:"设计组",iconSkin:"icon03"},
              { id:166, pId:16, name:"推广组",iconSkin:"icon04"},
              { id:17, pId:1, name:"运营部", open:true,iconSkin:"pIcon01"},
              { id:171, pId:17, name:"运营部1",iconSkin:"icon06"},
           
             
          ]
          
        }
      },
      methods:{
          
          freshArea:function(){
              $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
          },
          dropPrev(treeId, nodes, targetNode) {
            const curDragNodes = this.curDragNodes
            var pNode = targetNode.getParentNode();
            if (pNode && pNode.dropInner === false) {
              return false;
            } else {
              for (var i=0,l=curDragNodes.length; i<l; i++) {
                var curPNode = curDragNodes[i].getParentNode();
                if (curPNode && curPNode !== targetNode.getParentNode() && curPNode.childOuter === false) {
                  return false;
                }
              }
            }
            return true;
          },
          showRemoveBtn(treeId, treeNode) {
            return !treeNode.isFirstNode;
          },
          showRenameBtn(treeId, treeNode) {
            return !treeNode.isLastNode;
          },
          dropInner(treeId, nodes, targetNode) {
            const curDragNodes = this.curDragNodes
            var pNode = targetNode.getParentNode();
            if (targetNode && targetNode.dropInner === false) {
              return false;
            } else {
              for (var i=0,l=curDragNodes.length; i<l; i++) {
                if (!targetNode && curDragNodes[i].dropRoot === false) {
                  return false;
                } else if (curDragNodes[i].parentTId && curDragNodes[i].getParentNode() !== targetNode && curDragNodes[i].getParentNode().childOuter === false) {
                  return false;
                }
              }
            }
            return true;
          },
          dropNext(treeId, nodes, targetNode) {
            const curDragNodes = this.curDragNodes
            var pNode = targetNode.getParentNode();
            if (pNode && pNode.dropInner === false) {
              return false;
            } else {
              for (var i=0,l=curDragNodes.length; i<l; i++) {
                var curPNode = curDragNodes[i].getParentNode();
                if (curPNode && curPNode !== targetNode.getParentNode() && curPNode.childOuter === false) {
                  return false;
                }
              }
            }
            return true;
          },
          beforeDrag(treeId, treeNodes){
            let curDragNodes = this.curDragNodes
            this.className = (this.className === "dark" ? "":"dark");             
            for (var i=0,l=treeNodes.length; i<l; i++) {
              if (treeNodes[i].drag === false) {
                curDragNodes = null;
                return false;
              } else if (treeNodes[i].parentTId && treeNodes[i].getParentNode().childDrag === false) {
                curDragNodes = null;
                return false;
              }
            }
            this.curDragNodes = treeNodes;
            return true;
          },
          beforeDragOpen(treeId, treeNode){
            this.autoExpandNode = treeNode;
			      return true;
          },
          beforeDrop(){
            this.className = (this.className === "dark" ? "":"dark");
            return true;
          },
          onDrag(event, treeId, treeNodes){
            this.className = (this.className === "dark" ? "":"dark");
          },
          onDrop(event, treeId, treeNodes, targetNode, moveType, isCopy){
           this.className = (this.className === "dark" ? "":"dark");
          },
          onExpand(event, treeId, treeNode){
            const that = this
            if (treeNode === that.autoExpandNode) {
              that.className = (that.className === "dark" ? "":"dark");
            }
          },
          showLog(str) {
            console.log("showLog")
          },
          addHoverDom(treeId, treeNode) {
            const that = this
            var sObj = $("#" + treeNode.tId + "_span");
            if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
            var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
              + "' title='add node' onfocus='this.blur();'></span>";
            sObj.after(addStr);
            var btn = $("#addBtn_"+treeNode.tId);
            if (btn) btn.bind("click", function(){
              var zTree = $.fn.zTree.getZTreeObj("treeDemo");

              zTree.addNodes(treeNode, {id:(100 + that.newCount), pId:treeNode.id, name:"new node" + (that.newCount++)});
              console.info(that.newCount)
              
              return false;
            })
          },
          removeHoverDom(treeId, treeNode) {
            $("#addBtn_"+treeNode.tId).unbind().remove();
          },
          getTime() {
            var now= new Date(),
            h=now.getHours(),
            m=now.getMinutes(),
            s=now.getSeconds(),
            ms=now.getMilliseconds();
            return (h+":"+m+":"+s+ " " +ms);
          }

      },
      mounted(){
          $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
      }
    }
</script>

<style>
    @import '../../plugins/zTree/css/zTreeStyle/zTreeStyle.css'; 
    @import '../../plugins/zTree/css/demo.css';
    .ztree li{line-height: 20px;}
    .ztree *{font-size: 15px;font-weight: 600;}
     ul.ztree {background: #fff;border: 0px solid ;}
    .ztree li span.button.pIcon01_ico_open{margin-right:2px; background: url(../../plugins/zTree/css/zTreeStyle/img/diy/1_open.png) no-repeat scroll 0 0 transparent; vertical-align:top; *vertical-align:middle}
    .ztree li span.button.pIcon01_ico_close{margin-right:2px; background: url(../../plugins/zTree/css/zTreeStyle/img/diy/1_close.png) no-repeat scroll 0 0 transparent; vertical-align:top; *vertical-align:middle}
    .ztree li span.button.pIcon02_ico_open, .ztree li span.button.pIcon02_ico_close{margin-right:2px; background: url(../../plugins/zTree/css/zTreeStyle/img/diy/2.png) no-repeat scroll 0 0 transparent; vertical-align:top; *vertical-align:middle}
    .ztree li span.button.icon01_ico_docu{margin-right:2px; background: url(../../plugins/zTree/css/zTreeStyle/img/diy/3.png) no-repeat scroll 0 0 transparent; vertical-align:top; *vertical-align:middle}
    .ztree li span.button.icon02_ico_docu{margin-right:2px; background: url(../../plugins/zTree/css/zTreeStyle/img/diy/4.png) no-repeat scroll 0 0 transparent; vertical-align:top; *vertical-align:middle}
    .ztree li span.button.icon03_ico_docu{margin-right:2px; background: url(../../plugins/zTree/css/zTreeStyle/img/diy/5.png) no-repeat scroll 0 0 transparent; vertical-align:top; *vertical-align:middle}
    .ztree li span.button.icon04_ico_docu{margin-right:2px; background: url(../../plugins/zTree/css/zTreeStyle/img/diy/6.png) no-repeat scroll 0 0 transparent; vertical-align:top; *vertical-align:middle}
    .ztree li span.button.icon05_ico_docu{margin-right:2px; background: url(../../plugins/zTree/css/zTreeStyle/img/diy/7.png) no-repeat scroll 0 0 transparent; vertical-align:top; *vertical-align:middle}
    .ztree li span.button.icon06_ico_docu{margin-right:2px; background: url(../../plugins/zTree/css/zTreeStyle/img/diy/8.png) no-repeat scroll 0 0 transparent; vertical-align:top; *vertical-align:middle}
    .ztree li span.button.add {margin-left:2px; margin-right: -1px; background-position:-144px 0; vertical-align:top; *vertical-align:middle}
    
    #areaTree{
        border:1px solid #e5e5e5;    margin-bottom: 2px;border-radius: 4px;overflow: hidden;
    }
    .box-title{
        border-radius: 3px 3px 0 0;background-color: #f5f5f5;
    }
    .box-title a{
        color: #2fa4e7;
        text-decoration: none;font-size:14px;    display: block;
        padding: 8px 15px;cursor: pointer;
    }
    .box-title .fa{
        float:right;line-height: 20px;
    }
</style>
