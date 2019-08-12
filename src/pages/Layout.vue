<template>
  <div>
    <el-container style="width100%;">
      <el-header class="layoutContent" :class="lineVisiblity==1?'line' :null ">
        <div class="pageHeader_first" >
            <div class="mintitle" @click="changevis" style="float:right" >
            <img
              src="../../static/min_img/anniu.png"
            style="width:0.4rem"
              v-if="!changevisiblity"
            />
            <i class="el-icon-close" v-else></i>
          </div>
          <div class="first_left">
            <div class="maximg" @click="changeTab(0, 'home')">
              <img src="../../static/min_img/logo.png" style="width:1.4rem" />
            </div>
            <div class="minimg" >
              <img src="../../static/min_img/logo.png" style="width:1.4rem" />
            </div>
          </div>
          
          <div class="navTabss">
            <div
              v-for="(item,index) in titleArr"
              :key="index"
              :class="item.isSelect?'selected':''"
              class="navTab"
            >
              <div class="titleBody" @click="changeTab(index,item.routerName)">
                <div class="langCh">
                  <span class="langCh_active">{{item.CH}}</span>
                </div>
              </div>
            </div>
          </div>
        <div style="height:1rem;display:flex;align-items: center">
            <div style="line-height:0.2rem;" class="phone" >
            <div
              style="color:#C9A063;text-align:left;font-size:18px;padding:0.1rem 0"
            >400-633-8918</div>
            <div style="color:#C9A063;text-align:left;font-size:10px">咨询热线</div>
          </div>
        </div>
          
        </div>
      </el-header >
      <div class="min_dis" v-if="changevisiblity">
        <div
          v-for="(item,index) in titleArr"
          :key="index"
          :class="item.isSelect?'selected':''"
          class="min_navTab"
        >
          <div class="min_titleBody" @click="changeTab(index,item.routerName)">
            <div class="min_langCh">
              <span class="min_langCh_active">{{item.CH}}</span>
            </div>
          </div>
        </div>
      </div>
      <el-main class="max_main">
        <router-view />
      </el-main>
      <el-footer v-if="tabIndex != 0 ">
        <div v-if="width>750">
          <div class="page_Foot" v-if="!this.isIndex">
            <div class="footer_contain">
              <div class="foot_one">
                <div class="foot_text" style="margin-right:35px;">
                  <span class="footer_text_title">关注我们</span>
                  <span class="footer_text_title1">
                    <a
                     
                      target="_blank"
                      class="footer_text_title11"
                    >善之道微信公众号</a>
                  </span>
                  <span class="footer_text_title1">
                    <a
                     
                      target="_blank"
                      class="footer_text_title11"
                    >善之道官方微博</a>
                  </span>
                </div>
                <div class="foot_text">
                  <span class="footer_text_title">线上商城</span>
                  <!-- <span class="footer_text_title1">天猫商城(敬请期待)</span> -->
                  <span class="footer_text_title1">
                    <a  target="_black" class="footer_text_title11">京东商城</a>
                  </span>
                 <!--  <span class="footer_text_title1">善之道茶油坊</span> -->
                </div>
              </div>

              <div class="foot_one_1">
                <div class="footer_text" style="margin-right:45px">
                  <div class="code_right">
                    <img src="../../static/img/gongzhonghao.png" />
                  </div>
                  <div class="textcode_right">微信公众号</div>
                </div>

                <div class="footer_text">
                  <div class="code_right">
                    <img src="../../static/img/szdxiaochengxu.png" />
                  </div>
                  <div class="textcode_right">微信小程序</div>
                </div>
              </div>
            </div>
            <div class="footer_line"></div>
            <div class="footer_last">
              <div class="footer_left">
                <span class="foot_last_left" style="margin-right:60px;">长沙中战茶油有限公司</span>
                <span class="foot_last_left">地址：湖南省长沙市开福区玛丽莱珠宝大厦10楼</span>
              </div>
              <div class="footer_last_right">湘ICP备17029384号-1</div>
            </div>
          </div>
        </div>
      </el-footer>
      <el-footer v-if="width<=750" >
        <div>
          <div class="min_part5" style="width:7.5rem">
            <div style="display:flex;justify-content: space-around;">
              <div style="width:40%">
                <div style="width:100%;display:flex;flex-direction: column;text-align:left">
                  <span class="footTitle_min">关注我们</span>
                  <a
                    
                    target="_blank"
                    class="footText_min"
                  >今日头条认证号</a>
                  <a
                    
                    target="_blank"
                    class="footText_min"
                  >善之道官方微博</a>
                </div>
                <div style="width:100%;display:flex;flex-direction: column;text-align:left">
                  <span class="footTitle_min">线上商城</span>
                  <a class="footText_min" target="_black">京东商城</a>
                  <!-- <a class="footText_min" href="http://www.jd.com" target="_black">天猫商城</a>
                  <a class="footText_min" href="http://www.jd.com" target="_black">善之道茶油坊</a>-->
                </div>
              </div>
              <div class="min_footer_right">
                <!-- <div class="min_footer_right_top">
                  <a href="tel:4006338918" style="color:rgba(201,160,99,1)">
                      <img src="../../static/min_img/phone.png" />
                      资讯热线
                  </a>
                  
                </div>
                <div style="color:rgba(201,160,99,1);font-size:0.36rem;font-weight:900">400-633-8918</div>
              </div> -->
               <div style="width:100%;display:flex;flex-direction: column;text-align:left">
                  <span class="footTitle_min">资询热线</span>
                  <a href="tel:4006338918" class="footText_min">
                      400-633-8918
                 </a>
                </div>
              </div>
            </div>
            <div style="width:100%;display:flex;justify-content: space-flex-start;">
              <div style="width:2.7rem;display:flex;flex-direction: column;margin-right:0.62rem">
                <div class="foot_img_contain_min">
                  <img class="foot_img_min" src="../../static/img/gongzhonghao.png" />
                </div>

                <span class="footText" style="text-align:center">善之道微信公众号</span>
              </div>
              <div style="width:40%;display:flex;flex-direction: column;">
                <div class="foot_img_contain_min">
                  <img class="foot_img_min" src="../../static/img/szdxiaochengxu.png" />
                </div>
                <span class="footText" style="text-align:center">善之道茶油坊小程序</span>
              </div>
            </div>
            <div class="foot_line_min"></div>
            <div class="footer-title_min">长沙中战茶油有限公司</div>
            <div class="footer-title_min">湖南省长沙市开福区玛丽莱珠宝大厦10楼</div>
            <!-- <div class="footer-title_min">联系方式：4006338918</div> -->
            <div class="footer-title_min">湘ICP备17029384号-1</div>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "layout",
  created() {
    var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
    console.log(scrollt);
    // window.scroll=function scroll(){
    //     var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
    //     if(scrollt>0){
    //         console.log(1)
    //     }else{
    //         console.log(0)
    //     }
    // }
  },
  mounted() {
    console.log(467, this.$route.name);
    // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
    this.width = document.documentElement.clientWidth;
    // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    let that = this;
    window.onresize = function temp() {
      that.width = document.documentElement.clientWidth;
    };

    window.addEventListener(
      "mousewheel",
      this.debounce(this.handleScroll, 300),
      true
    ) ||
      window.addEventListener(
        "DOMMouseScroll",
        this.debounce(this.handleScroll, 300),
        false
      );

    // alert(1);
    let tabIndex = 0;
    this.isIndex = false;
    if (this.$route.name == "index") {
      this.isIndex = true;
      if (localStorage.getItem("firstEnter") != "false") {
        //首屏页面的状态值存储在localstorage中
        this.isStart = true;
      } else {
        document.getElementsByTagName("body")[0].style.overflow = "auto";
        this.isStart = false;
      }
      tabIndex = 0;
    } else if (this.$route.name == "home") {
      this.isIndex = true;
      // if(localStorage.getItem('firstEnter')!='false'){//首屏页面的状态值存储在localstorage中
      //     this.isStart = true;
      // }else{
      //     document.getElementsByTagName('body')[0].style.overflow = 'auto';
      //     this.isStart = false;
      // }
      tabIndex = 0;
    } else if (this.$route.name == "test1") {
      this.isIndex = true;
      // if(localStorage.getItem('firstEnter')!='false'){//首屏页面的状态值存储在localstorage中
      //     this.isStart = true;
      // }else{
      //     document.getElementsByTagName('body')[0].style.overflow = 'auto';
      //     this.isStart = false;
      // }
      tabIndex = 0;
    } else if (this.$route.name == "test3") {
      this.isIndex = true;
      // if(localStorage.getItem('firstEnter')!='false'){//首屏页面的状态值存储在localstorage中
      //     this.isStart = true;
      // }else{
      //     document.getElementsByTagName('body')[0].style.overflow = 'auto';
      //     this.isStart = false;
      // }
      tabIndex = 0;
    } else if (this.$route.name == "about") {
      tabIndex = 1;
    } else if (this.$route.name == "teause") {
      tabIndex = 2;
    } 
    // else if (this.$route.name == "information") {
    //   tabIndex = 3;
    // } 
    else {
      tabIndex = 3;
    }
    this.tabIndex = tabIndex;
    console.log(11111, this.tabIndex);
    this.changeTab(tabIndex);
    // if(that.width>750){
    //   var hm = document.createElement("script");
    // hm.src = "https://hm.baidu.com/hm.js?916983700a33d803e60b12b426d473c0";
    // var s = document.getElementsByTagName("script")[0];
    // s.parentNode.insertBefore(hm, s);
    // }
  },
  data() {
    return {
      width: 0,
      showIndex: 0,
      tabIndex: 0,
      changevisiblity: false,
      lineVisiblity: 0,
      currentId: 1,
      isIndex: false,
      isStart: false, //已首屏做开始画面
      openIt: false, //拖动开关
      startY: 0, //首屏拖拽的起始点，只需定位y轴拖动
      YGap: 0, //首屏拖动的距离
      titleArr: [
        {
          CH: "首页",
          // EN:'HOME',
          // routerName:'index',
          routerName: "home",
          isSelect: true
        },
        {
          CH: "关于我们",
          // EN:'About us',
          routerName: "about",
          isSelect: false
        },
        {
          CH: "茶油妙用",
          // EN:'Tea oil use',
          routerName: "teause",
          isSelect: false
        },
        // {
        //   CH: "资讯动态",
        //   // EN:'Dynamic information',
        //   routerName: "information",
        //   isSelect: false
        // },
        {
          CH: "联系我们",
          // EN:'CONTACT US',
          routerName: "contact",
          isSelect: false
        }
      ]
    };
  },
  methods: {
    changevis() {
      this.changevisiblity = !this.changevisiblity;
    },
    handleCommand(command) {
      this.$router.push({ path: command });
    },
    //函数防抖
    debounce(func, wait) {
      let timeout;
      return function() {
        let context = this;
        let args = arguments;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      };
    },

    //判断滚动方向
    handleScroll(e) {
      console.log(197, e.offsetY);
      let distance = e.offsetY;
      if (distance > 200) {
        this.lineVisiblity = 1;
      } else {
        console.log(0);
        this.lineVisiblity = 0;
      }
    },

    handleMousemove(e) {
      console.log(e);
    },
    changeTab(idx, url) {
      //   alert(this.isIndex);
      this.changevisiblity = false;
      this.showIndex = idx;
      if (idx == 0) this.isIndex = true;
      else this.isIndex = false;

      // alert(this.isIndex);

      this.titleArr.forEach(element => {
        element.isSelect = false;
      });
      this.titleArr[idx].isSelect = true;
      console.log(this.titleArr[idx]);
      if (url) {
        this.$router.push({ path: url });
      }
      this.tabIndex = idx;
    } //,
    // startMove(e){
    //     e.preventDefault()
    //     this.startY = e.clientY;
    //     this.openIt = true;
    // },
    // moving(e){
    //     e.preventDefault()
    //     if(e.clientY==document.documentElement.clientHeight-1){
    //         this.endMove();
    //     }
    //     if(this.openIt){
    //         this.YGap = e.clientY - this.startY;
    //         this.$refs.shoupin.style.top = this.YGap+'px';
    //     }
    // },
    // endMove(e){
    //     e.preventDefault()
    //     if(Math.abs(this.YGap)>document.documentElement.clientHeight*0.4){//设定拖动了浏览器40%的高度就退出首屏页面
    //         this.isStart = false;
    //         document.getElementsByTagName('body')[0].style.overflow = 'auto';
    //         localStorage.setItem('firstEnter','false')
    //     }else{
    //         this.YGap = 0;
    //         this.$refs.shoupin.style.top = this.YGap+'px';
    //     }
    //     this.openIt = false;
    // }
  }
};
</script>
<style lang='less' >
.el-main,
.el-footer {
    padding: 0 !important;
    width: 100%;
    box-sizing:border-box;
   
  
}

.el-header{
    width:100% !important;
  
}
.page_Foot {
  width: 100%;
  height: 3.6rem !important;
  background: rgba(238, 238, 238, 1);
  box-sizing: border-box;
  font-size: 0.14rem;
  padding-top: 0.74rem;
}
.footer_contain {
  width: 62.5%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.foot_one {
  width: 60%;
  display: flex;
  justify-content: flex-start;
}
.foot_one_1 {
  width: 25%;
  display: flex;
  justify-content: flex-end;
}
.foot_text {
  width: 25%;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  
}
.footer_text {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.textcode_right {
  width: 100%;
  text-align: center;
}
.footer_text_title {
  font-size: 0.14rem;
  margin-bottom: 0.41rem;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.footer_text_title1 {
  margin-bottom: 0.14rem;
  font-size: 0.14rem;
  font-weight: 400;
  color: rgba(51, 51, 51, 0.6) ;
 
}
.footer_text_title11 {
  margin-bottom: 0.14rem;
  font-size: 0.14rem;
  font-weight: 400;
  color: rgba(51, 51, 51, 0.6) ;
 
}

// .footer_text_title1:hover,
// .footer_text_title11:hover {
//   color: #c9a063 ;
// }
.code_right {
  width: 1.3rem;
  text-align: center;
  font-size: 0.14rem;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.code_right img {
  width: 100%;
}
.footer_line {
  width: 62.5%;
  height: 1px;
  border: 1px solid rgba(179, 179, 179, 1);
  opacity: 0.3;
  margin: 0.39rem auto 0.19rem;
}
.footer_last {
  width: 62.5%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: rgba(102, 102, 102, 1);
  font-weight: 400;
}
.footer_left {
  display: flex;
  justify-content: flex-start;
}
.footer_last_right {
  text-align: right;
  width: 25%;
}
@media only screen and (min-width: 751px) {
  .max_main {
    // margin-top:1rem;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .pageHeader_first {
    display: flex;
    justify-content: space-between;
    width: 62.5%;
    margin: 0 auto;
    line-height: 1rem !important;

    box-sizing: border-box;
   
  }
  .mintitle {
    display: none;
   
  }
  .minimg,
  .min_dis {
    display: none;
  }
  .maximg {
    height: 90%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .layoutContent {
    font-family: \5b8b\4f53, tahoma, arial, sans-serif !important;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000000000;
    width: 100%;
    height: 1rem !important;
    background-color: white;
    text-align: center;
    box-sizing: border-box;
   
    // border:1px solid yellow;
    // .pageHeader {
    //   font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    //   background-color: white;
    //   height: 0.8rem;
    //   padding: 0px;
    //   margin: 0px;
    //   width: 100%;

    //   box-sizing: border-box;
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    //   z-index: 10000000000;
    //   .pageHeader_first {
    //     height: 100%;
    //     width: 62.5%;
    //     margin: 0 auto;
    //     display: flex;
    //     justify-content: space-between;
    //   }
    // }
  }
  .navTabss {
    height: 100%;
    width: 60%;
    line-height: 1rem;
    text-align: center;
    display: flex;
    justify-content: space-around;
    // justify-content: flex-start;
    .navTab {
      .titleBody {
        height: 100%;

        cursor: pointer;
        .langCh {
          font-size: 0.16rem;
          // font-size:0.16rem;

          font-weight: 400;
          width: 100%;
          border: 1px solid none;
          //   margin-right: 0.78rem
        }
      }
    }
    .navTab:hover {
      color: #000;
    }
    .selected {
      .langCh_active {
        color: #c9a063;
        text-decoration: none !important;
        padding-bottom: 0.08rem;
        border-bottom: 2px solid #c9a063;
      }
    }
  }
  .navTabss .selected .langCh,
  .navTabss .navTab:hover .langCh {
    text-decoration: none !important;
  }

  .tb {
    width: 1rem;
    height: 1rem;
    margin-top: 20px;
    // background:rgba(37,58,83,1);
    // border-radius:50%;
    .tbs {
      width: 26px;
      height: 74px;
      font-size: 18px;
      font-family: "黑体";
      font-weight: bold;
      line-height: 20.01rem;
      color: #f1eeed;
      padding-top: 18px;
      padding-left: 40.01rem;
    }
  }
  .layout {
    height: 100%;
    width: 100%;

    .shoupin {
      -moz-user-select: none; /*火狐*/
      -webkit-user-select: none; /*webkit浏览器*/
      -ms-user-select: none; /*IE10*/
      -khtml-user-select: none; /*早期浏览器*/
      user-select: none;
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 9999999;
      overflow: hidden;
      .shoupinRow {
        height: 100%;
        width: 100%;
        .shoupinCol {
          height: 100%;
          width: 100%;
          img {
            -moz-user-select: none; /*火狐*/
            -webkit-user-select: none; /*webkit浏览器*/
            -ms-user-select: none; /*IE10*/
            -khtml-user-select: none; /*早期浏览器*/
            user-select: none;
            height: 100%;
            width: 100%;
          }
          .tip {
            width: 100%;
            height: 80%;
            position: absolute;
            top: 0px;
            .bg {
              animation: btshow 2s;
              animation-direction: alternate;
              animation-fill-mode: forwards;

              /* Safari and Chrome */
              -webkit-animation: btshow 2s;
              -webkit-animation-direction: alternate;
              -webkit-animation-fill-mode: forwards;
            }
            .bg:hover {
              width: 120%;
              height: 120%;
            }
          }
          .shoupinText {
            position: absolute;
            top: 75%;
            width: 100%;
            span {
              font-size: 16px;
              font-family: \5b8b\4f53, tahoma, arial, sans-serif;
              font-weight: 400;
              color: rgba(144, 165, 191, 1);
              line-height: 0.3rem;
            }
            animation: textmove 2s;
            animation-direction: alternate;
            animation-fill-mode: forwards;

            /* Safari and Chrome */
            -webkit-animation: textmove 2s;
            -webkit-animation-direction: alternate;
            -webkit-animation-fill-mode: forwards;
          }
          .sbicon {
            -moz-user-select: none; /*火狐*/
            -webkit-user-select: none; /*webkit浏览器*/
            -ms-user-select: none; /*IE10*/
            -khtml-user-select: none; /*早期浏览器*/
            user-select: none;
            position: absolute;
            top: 90%;
            width: 100%;
            text-align: center;
            img {
              width: 20px;
              height: 24px;
            }
            animation: myfirst 2s linear infinite;
            animation-direction: alternate;

            /* Safari and Chrome */
            -webkit-animation: myfirst 2s linear infinite;
            -webkit-animation-direction: alternate;
          }
        }
      }
    }

    .pageContent {
      width: 100%;
      box-sizing: border-box;
      background: white;
    }

    .pageFoot {
      width: 100%;
      text-align: left;
      height: 240px;
      background: rgba(238, 238, 238, 1);
      font-family: \5b8b\4f53, tahoma, arial, sans-serif;
      font-weight: 400;
      .fTop {
        margin-top: 16px;
        .footItem {
          cursor: pointer;
          .code,
          .textcode {
            text-align: center;
          }
          .footTitle {
            margin-bottom: 22px;
            font-size: 0.14rem;
            opacity: 1;
            color: rgba(51, 51, 51, 1);
            font-weight: 900;
          }
          div {
            margin-bottom: 5px;
            font-size: 0.14rem;
            opacity: 0.6;
          }
        }
        .footItem > div:hover {
          opacity: 1;
        }
      }
      .fBottom {
        border-top: 0.01rem solid #ffffff;
        .fBItem {
          padding-top: 19px;
          .warnNum {
            text-align: right;
          }
          .warnText {
            white-space: nowrap;
          }
        }
      }
    }
  }
  .line {
    border-bottom: 1px solid #f2f2f2;
  }
  @keyframes myfirst {
    0% {
      top: 88%;
    }
    100% {
      top: 92%;
    }
  }

  @-webkit-keyframes myfirst /* Safari and Chrome */ {
    0% {
      top: 88%;
    }
    100% {
      top: 92%;
    }
  }

  @keyframes textmove {
    0% {
      top: 95%;
    }
    100% {
      top: 75%;
    }
  }

  @-webkit-keyframes textmove /* Safari and Chrome */ {
    0% {
      top: 95%;
    }
    100% {
      top: 75%;
    }
  }
  @keyframes btshow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes btshow /* Safari and Chrome */ {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  a {
    color: rgba(51, 51, 51, 1);
  }
}
@media only screen and (max-width: 750px) {
  .layoutContent {
    position: fixed;
    z-index: 1000;
    width: 100%;
    display: flex;
    padding:0;
    margin:0;
    justify-content: space-between;
    box-sizing: border-box;
    background: white;
    overflow: hidden;
    align-items: center;
    box-shadow: 0px 2px 9px 1px rgba(153, 153, 153, 0.4);
    // border:1px solid red
  }
  .pageHeader_first {
    height: 100%;
    width: 7rem !important;  
    box-sizing: border-box;
    // border:1px solid red;
    margin:0 auto;
  }
  
  .footText {
    margin-bottom: 0.2rem;
    height: 0.15rem;
    font-size: 14px;
    // font-size: 0.14rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 0.18rem;
  }
  .min_part5 {
    width: 100%;
    height: 12.22rem;
    background: url("../../static/min_img/bg.png") no-repeat 0% 2.7rem;
    background-size: 100%;
    background-color: rgba(250, 250, 250, 1);
    box-sizing: border-box;
    padding-left: 0.74rem;
    box-sizing: border-box;
  }
  .footTitle_min {
    font-size: 0.36rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 900;
    color: rgba(0, 0, 0, 1);
    margin: 0.7rem 0 0.4rem;
  }
  .footText_min {
    font-size: 0.26rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin-bottom: 0.19rem;
  }
  .foot_img_min {
    width: 2.34rem;
  }
  .foot_line_min {
    width: 6.02rem;
    height: 0.02rem;
    background: rgba(230, 230, 230, 1);
    margin: 0.7rem 0 0.33rem;
  }
  .footer-title_min {
    height: 0.2rem;
    font-size: 0.2rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 0.18rem;
    margin-bottom: 0.15rem;
  }
  .foot_img_contain_min {
    width: 2.7rem;
    padding: 0.18rem;
    box-sizing: border-box;
    box-shadow: 0px 1px 10px 0px rgba(199, 194, 194, 0.5);
    background: white;
    margin-top: 0.71rem;
    margin-bottom: 0.3rem;
    font-size: 0.26rem;
  }
  .partTowTitle_min {
    width: 100%;
    height: 0.49rem;
    font-size: 0.5rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 900;
    color: rgba(51, 51, 51, 1);
    line-height: 0.3rem;
    margin: 0.7rem auto 0.27rem;
    text-align: center !important;
  }
  .partsmall_img {
    vertical-align: text-top;
    width: 3.02rem;
  }
  .partsmall_title {
    width: 90%;
    text-align: right;
  }
  .min_script {
    width: 6.02rem;

    font-size: 0.26rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 0.39rem;
    margin: 0 auto;
    text-align: justify;
    margin-bottom: 0.2rem;
  }
  .min_lookmore {
    width: 6.02rem;
    height: 0.58rem;
    border-radius: 0.06rem;
    font-size: 0.26rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    background: rgba(201, 160, 99, 1);
    color: white;
    line-height: 0.58rem;
    text-align: center;
    margin: 0.4rem auto 1.6rem;
  }
  .page_Foot {
    width: 100%;
    height: 3.6rem;
    background: rgba(238, 238, 238, 1);

    font-size: 0.14rem;
  }
  .footer_contain {
    width: 62.5%;
    margin: 0.74rem auto 0;
    display: flex;
    justify-content: space-between;
  }
  .foot_one {
    width: 60%;
    display: flex;
    justify-content: flex-start;
  }
  .foot_one_1 {
    width: 25%;
    display: flex;
    justify-content: flex-end;
  }
  .foot_text {
    width: 25%;
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  .footer_text {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .textcode_right {
    width: 100%;
    text-align: center;
  }
  .footer_text_title {
    font-size: 0.14rem;
    margin-bottom: 0.41rem;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .footer_text_title1 {
    margin-bottom: 0.14rem;
    font-size: 0.14rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    opacity: 0.6;
  }
  .code_right {
    width: 1.3rem;
    text-align: center;
    font-size: 0.14rem;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }
  .code_right img {
    width: 100%;
  }
  .footer_line {
    width: 62.5%;
    height: 1px;
    border: 1px solid rgba(179, 179, 179, 1);
    opacity: 0.3;
    margin: 0.39rem auto 0.19rem;
  }
  .footer_last {
    width: 62.5%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    color: rgba(102, 102, 102, 1);
    font-weight: 400;
  }
  .footer_left {
    display: flex;
    justify-content: flex-start;
  }
  .footer_last_right {
    text-align: right;
    width: 25%;
  }

  .pageContent {
    width: 100%;
    box-sizing: border-box;
    background: white;
    overflow: hidden;
    height: 100%;
  }
  .el-icon-close {
    font-size: 0.5rem !important;
    line-height: 1.12rem;
  }
  .navTabss {
    display: none !important;
  }
  .first_left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:1.12rem;
  }
  .pageHeader {
    width: 100% !important;
    background: rgba(255, 255, 255, 1);
    height: 1.12rem;
    box-shadow: 0px 2px 9px 1px rgba(153, 153, 153, 0.4);
    line-height: 1.12rem;
    box-sizing: border-box;
    overflow: hidden;
    // margin: 0 !important;
    padding: 0 !important;
  }

  .mintitle {
    // width:1.86rem;
   display: flex;
    height:1.12rem;
    font-size: 0.32rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    color: rgba(194, 161, 107, 1);
    align-items: center;
    
  }
  .phone {
    display: none;
  }
  .maximg {
    display: none;
  }
  .minimg {
    vertical-align: middle;
    margin-right: 0.21rem;
    height: 100%;
    display: flex;
    align-items: center;
    float: left;
  }
  .min_dis {
    width: 100%;
    box-shadow:0px 2px 9px 1px rgba(153,153,153,0.4);
    background: rgba(250, 250, 250, 1) !important;
    z-index: 1000;
    position: fixed;
    top: 1.11rem;
    left: 0;
   
  }
  .min_footer_right {
    text-align: left;
    width: 3.24rem;
    height: 1rem;
   
    height: 100px;
    padding-left:0.4rem;
    // background: url("../../static/min_img/kuang.png") no-repeat center;
    background-size: 100% 100%;
   
    
  }
  .min_footer_right_top{
    display: flex;
    justify-content: flex-start;
    margin-top:0.6rem;
    font-size:0.26rem;
    // color:rgba(201,160,99,1);
    vertical-align: middle;
    align-items: center;
  }
  .min_footer_right img{
    width:0.21rem;
    height:0.22rem;
    vertical-align: middle;
    margin-right:0.2rem;

   
    
  }
  //   .min_dis:last-child{

  //       border-bottom:none !important
  //   }

  .min_navTab {
    height: 1rem;
    margin: 0 auto;
    border-bottom: 1px solid rgba(220, 220, 220, 1);
    padding: 0 0.74rem;
    width: 6.02rem;
    font-size: 0.32rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 1rem;
  }
}
</style>


