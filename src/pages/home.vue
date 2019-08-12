<template>
  <div>
    <div class="maxscreen">
      <div class="swiper-container" :style="{height:imgHeight+'px'}">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <el-carousel
              indicator-position="inside"
              :height="imgHeight +'px'"
              :style="{width:imgWidth + 'px  !important'}"
            >
              <el-carousel-item v-for="(item, index) in sliders" :key="index">
                <img v-lazy="item.img" alt :style="{height:imgHeight+'px'}" />
                <!-- <img :src="item.img" alt style="width:100%" /> -->
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="swiper-slide">
            <!-- 第三部分 -->

            <div style="width:100%;height:100%;box-sizing:border-box ; " @click.stop="close">
              <div style="width:100%;height:99%;">
                <div
                  style="display:flex; justify-content: space-between;margin-top:1rem;width:62.5%;margin:0 auto;padding-top:1.5rem;"
                >
                  <div
                    style="text-align:center;box-sizing:border-box;margin:0.2rem ;width:5rem;position:relative;"
                  >
                    <img v-lazy="spUrl.url1" style="display:block;width:100%" />
                    <div style="text-align:left;box-sizing:border-box;margin:0.3rem 0">
                      <span style="font-size:0.28rem;color:#c9a063;">￥800</span>
                      <span style="font-size:0.14rem;color:#999999;padding:0.1rem">7ml * 40 瓶</span>
                    </div>
                    <div style="text-align:left;margin-bottom:0.23rem">
                      <p
                        style="font-size:0.26rem;color:#333333;text-align:left;font-weight:900;font-family:\5b8b\4f53,tahoma,arial,sans-serif;"
                      >善之道100%纯正山茶油 乐享系列 限量尊享 百年老树 万粒挑一</p>
                      <!-- <p
                        style="font-size:0.26rem;color:#333333;padding:0.05rem 0;text-align:left;font-weight:900;font-family:\5b8b\4f53,tahoma,arial,sans-serif;"
                      >百年老树 万粒挑一</p> -->
                    </div>

                    <ul class="cycpul">
                      <li class="li">
                        <span>多层筛选工艺</span>
                      </li>
                      <li class="li">
                        <span>全程无添加</span>
                      </li>
                      <li class="li">
                        <span>保留活性成分</span>
                      </li>
                      <li class="li">
                        <span>恢复肠动力</span>
                      </li>
                    </ul>
                    <div v-if="vm.showDialog" class="lookMoreEwm">
                      <div>
                        <!-- <div style="width:90%;text-align:right;color:red" @click="close">x</div> -->
                        <!-- <div @click="close" class="closeImg"></div> -->
                        <div style="widht:90%;margin: 0.2rem;">
                          <img src="../../static/img/laoxiangnong_wx.png" style="width:100%;" />
                        </div>

                        <p style="font-size:0.14rem;color:rgba(51,51,51,1);">
                          微信扫码进入商城
                          <br />查看更多商品详情
                        </p>
                      </div>
                    </div>
                    <div style="width:1.60rem;height:0.4rem;">
                      <div
                        @click.stop="lookMore"
                        style="cursor: pointer;height:0.4rem;line-height:0.4rem;margin-top:0.3rem;width:1.3rem;background:rgba(201, 169, 99, 1);font-size:0.12rem;border-radius:0.04rem;
                color:white;float:left"
                      >查看更多</div>
                    </div>
                  </div>

                  <div
                    style="text-align:center;box-sizing:border-box;margin:0.2rem 0;width:5rem;position:relative;"
                  >
                    <img v-lazy="spUrl.url2" style="wdith:100%;display:block" />
                    <div style="text-align:left;box-sizing:border-box;margin:0.3rem 0">
                      <span style="font-size:0.28rem;color:#c9a063;">￥800</span>
                      <span style="font-size:0.14rem;color:#999999;padding:0.1rem">50ml * 10 瓶</span>
                    </div>
                    <div style="text-align:left;margin-bottom:0.23rem">
                      <p
                        style="font-size:0.26rem;color:#333333;text-align:left;font-weight:900;font-family:\5b8b\4f53,tahoma,arial,sans-serif;"
                      >
                            善之道100%纯正山茶油 纯善系列 悦享品质 源于天然 将爱传递
                        </p>
                      <!-- <p
                        style="font-size:0.26rem;color:#333333;padding:0.05 0rem;text-align:left;font-weight:900;font-family:\5b8b\4f53,tahoma,arial,sans-serif;"
                      >源于天然 将爱传递</p> -->
                    </div>

                    <ul class="cycpul">
                      <li class="li">
                        <span>低温压榨</span>
                      </li>
                      <li class="li">
                        <span>科学配比</span>
                      </li>
                      <li class="li">
                        <span>营养均衡</span>
                      </li>
                      <li class="li">
                        <span>超高烟点</span>
                      </li>
                    </ul>
                    <div v-if="vm.showDialog3" class="lookMoreEwm">
                      <div>
                        <!-- <div style="width:90%;text-align:right;color:red" @click="close">x</div> -->
                        <!-- <div @click="close" class="closeImg"></div> -->
                        <div style="widht:90%;margin: 0.2rem;">
                          <img src="../../static/img/laoxiangnong_wx.png" style="width:100%;" />
                        </div>

                        <p style="font-size:0.14rem;color:rgba(51,51,51,1);">
                          微信扫码进入商城
                          <br />查看更多商品详情
                        </p>
                      </div>
                    </div>
                    <div style="width:1.60rem;height:0.4rem;">
                      <div
                        @click.stop="lookMore2"
                        style="cursor: pointer;height:0.4rem;line-height:0.4rem;margin-top:0.3rem;width:1.3rem;background:rgba(201, 169, 99, 1);font-size:0.12rem;border-radius:0.04rem;
                color:white;float:left"
                      >查看更多</div>

                      <!-- <img src="../../static/img/laoxiangnong_xiaochengxu.png" v-show="this.isshow1"/> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" style="height:100%">
            <!-- 第二部分 -->

            <div style="width:62.5%;height:100%;padding-top:5%">
              <div class="productIntro" style="margin:0 auto;padding-top:5%">
                <div style="margin:0 auto">
                  <div style="height:auto;display:flex; justify-content: space-between;">
                    <div>
                      <img
                        src="../../static/img/index-2.png"
                        style="height: 3.35rem; width: 4.45rem"
                      />
                    </div>
                    <div>
                      <p
                        class="partTowTitle"
                        style="text-align:left;margin-bottom:0.3rem"
                      >只做百分百纯正山茶油</p>
                      <p
                        style="text-align:justify;margin:0.3rem;font-size:0.14rem;color:rgba(51,51,51,1);line-height:0.3rem;width:5.38rem;margin:0"
                      >
                        善之道茶油品牌，采用百年老树，万粒挑一的选材标准，从源头严格把关质量，
                        采用先进的物理低温压榨工艺，以做100%纯正山茶油为品牌使命。严格按照最符合人体营养需求的8:1:1配比，在最大程度上保证醇香口感的同时保留山茶油中的多种微量元素。
                        立志以品牌 品质 品格，为世界人民的健康加油。善之道品牌版权、经营权为长沙中战茶油有限公司独有。
                      </p>

                      <router-link :to="{name: 'about'}">
                        <p
                          style="
                          border-radius:0.04rem;
                  width:5.38rem;
                  height:0.4rem;line-height:0.4rem;margin:0.3rem 0;width:1.3rem;background:rgba(194, 161, 107, 1);font-size:0.1rem;color:white"
                        >查看更多</p>
                      </router-link>
                    </div>
                  </div>
                  <div style="height:auto;display:flex; justify-content: space-between">
                    <div>
                      <p
                        class="partTowTitle"
                        style="text-align:right;margin-right:0.5rem"
                      >传 承、品 质、服 务</p>
                      <p
                        style="text-align:justify;margin:0.3rem;font-size:0.14rem;color:rgba(51,51,51,1);line-height:0.3rem;width:5.38rem"
                      >
                        长沙中战茶油有限公司是一家专业从事茶油研发和销售的国家高新技术企业。公司于2018年12月注册成立，是中战华信资产管理集团有限公司的全资子公司。
                        公司以“传承千年膳食理念 铸就百年健康产业”为企业愿景，公司于2019年，与湖南省现代农业产业控股集团签订战略协议，双方将并肩作战，共同推动“湖南茶油”公用品牌建设，将茶油打造成中国名片和世界知名品牌。
                      </p>
                      <!-- <router-link :to="{name: 'information'}">
                        <p
                          style="
                          border-radius:4px;
                          height:0.3rem;line-height:0.3rem;margin:0.3rem;width:1rem;background:rgba(194, 161, 107, 1);font-size:0.1rem;color:white"
                        >查看更多</p>
                      </router-link> -->
                    </div>
                    <div>
                      <img
                        src="../../static/img/index-3.png"
                        style="height: 3.35rem; width: 4.45rem"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <!-- 第四部分 -->
            <div
              style="width:62.5%;height:100%;display:flex;justify-content: space-between;padding-top:2.5rem;box-size:border-box "
            >
              <div class="max_card">
                <p class="max_card_title">合伙加入</p>
                <p class="max_card_title2">一起成为茶油的推动人</p>
                <p
                  class="max_card_title3"
                >线上线下的高度融合，每一个渠道都是善之道与消费者连通的触点，让我们满足消费者需求的同时，让每一个客户都能随时随地地享受善之道提供的高品质服务，共同推进茶油事业的发展。</p>
                <div class="max_card_img">
                  <img v-lazy="spUrl.join" style="width:100%" />
                </div>
              </div>
              <div class="max_card">
                <p class="max_card_title">会员专区</p>
                <p class="max_card_title2">众多养生达人齐聚于此</p>
                <p class="max_card_title3">关注官方微信公众号，可注册成为会员，根据您的消费情况定级并提供会员专享服务。</p>
                <div class="max_card_img">
                  <img v-lazy="spUrl.huiyuan" style="width:100%" />
                </div>
              </div>
              <div class="max_card">
                <p class="max_card_title" style="fon-size:0.16rem">购买方式</p>
                <p style="font-size:0.14rem;" class="max_card_title2">多种购买方式任君挑选</p>
                <p style="font-size:0.14rem;">京东商城</p>
                <p style="font-size:0.14rem;margin-top:0.1rem">善之道商城</p>
                <div class="max_card_img">
                  <img v-lazy="spUrl.buy" style="width:100%" />
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <!-- 第五部分 -->
            <div style="width:100%;height:100%;padding-top:2.88rem;">
              <div
                style="background:white;width:11.27rem;
                margin:0 auto;height:80%;
                background:url('../../static/img/index-4.png') no-repeat  center;background-size:80%"
              >
                <div style="height:2rem;width:100%;display:flex;justify-content: space-between;">
                  <div style="width:45%;display:flex;">
                    <div
                      style="height:2rem;display:flex;flex-direction: column;text-align:left;margin:0 0.8rem 0 1.36rem;"
                    >
                      <span class="footTitle">关注我们</span>
                       <a
                       
                        target="_blank"
                        class="footText"
                      >善之道官方微博
                     
                      </a>
                       <a
                       
                        target="_blank"
                        class="footText"
                      >今日头条认证号
                      
                      </a>
                    </div>
                     
                     
                    <div style="height:2rem;display:flex;flex-direction: column;text-align:left">
                      <span class="footTitle">线上商城</span>
                      <a class="footText"  target="_black">京东商城</a>
                      <!-- <a class="footText" href="http://www.jd.com" target="_black">天猫商城</a>
                      <a class="footText" href="http://www.jd.com" target="_black">善之道茶油坊</a>-->
                    </div>
                  </div>
                  <div style="width:45%;display:flex;justify-content: flex-end;">
                    <div style="height:2rem;display:flex;flex-direction: column;">
                      <div style="width:1.3rem;">
                        <img
                          style="margin:0 auto;margin-bottom:0.09rem"
                          src="../../static/img/gongzhonghao.png"
                        />
                      </div>

                      <span class="footText" style="text-align:center">微信公众号</span>
                    </div>
                    <div
                      style="height:2rem;display:flex;flex-direction: column;margin-right:1.47rem;margin-left:0.9rem"
                    >
                      <div style="width:1.3rem">
                        <img
                          style="margin:0 auto;margin-bottom:0.09rem"
                          src="../../static/img/szdxiaochengxu.png"
                        />
                      </div>

                      <span class="footText" style="text-align:center">微信小程序</span>
                    </div>
                  </div>
                </div>

                <!-- <div style="width:100%;height:5rem;margin-bottom:1rem;background:url('../../static/img/index-4.png') no-repeat  center;background-size:80%" >
                  <img src="../../static/img/index-4.png" style="width:100%" />
                </div>-->
              </div>
              <div style="height:20%">
                <span class="footer-title">长沙中战茶油有限公司</span>
                <span class="footer-title">湖南省长沙市开福区玛丽莱珠宝大厦10楼 湘ICP备17029384号-1</span>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!-- 小屏幕 -->
    <div class="minscreen">
      <el-carousel indicator-position="none" height="4rem">
        <el-carousel-item v-for="(item, index) in sliders" :key="index">
          <img :src="item.img" alt style="width:100%;height:4rem" />
        </el-carousel-item>
      </el-carousel>

      <!-- 第二部分 -->

      <div class="section">
        <div class="specifications_min">
          <p class="partTowTitle_min">茶油产品</p>

          <div style="text-align:center;box-sizing:border-box;width:100%;">
            <img src="../../static/img/product_33.png" style="width:6.02rem;margin:0rem 0 0.32rem" />
            <div style="text-align:left;box-sizing:border-box">
              <span class="min_price">
                ￥
                <span class="min_count">800</span>
              </span>
              <span class="min_ping">7ml * 40瓶</span>
            </div>
            <div>
              <p class="min_sp_script">善之道100%纯正山茶油 乐享系列 限量尊享 百年老树 万粒挑一</p>
            </div>

            <ul class="cycpul_min">
              <li class="cycpul_min_lie">
                <span>多层筛选工艺</span>
              </li>
              <li class="cycpul_min_lie">
                <span>全程无添加</span>
              </li>
              <li class="cycpul_min_lie">
                <span>保留活性成分</span>
              </li>
              <li class="cycpul_min_lie">
                <span>恢复肠动力</span>
              </li>
            </ul>

            <div>
              <div @click="vm.showDialog1=true" class="min_lookmore_two">查看更多</div>
              <!-- <div id="exam" class="erweima">
                <Dialog @closeDialog="close" v-if="vm.showDialog1"></Dialog>
              </div>-->
              <!-- <div v-if="vm.showDialog1" style="
               width:5.01rem;height:8.40rem;
               z-index:100000;text-aligin:center;margin:-1rem auto 0;border-radius:6px;">
                    <div >
                      <div @click="close" style="font-size:0.52rem;text-align:right">x</div>
                      <img
                        src="../../static/img/xiaochengxu.jpg"
                        style="margin-top:0.3rem;width:100%"
                      />
                      <p style="width:3.38rem;
                          height:0.92rem;
                          font-size:0.36rem;
                          margin:0 auto 1.47rem;
                          text-align:center;
                          font-weight:400;
                          
                          color:rgba(51,51,51,1);
                          line-height:0.56rem;">微信扫码进入商城
                          <br>
                          查看更多商品详情</p>
                          <img src="../../static/min_img/logo.png" style="width:1.4rem;margin:0 auto" />
                    </div>
              </div>-->
            </div>
          </div>
          <el-dialog :visible.sync="vm.showDialog1" width="80%" center>
            <img src="../../static/img/szdxiaochengxu.png" style="margin-top:0.3rem;width:100%" />
            <p
              style="width:3.38rem;
                          height:0.92rem;
                          font-size:0.36rem;
                          margin:0 auto 1.47rem;
                          text-align:center;
                          font-weight:400;
                          
                          color:rgba(51,51,51,1);
                          line-height:0.56rem;"
            >
              微信扫码进入商城
              <br />查看更多商品详情
              <br />长按保存二维码
            </p>
            <div style="width:1.4rem;margin:0 auto">
              <img src="../../static/min_img/logo.png" style="width:1.4rem;margin:0 auto" />
            </div>
          </el-dialog>
          <div style="text-align:center;box-sizing:border-box;width:100%;">
            <img
              src="../../static/img/product_22.png"
              style="width:6.02rem;margin:0.74rem 0 0.32rem"
            />
            <div style="text-align:left;box-sizing:border-box">
              <span class="min_price">
                ￥
                <span class="min_count">800</span>
              </span>
              <span class="min_ping">50ml * 10瓶</span>
            </div>
            <div>
              <p class="min_sp_script">
                            善之道100%纯正山茶油 纯善系列 悦享品质 源于天然 将爱传递
                        </p>
            </div>

            <ul class="cycpul_min">
              <li class="cycpul_min_lie">
                <span>低温压榨</span>
              </li>
              <li class="cycpul_min_lie">
                <span>科学配比</span>
              </li>
              <li class="cycpul_min_lie">
                <span>营养均衡</span>
              </li>
              <li class="cycpul_min_lie">
                <span>超高烟点</span>
              </li>
            </ul>

            <div>
              <div @click="vm.showDialog1= true" class="min_lookmore_two">查看更多</div>

              <!-- <div id="exam">
                <Dialog @closeDialog="close" v-if="vm.showDialog"></Dialog>
              </div>-->
            </div>
          </div>
        </div>
      </div>
      <!-- 第三部分 -->
      <div class="section">
        <div class="productIntro">
          <div class="productIntroSec">
            <div style="width:100%;">
              <p class="partTowTitle_min" style="text-align:left;margin-bottom:0.3rem">只做百分百纯正山茶油</p>
              <p class="partsmall_title">—— 关于我们</p>
              <div style="width:100%;">
                <img src="../../static/img/index-2.png" class="partsmall_img" />
              </div>
              <p class="min_script">善之道 —— 于2019年初创立，由长沙中战茶油有限公司与湖南省现代农业产业控股集团联合打造。</p>
              <p class="min_script">采用纯野生山茶籽为原料，生产符合人体营养需求的8：1：1黄金比例纯正山茶油。</p>

              <router-link :to="{name: 'about'}">
                <p class="min_lookmore">查看更多</p>
              </router-link>
            </div>

            <div style="width:100%">
              <p class="partTowTitle_min" style="text-align:center;margin-right:0.5rem">传 承、品 质、服 务</p>
              <p class="partsmall_title">—— 资讯动态</p>
              <div style="width:100%">
                <img src="../../static/img/index-3.png" class="partsmall_img" />
              </div>
              <p class="min_script" style="margin-bottom:1rem">2019年6月12日，长沙中战茶油有限公司携手湖南省现代农业产业控股集团联合成立中战茶油研究院，为研发更高品质茶油拉开序幕。</p>
              <!-- <router-link :to="{name: 'information'}">
                <p class="min_lookmore">查看更多</p>
              </router-link> -->
            </div>
          </div>
        </div>
      </div>

      <div class="home_card">
        <!-- <div class="line"></div> -->
        <div class="partTowTitle_min">合伙加入</div>
        <p class="home_card_small_title">一起成为茶油的推动人</p>
        <p class="home_card_small_content" style="margin-bottom:0.2rem">
          线上线下的高度融合，每一个渠道都是善之道与消费者连通的触点，让我们满足消费者需求的同时，
          让每一个客户都能随时随地地享受善之道提供的高品质服务，共同推进茶油事业的发展。
        </p>
        <img src="../../static/min_img/join.png" style="width:1.41rem;vertical-align:center" />
      </div>
      <div class="home_card">
        <!-- <div class="line"></div> -->
        <p class="partTowTitle_min">会员专区</p>
        <p class="home_card_small_title">众多养生达人齐聚于此</p>
        <p class="home_card_small_content">关注官方微信公众号，可注册成为会员，根据您的消费情况定级并提供会员专享服务。</p>
        <img
          src="../../static/min_img/huiyuan.png"
          style="width:1.71rem;vertical-align:center;margin-top:0.47rem"
        />
      </div>

      <div class="home_card">
        <p class="partTowTitle_min">购买方式</p>
        <p class="home_card_small_title">多种购买方式任君挑选</p>
        <p class="partTowTitle_min2_3">京东商城</p>
        <p class="partTowTitle_min2_3">善之道小程序</p>
        <img
          src="../../static/min_img/buy.png"
          style="width:1.71rem;vertical-align:center;margin-top:0.47rem"
        />
      </div>
      <!-- 第五部分 -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Dialog from "../components/Dialog";
import Swiper from "swiper";
Vue.component("Dialog", Dialog);
export default {
  name: "slider",
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 5
    }
  },

  data() {
    return {
      spUrl: {
        url1: "../../static/img/product_33.png",
        url2: "../../static/img/product_22.png",
        join: "../../static/img/join.png",
        huiyuan: "../../static/img/huiyuan.png",
        buy: "../../static/img/buy.png"
      },

      a: false,
      indexAct: 2,
      active: 0,
      value3: 0,
      setting: {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: "inside",
        radiusDot: false,
        trigger: "click",
        arrow: "always",
        height: "auto"
      },
      vm: {
        showDialog: false,
        showDialog1: false,
        showDialog3: false
      },
      isshow1: false,
      isshow2: false,
      titleArr: [
        {
          CH: "首页",
          // EN:'HOME',
          // routerName: "index",
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
        {
          CH: "资讯动态",
          // EN:'Dynamic information',
          routerName: "information",
          isSelect: false
        },
        {
          CH: "联系我们",
          // EN:'CONTACT US',
          routerName: "contact",
          isSelect: false
        }
      ],

      sliders: [
        // {
        //   img: "http://www.zzchayou.com/imgs/banner2.png"
        // },
        // {
        //   img: "http://www.zzchayou.com/imgs/banner1.png"
        // }
         {
          img: "../../static/img/banner222.png"
        },
        {
          img: "../../static/img/banner444.png"
        }
      ],
      w: document.documentElement.clientWidth,
      imgWidth: document.documentElement.clientWidth,
      imgHeight: document.documentElement.clientHeight,
      imgheight: 10,
      currentIndex: 1,
      distance: -document.documentElement.clientWidth,
      transitionEnd: true,
      speed: this.initialSpeed,
      clientWidth: 800
    };
  },
  methods: {
    stopPropagation(event) {
      if (event) {
        event.stopPropagation
          ? event.stopPropagation()
          : (event.cancelBubble = true);
      }
    },
    linkTo() {
      let activeIndex = this.$refs.carousel.activeIndex;
    },
    carousechange(e) {
      console.log(e);
      this.indexAct = e;
    },
    mousewheel() {
      console.log(1111);
    },
    imghover() {
      this.setting.autoplay = false;
    },
    imgleave() {
      this.setting.autoplay = true;
    },
    close() {
      this.vm.showDialog = false;
      this.vm.showDialog1 = false;
      this.vm.showDialog3 = false;
      console.log(222);
    },
    // hidden(){
    //    this.vm.showDialog = false;
    //     this.vm.showDialog3 = false;
    // },
    lookMore2() {
      this.vm.showDialog3 = true;
      this.vm.showDialog = false;
    },
    lookMore() {
      this.vm.showDialog3 = false;
      this.vm.showDialog = true;
      console.log(1111);
      console.log(this.vm.showDialog);
    },
    changeTab(idx, url) {
      console.log(368, idx);
      this.titleArr.forEach(element => {
        element.isSelect = false;
      });
      this.titleArr[idx].isSelect = true;
      console.log(348, url);
      if (url) {
        this.$router.push({ path: url });
      }
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = window.setInterval(() => {
        this.move(this.w, -1, this.speed);
      }, this.interval);
    },
    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    },
    init() {
      this.play();
      window.onblur = function() {
        this.stop();
      }.bind(this);
      window.onfocus = function() {
        this.play();
      }.bind(this);
    },
    move(offset, direction, speed) {
      if (offset == 0) offset = this.w;
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      direction === -1
        ? (this.currentIndex += offset / this.w)
        : (this.currentIndex -= offset / this.w);
      if (this.currentIndex > 2) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = 2;
      const destination = this.distance + offset * direction;
      this.animate(destination, direction, speed);
    },
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null;
      }
      this.temp = window.setInterval(() => {
        if (
          (direc === -1 && des < this.distance) ||
          (direc === 1 && des > this.distance)
        ) {
          this.distance += speed * direc;
        } else {
          this.transitionEnd = true;
          window.clearInterval(this.temp);
          this.distance = des;
          if (des < -this.w * 2) this.distance = -this.w;
          if (des > -this.w) this.distance = -this.w * 2;
        }
      }, 20);
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(index - this.currentIndex) * this.w;
      const jumpSpeed =
        Math.abs(index - this.currentIndex) === 0
          ? this.speed
          : Math.abs(index - this.currentIndex) * this.speed;
      this.move(offset, direction, jumpSpeed);
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
      console.log(197, e);
      let distance = e.deltaY;
      if (distance > 0) {
        console.log(1);
        // prev()
        this.indexAct = this.indexAct - 1;
        console.log(this.indexAct);
      } else {
        console.log(0);
        this.indexAct = this.indexAct + 1;
        console.log(this.indexAct);
        //  next()
      }
    }
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      };
    },
    interval() {
      return this.initialInterval * 1000;
    }
  },
  // watch:{
  //   changevisiblity: function (val) {
  //      console.log(val);   // 接收父组件的值
  //     }
  // },
  created() {
    console.log(459, document.documentElement.clientWidth);
    console.log(document.documentElement.clientHeight);
  },
  mounted() {
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
    new Swiper(".swiper-container", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });

    this.init();
    // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
    // this.imgWidth = document.documentElement.clientWidth ;
    // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    let that = this;
    window.onresize = function temp() {
      that.imgWidth = document.documentElement.clientWidth;
      that.imgHeight = document.documentElement.clientHeight;
      that.distance = -document.documentElement.clientWidth;
      // that.imgWidth= document.documentElement.clientWidth+0.1
      console.log(441, that.clientWidth);
      console.log(551, that.imgHeight);
    };
  }
};
</script>

<style lang="less" >
@media only screen and (max-width: 750px) {
  .minscreen {
    display: block;
    font-size: 12px;
    background: white;
    box-sizing: border-box;
    margin-top: 1.12rem;
  }
  .maxscreen {
    display: none;
  }
  .home_card {
    width: 6.01rem;
    height: 5.8rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 10px 0px rgba(199, 194, 194, 0.5);
    border-radius: 0.06rem;
    margin: 0 auto 0.41rem;
    padding-top: 0.16rem;
  }
  .line {
    width: 100%;
    height: 6px;
    background: rgba(201, 160, 99, 1);
    border-radius: 4px 4px 0px 0px;
  }
  .home_card_small_title {
    width: 100%;
    text-align: center;
    font-size: 0.26rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: bold;
    color: rgba(201, 160, 99, 1) !important;
  }
  .home_card_small_content {
    width: 5.39rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    font-size: 0.26rem;
    text-align: justify;

    margin: 0.45rem auto;
  }
  .home_card2 {
    width: 6.01rem;
    height: 5.8rem;
    background: linear-gradient(
      0deg,
      rgba(240, 204, 152, 1) 1%,
      rgba(201, 160, 99, 1) 100%
    );
    box-shadow: 0px 1px 10px 0px rgba(199, 194, 194, 0.5);
    border-radius: 3px;
    border-radius: 0.06rem;
    margin: 0 auto 0.41rem;
    padding-top: 0.6rem;
    box-sizing: border-box;
    text-align: center;
  }
  .partTowTitle_min2 {
    margin-top: 0.6rem;
    height: 0.48rem;
    font-size: 0.5rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 900;
    // color:rgba(255,255,255,1);
    line-height: 0.24rem;
  }
  .partTowTitle_min2_2 {
    font-size: 0.26rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: bold;
    color: rgba(243, 216, 176, 1);
    margin: 0.28rem 0 0.49rem;
  }
  .partTowTitle_min2_3 {
    font-size: 0.26rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    // color:rgba(255,255,255,1);
    margin-bottom: 0.05rem;
  }
  .min_part5 {
    width: 100%;
    height: 12.22rem;
    background: url("../../static/min_img/bg.png") no-repeat 0% 2.7rem;
    background-size: 100%;
    background-color: rgba(250, 250, 250, 1);

    padding-left: 0.74rem;
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
  .footText_min:hover {
    color: rgba(243, 216, 176, 1);
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
    margin-bottom: 0.2rem;
  }
  .partTowTitle_min {
    width: 100%;
    height: 0.49rem;
    font-size: 0.4rem;
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
  .specifications_min {
    margin-bottom: 1.26rem;
  }
  .min_price {
    margin-left: 0.74rem;
    font-size: 0.26rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 500;
    color: rgba(201, 160, 99, 1);
  }
  .min_count {
    font-size: 0.5rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 900;
    color: rgba(201, 160, 99, 1);
    line-height: 0.42rem;
  }
  .min_ping {
    width: 120px;
    height: 24px;
    font-size: 0.26rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    margin-left: 0.41rem;
    margin-bottom: 0.31rem;
  }
  .min_sp_script {
    width: 6.00rem;
    height: 0.7rem;
    font-size: 0.28rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 900;
    color: rgba(51, 51, 51, 1);
    line-height: 0.42rem;
    text-align: justify;
    margin: 0.31rem auto 0.23rem;
  }
  .cycpul_min {
    font-size: 0.12rem;
    text-align: left;
    width: 80%;
   
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    // margin-left: 0.74rem;
    margin-bottom: 0.48rem;
  }
  .cycpul_min_lie {
    border: 1px solid rgba(201, 160, 99, 1);
    border-radius: 0.02rem;
    padding: 0.03rem;
    color: rgba(201, 160, 99, 1);
    margin-right: 0.24rem;
    margin-bottom: 0.13rem;
  }
  .cycpul_min_lie span {
    height: 0.24rem;
    font-size: 0.24rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    color: rgba(201, 160, 99, 1);
    line-height: 0.24rem;
  }
  .min_lookmore_two {
    width: 1.6rem;
    height: 0.58rem;
    line-height: 0.58rem;
    background: rgba(201, 160, 99, 1);
    border-radius: 0.06rem;
    color: white;
    margin-left: 0.74rem;
    font-size: 0.26rem;
    cursor: pointer;
  }

  .imgselected {
    height: 100%;
    border: 0.02rem solid rgba(201, 160, 99, 1);
    -moz-box-shadow: 0.02rem 0.02rem 0.02rem #999999;
    -webkit-box-shadow: 0.02rem 0.02rem 0.02rem #999999;
    box-shadow: 0.02rem 0.02rem 0.02rem #999999;
  }
}

@media only screen and (min-width: 751px) {
  body,
  html {
    width: 100%;
    height: 100%;
  }
  .lookMoreEwm {
    width: 1.83rem;
    height: 3.1rem;
    display: flex;
    z-index: 1000;
    position: absolute;
    bottom: 0.2rem;
    left: -0.1rem;
    background: url("../../static/img/duobian.png") no-repeat center;
    background-size: 1.83rem 3.1rem;
    // backgrond-size:1.83rem 2.42rem
  }
  .max_card {
    width: 3.8rem;
    height: 5.8rem;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    border-radius: 0.04rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    position: relative;
    color: rgba(0, 0, 0, 1);
  }
  // .max_card:hover {
  //   border-radius: 4px;
  //   background-image: -moz-linear-gradient(
  //     90deg,
  //     rgb(240, 204, 152) 0%,
  //     rgb(201, 160, 99) 100%
  //   );
  //   background-image: -webkit-linear-gradient(
  //     90deg,
  //     rgb(240, 204, 152) 0%,
  //     rgb(201, 160, 99) 100%
  //   );
  //   background-image: -ms-linear-gradient(
  //     90deg,
  //     rgb(240, 204, 152) 0%,
  //     rgb(201, 160, 99) 100%
  //   );
  //   box-shadow: 0px 4px 3.6px 0.4px rgba(164, 121, 58, 0.5);
  //   color: rgba(255, 255, 255, 1) !important;
  //   background: linear-gradient(
  //     0deg,
  //     rgba(240, 204, 152, 1),
  //     rgba(201, 160, 99, 1)
  //   );
  // }
  // .max_card_title2:hover {
  //   color: rgba(239, 216, 183, 1) !important;
  // }
  .max_card_title {
    width: 100%;
    height: 0.39rem;
    font-size: 0.4rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 900;

    line-height: 0.24rem;
    margin-top: 0.68rem;
    margin-bottom: 0.26rem;
  }
  .max_card_title2 {
    width: 100%;

    height: 0.16rem;
    font-size: 0.16rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    color: rgba(201, 160, 99, 1);
    line-height: 0.24rem;
    margin-bottom: 0.79rem;
  }
  .max_card_title3 {
    width: 85%;
    margin: 0 auto 0.68rem;
    height: 0.99rem;
    font-size: 0.14rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    line-height: 0.28rem;
    text-align: justify;
  }
  .max_card_img {
    width: 1.18rem;
    position: absolute;
    left: 1.31rem;
    bottom: 0.46rem;
  }
  .minscreen {
    display: none;
  }
  .maxscreen {
    display: block;
    overflow-y: hidden;
  }
  .swiper-container-vertical > .swiper-pagination-bullets {
    right: 50px !important;
  }
  .swiper-container-vertical
    > .swiper-pagination-bullets
    .swiper-pagination-bullet {
    // padding-left:10px !important;
    margin: 20px auto !important;
  }
  // 右侧小圆点
  .swiper-pagination-bullet {
    width: 0.08rem !important;
    height: 0.08rem !important;
    background: rgba(204, 204, 204, 1) !important;
    border-radius: 50% !important;
    margin-bottom: 20px !important;
  }
  // 激活的颜色
  .swiper-pagination-bullet-active {
    background: rgba(255, 255, 255, 1) !important;
    width: 0.16rem !important;
    height: 0.16rem !important;
    box-shadow: 0px 1px 9px 1px rgba(153, 153, 153, 0.4) !important;
  }
  .el-carousel__indicator.is-active button {
    background-color: orange !important;
  }
  .el-carousel__button {
    width: 0.2rem !important;
    height: 0.2rem !important;
    margin: 0 0.03rem !important;
    border: 0.01rem solid white !important;
    border-radius: 50% !important;
    background-color: #333 !important;
    cursor: pointer;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    overflow-y: hidden;
    box-shadow: border-box;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: auto;
    overflow: hidden;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide img {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .partTowTitle {
    height: 0.48rem;
    font-size: 0.5rem;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: bold;
    color: rgba(194, 161, 107, 1);
    line-height: 0.3rem;
  }
  .productIntroSec {
    width: 90%;
    margin-left: 10%;
    margin-top: 0.8rem;
  }
  #fp-nav.fp-right {
    right: 0.17rem;
    background: blue !important;
  }

  /* //@import "fullpage.min.css"; */
  #exam {
    width: 100%;
    height: 100%;
  }

  #fp-nav.fp-right {
    right: 0.17rem;
    color: yellow;
    background: blue;
  }
  #fp-nav ul li .fp-tooltip.fp-right {
    background: red;
  }

  #fp-nav ul li a.active span,
  .fp-slidesNav ul li a.active span {
    //#fp-nav ul li:hover a.active span,.fp-slidesNav ul li a.active span,.fp-slidesNav ul li:hover a.active span{

    background: yellow; /*活动导航的颜色*/
  }
  #fp-nav ul li a span,
  .fp-slidesNav ul li a span {
    background: red; /*非活动导航的颜色*/
    height: 0.08rem;
    width: 0.08rem;
    margin: -0.04rem 0 0 -0.04rem;
  }

  .footerH {
    height: auto !important;
  }
  .footTitle {
    height: 0.14rem;
    font-size: 0.2rem;
    // font-size: 20px;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    // line-height:0.18rem;
    // margin-top: 0.8rem;
    margin-bottom: 0.59rem;
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
  .footText:hover {
    // color: rgba(201, 160, 99, 1);
    color: rgba(102, 102, 102, 1);
  }
  .cycpul {
    font-size: 0.12rem;
    text-align: left;
    margin-left: 0.05rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    .li {
      padding: 0.02rem;
      color: rgba(201, 160, 99, 1);
      text-indent: 0px;
      margin-right: 0.08rem;
      border: 0.01rem solid rgba(201, 160, 99, 1);
      border-radius: 0.04rem;
      margin-bottom: 0.1rem;
    }
    .li span {
      color: #c9a063;
    }
  }

  .imgselected {
    height: 100%;
    border: 0.02rem solid rgba(201, 160, 99, 1);
    -moz-box-shadow: 0.02rem 0.02rem 0.02rem #999999;
    -webkit-box-shadow: 0.02rem 0.02rem 0.02rem #999999;
    box-shadow: 0.02rem 0.02rem 0.02rem #999999;
  }
  .imgnoselected {
    height: 100%;
    border: 0.02rem solid rgba(235, 235, 235, 1);
    -moz-box-shadow: 0.01rem 0.01rem 0.01rem 0.01rem #eeeeee;
    -webkit-box-shadow: 0.01rem 0.01rem 0.01rem 0.01rem #eeeeee;
    box-shadow: 0.01rem 0.01rem 0.01rem 0.01rem #eeeeee;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ol,
  ul {
    list-style: none;
  }
  #slider {
    text-align: center;
  }
  .window {
    position: relative;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  .container {
    width: 100%;
    display: flex;
    position: absolute;
  }
  .left,
  .right {
    position: absolute;
    top: 5rem;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    cursor: pointer;
  }
  .left {
    left: 3%;
    padding-left: 12px;
    padding-top: 10px;
  }
  .left:hover,
  .right:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .right {
    right: 3%;
    padding-right: 12px;
    padding-top: 10px;
  }
  .icon-left {
    position: absolute;
    top: 23%;
    right: 12%;
  }
  .icon-right {
    position: absolute;
    top: 23%;
    left: 12%;
  }
  img {
    user-select: none;
  }
  .dots {
    position: absolute;
    top: 8.2rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .dots li {
    display: inline-block;
    width: 0.15rem;
    height: 0.15rem;
    margin: 0 0.03rem;
    border: 0.01rem solid white;
    border-radius: 50%;
    background-color: #333;
    cursor: pointer;
  }
  .dots .dotted {
    background-color: orange;
  }

  .ivu-carousel-dots li button {
    width: 0.15rem !important;
    height: 0.15rem !important;
    border: 0.01rem solid white !important;
    border-radius: 50% !important;
    background-color: #333 !important;
  }
  .ivu-carousel-dots-inside {
    bottom: 0.5rem !important;
  }
  .ivu-carousel-dots li.ivu-carousel-active > button {
    background-color: orange !important;
  }

  .tb {
    width: 1rem;
    height: 1rem;
    margin-top: 20px;
    // background:rgba(37,58,83,1);
    // border-radius:50%;
    .tbs {
      width: 0.26rem;
      height: 0.74rem;
      font-size: 0.18rem;
      font-family: \5b8b\4f53, tahoma, arial, sans-serif;
      font-weight: bold;
      line-height: 0.74rem;
      color: #f1eeed;
      padding-top: 0.18rem;
      padding-left: 40.01rem;
    }
  }
  .layout {
    height: 100%;
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
              font-size: 0.16rem;
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
              width: 0.2rem;
              height: 0.24rem;
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
      background: white;
      height: 100%;
    }
    .pageFoot {
      width: 100%;
      text-align: left;
      height: 0.24rem;
      background: rgba(238, 238, 238, 1);
      font-family: \5b8b\4f53, tahoma, arial, sans-serif;
      font-weight: 400;
      .fTop {
        margin-top: 0.16rem;
        .footItem {
          cursor: pointer;
          .code,
          .textcode {
            text-align: center;
          }
          .footTitle {
            margin-bottom: 0.22rem;
            font-size: 0.14rem;
            opacity: 1;
            color: rgba(51, 51, 51, 1);
            font-weight: 900;
          }
          div {
            margin-bottom: 0.05rem;
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
          padding-top: 0.19rem;
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
  .section4 {
    margin: 0.5rem 0;
  }
  .footer-title {
    height: 0.14rem;
    // font-size: 0.14rem;
    font-size: 14px;
    font-family: \5b8b\4f53, tahoma, arial, sans-serif;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    // line-height: 0.18rem;
    line-height: 22px;
    display: block;
    margin-bottom: 15px;
  }
  .section5 {
    margin-top: 2.9rem !important;
    margin-bottom: 0.5rem !important;
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

  #dialog {
    position: fixed;
    border: 1px solid red;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
  }
  .message {
    text-align: center;
    position: absolute;
    top: 50%;
  }
  .closeImg {
    width: 20px;
    height: 20px;
    float: right;
    margin-right: 5px;
    margin-top: 5px;
    cursor: pointer;
    background-image: url(../../static/img/close.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .border {
    text-align: center;
    background-color: white;
    border-radius: 20px;
    width: 400px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>


