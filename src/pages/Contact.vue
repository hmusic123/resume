/* eslint-disable no-new */
<template>
  <div class="contact">
    <!-- <div class='banner'>
            <img src='../../static/img/contactBanner.png'>
    </div>-->
    <div class="maxscreen">
      <div class="title">关注我们</div>
      <!-- <img src='../../static/img/connect-follow.png' style="margin-top:100px" > -->
      <div class="text">更多精彩内容 尽在自媒体平台～</div>
      <el-row style="width:80%;margin:0 auto;">
        <el-col :span="6">
          <img
            src="../../static/img/weixin.png"
            style="width:1.4rem"
            onMouseOver="this.src='../../static/img/laoxiangnong_wx.png'"
            onMouseOut="this.src='../../static/img/weixin.png'"
          />
          <div class="intro">微信公众号</div>
        </el-col>
        <el-col :span="6">
          <a  target="_blank">
            <img src="../../static/img/weibo.png" style="width:1.4rem" 
             onMouseOver="this.src='../../static/img/qidai.png'"
            onMouseOut="this.src='../../static/img/weibo.png'"
            />
            <div class="intro">新浪官方微博号</div>
          </a>
        </el-col>
        <el-col :span="6">
          <img
            src="../../static/img/douyin.png"
            style="width:1.4rem;"
            onMouseOver="this.src='../../static/img/qidai.png'"
            onMouseOut="this.src='../../static/img/douyin.png'"
          />
          <div class="intro">抖音认证号</div>
        </el-col>
        <el-col :span="6">
          <a href="https://www.toutiao.com/c/user/1675294631014988/" target="view_window">
            <img src="../../static/img/toutiao.png" style="width:1.4rem"
             onMouseOver="this.src='../../static/img/qidai.png'"
            onMouseOut="this.src='../../static/img/toutiao.png'"
             />
            <div class="intro">今日头条认证号</div>
          </a>
        </el-col>
      </el-row>
    </div>
    <!-- 第二部分 -->
    <div class="max" style="background:rgba(250,250,250,0.5);">
      <div class="maxscreen" style="background:rgba(250,250,250,0.5);">
        <div class="title" style="margin-top:0;padding-top:0;">购买渠道</div>
        <!-- <img src='../../static/img/connect-buy-channel.png'> -->
        <div class="text">更多优质产品购买 请认准官方渠道～</div>
        <el-row style="width:62.5%;margin:0 auto">
          <el-col :span="12">
            <img
              src="../../static/img/shanzhidao_img.png"
              style="width:1.4rem"
              onMouseOver="this.src='../../static/img/qidai.png'"
              onMouseOut="this.src='../../static/img/shanzhidao_img.png'"
            />
            <div class="intro">善之道茶油坊</div>
          </el-col>

          <el-col :span="12">
            <a href="http://www.jd.com" target="view_window">
              <img src="../../static/img/jingdong.png" style="width:1.4rem" 
              onMouseOver="this.src='../../static/img/qidai.png'"
              onMouseOut="this.src='../../static/img/jingdong.png'"
              />
              <div class="intro">京东旗舰店</div>
            </a>
          </el-col>
          <!-- <el-col :span="8">
            <a href="http://www.tmall.com" target="view_window">
              <img src="../../static/img/tianmao.png" style="width:1.4rem" />
              <div class="intro">天猫旗舰店</div>
            </a>
          </el-col> -->
        </el-row>
      </div>
    </div>

    <div class="maxscreen" style="margin-bottom:2.03rem">
      <!-- <img src='../../static/img/connect-jion.png'> -->
      <div class="title">加入我们</div>
      <div class="text">～ 加入善之道 成为合伙人 ～</div>
      <div class='text'>简历请发送至HR邮箱:<a href="mailto:zzcy_hr@sina.com">zzcy_hr@sina.com</a></div>
      <!-- <el-form :model="form" label-width="100px" ref="form" style="width:50%;margin:0 auto">
        <el-form-item label="姓名：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="邮箱：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系电话：">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <el-button style="background:rgba(201,160,99,1);color:#ffffff;width:1.3rem">申请加入</el-button> -->
    </div>
    <!-- 小屏幕 -->
    <div class="minscreen" style="margin-top:1.12rem;">
      <div class="title">关注我们</div>
      <!-- <img src='../../static/img/connect-follow.png' style="margin-top:100px" > -->
      <div class="text">更多精彩内容 尽在自媒体平台～</div>
      <el-row style="padding:0 1.35rem ;">
        <el-col :span="12" style="margin-bottom:0.79rem">
          <img
            src="../../static/img/weixin.png"
            style="width:1.4rem"
            onMouseOver="this.src='../../static/img/laoxiangnong_wx.png'"
            onMouseOut="this.src='../../static/img/weixin.png'"
          />
          <div class="intro">微信公众号</div>
        </el-col>
        <el-col :span="12" style="margin-bottom:0.79rem">
          <a  target="_blank">
            <img src="../../static/img/weibo.png" style="width:1.4rem" 
             onMouseOver="this.src='../../static/img/qidai.png'"
              onMouseOut="this.src='../../static/img/weibo.png'"
            />
            <div class="intro">新浪官方微博号</div>
          </a>
        </el-col>
        <el-col :span="12">
          <img
            src="../../static/img/douyin.png"
            style="width:1.4rem;"
            onMouseOver="this.src='../../static/img/qidai.png'"
            onMouseOut="this.src='../../static/img/douyin.png'"
          />
          <div class="intro">抖音认证号</div>
        </el-col>
        <el-col :span="12">
          <a  target="view_window">
            <img src="../../static/img/toutiao.png" style="width:1.4rem" 
            onMouseOver="this.src='../../static/img/qidai.png'"
              onMouseOut="this.src='../../static/img/toutiao.png'"
            />
            <div class="intro">今日头条认证号</div>
          </a>
        </el-col>
      </el-row>
    </div>
    <div class="minscreen" style="width:100%;height:5.57rem;background:rgba(250,250,250,1);margin-top:1.02rem">
        <div class="title" >购买渠道</div>
        <!-- <img src='../../static/img/connect-buy-channel.png'> -->
        <div class="text">更多优质产品购买 请认准官方渠道～</div>
        <!-- el-row临时修改 后面style 可以删掉 -->
        <el-row style="width:60%;margin:0 auto">
          <el-col :span="12">
            <img
              src="../../static/img/shanzhidao_img.png"
              style="width:1.4rem"
              onMouseOver="this.src='../../static/img/qidai.png'"
              onMouseOut="this.src='../../static/img/shanzhidao_img.png'"
            />
            <div class="intro">善之道茶油坊</div>
          </el-col>

          <el-col :span="12">
            <a  target="view_window">
              <img src="../../static/img/jingdong.png" style="width:1.4rem" 
               onMouseOver="this.src='../../static/img/qidai.png'"
              onMouseOut="this.src='../../static/img/jingdong.png'"
              />
              <div class="intro">京东旗舰店</div>
            </a>
          </el-col>
          <!-- <el-col :span="8">
            <a href="http://www.tmall.com" target="view_window">
              <img src="../../static/img/tianmao.png" style="width:1.4rem" />
              <div class="intro">天猫旗舰店</div>
            </a>
          </el-col> -->
        </el-row>
      </div>
       <div class="minscreen" style="margin-bottom:1rem">
      <!-- <img src='../../static/img/connect-jion.png'> -->
      <div class="title">加入我们</div>
      <div class="text">～ 加入善之道 成为合伙人 ～</div>
      <div class='text'>简历请发送至HR邮箱:<a href="mailto:zzcy_hr@sina.com">zzcy_hr@sina.com</a></div>
      <!-- <div class='text'>简历请发送至HR邮箱:<a href="mailto:zzcy_hr@sina.com">zzcy_hr@sina.com</a></div> -->
      <!-- <el-form :model="form" label-width="100px" ref="form" style="width:90%;margin:0 auto">
        <el-form-item style="display:flex;justify-content: flex-start;">
           
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="您的邮箱">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input></el-input>
        </el-form-item>
      </el-form> -->
      <!-- <div style="display:flex;justify-content: flex-start;font-size:0.28rem;font-weight:400;width:80%;margin:0 auto; align-items: center;">
          <span style="width:1.5rem;margin-right:0.1rem">姓&nbsp;&nbsp;名</span><el-input style="width：5.08rem"></el-input>
      </div>
      <div style="display:flex;justify-content: flex-start;font-size:0.28rem;font-weight:400;width:80%;margin:0 auto; align-items: center;">
          <span style="width:1.5rem;margin-right:0.1rem">油&nbsp;&nbsp;箱</span><el-input style="width：5.08rem"></el-input>
      </div>
      <div style="display:flex;justify-content: flex-start;font-size:0.28rem;font-weight:400;width:80%;margin:0 auto; align-items: center;">
          <span style="width:1.5rem;margin-right:0.1rem">联系方式</span><el-input style="width：5.08rem"></el-input>
      </div>
      <button style="background:rgba(201,160,99,1);
      color:#ffffff;width:1.6rem;
      text-align:center;
      height:0.58rem;
      font-size:0.26rem;border:none;border-radius:0.04rem;">申请加入</button> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "contact",
  data() {
    return {
      form: {}
    };
  }
};
</script>
<style lang="less" scoped>
.intro {
   
  font-size: 0.14rem;
  font-family: \5b8b\4f53, tahoma, arial, sans-serif;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
@media only screen and (max-width: 750px) {
  .intro{
    font-size: 0.26rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  }
  .maxscreen {
    // margin-top: 0.8rem;
    display: none;
  }
  .max {
    display: none !important;
  }
  .minscreen {
    width: 100%;

    background: rgba(255, 255, 255, 1);
    .title {
      padding: 0.8rem 0 0.14rem 0;
      font-size: 0.4rem;

      font-weight: 900;
      color: rgba(51, 51, 51, 1);
      font-family: \5b8b\4f53, tahoma, arial, sans-serif;
      font-weight: bold;
    }
    .text {
      font-size: 0.26rem;
      font-family: \5b8b\4f53, tahoma, arial, sans-serif;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      margin-bottom: 0.89rem;
    }
    img {
      display: inline-block;
    }
  }
}
@media only screen and (min-width: 751px) {
  .text {
      font-size: 0.14rem;
      font-family: \5b8b\4f53, tahoma, arial, sans-serif;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      margin-bottom: 0.89rem;
    }
  .minscreen {
    display: none;
  }
}
.max {
  width: 100%;
  height: 5rem;
  // background: rgba(255, 252, 247, 0.5);
  display: flex;
  align-items: center;
  // padding-top: 0.8rem
}
// .contact {
//   margin-top: 0.8rem;
// }

a {
  color: black;
}
a.div {
  color: black;
}
//   a.img:hover{
//         border-width: 0.01rem;
//         margin-top:-0.01rem;
//         margin-bottom: -0.01rem;
//         border-color: rgb(220, 220, 220);
//         border-style: solid;
//           border-radius: 50%;
//         background-color: rgb(255, 255, 255);
//         box-shadow: 0px 0.01rem 9px 0.01rem rgba(153, 153, 153, 0.3);
//     }
.banner {
  img {
    width: 100%;
  }
  
  background: rgba(255, 255, 255, 1);
}
.maxscreen {
  width: 62.5%;
  margin: 0.8rem auto;
  background: rgba(255, 255, 255, 1);
  .title {
    padding: 0.8rem 0 0.14rem 0;
    font-size: 0.4rem;

    font-weight: 900;
    color: rgba(51, 51, 51, 1);
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: bold;
  }
  .text {
    font-size: 0.14rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin-bottom: 0.89rem;
  }
  img {
    display: inline-block;
  }
}
.content2 {
  .title {
    margin: 0.8rem 0 0.14rem 0;
    font-size: 0.2rem;
    // font-family:\5b8b\4f53,tahoma,arial,sans-serif;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .text {
    font-size: 0.14rem;
    // font-family:\5b8b\4f53,tahoma,arial,sans-serif;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin-bottom: 0.28rem;
  }
  // padding:0 32%;
  padding: 0 25%;
  img {
    display: inline-block;
  }
  img:hover {
    border-width: 0.01rem;
    margin-top: -0.01rem;
    margin-bottom: -0.01rem;
    border-color: rgb(220, 220, 220);
    border-style: solid;
    // border-radius: 22%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0.02rem 0.01rem 0.09rem 0.01rem rgba(14, 13, 13, 0.3);
  }
}
.content3 {
  .title {
    margin: 0.8rem 0 0.14rem 0;
    font-size: 0.2rem;
    // font-family:\5b8b\4f53,tahoma,arial,sans-serif;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .text {
    font-size: 0.14rem;
    // font-family:\5b8b\4f53,tahoma,arial,sans-serif;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin-bottom: 0.28rem;
  }
  padding: 0 32%;
  height: 1rem;
  background: rgba(255, 255, 255, 1);
}
</style>


