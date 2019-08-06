<template>
  <div>
    <div class="information_max">
      <div class="infoContent" v-if="!isDetail" >
        <!-- <div  class="inputsearch"> -->
          <!-- <p  style="margin-top:0.2rem;rgba(201, 160, 99, 1);padding:0"> -->
<!--               
          <el-input placeholder="请输入关键字" suffix-icon="el-icon-search" v-model="input3" clearable @focus="infocus"
          ref="inputfocus" 
         
          /> -->
          <!-- </p> -->

        <!-- </div> -->
        <!-- <div style="margin-bottom:0.2rem" class="inputsearch">
        <div class="search_contain">
          <input placeholder="请输入关键字" class="input"  />
        <img src="../../static/min_img/search.png" class="inputsearch_img">
        </div>
        
        </div>-->

        <div class="pageContent" >
          <el-row class="row_min" style="display:none">
            <el-col
              :xs="12"
              :sm="10"
              :md="8"
              :lg="8"
              v-for="(item,index) in dataList"
              :key="index"
              style="padding:0.1rem;"
            >
              <!-- <el-card :body-style="{ padding: '0px' }" shadow="hover" style="min_card">
                <div @click="checkDetail">
                  <img :src="item.imgUrl" style="width:100%;" />
                  <p class="title">{{item.title}}</p>
                </div>
                <div>
                  <p class="month">{{`${item.month}-${item.day}`}}</p>
                  <p>{{item.year}}</p>
                </div>
              </el-card> -->
              <div class="pageContent_card" > 
            <div class="card_sp" @click="checkDetail"  >
              <!-- <div class="card_img"> -->
                <img :src="item.imgUrl" style="width:100%;border-radius: 4px 4px 0px 0px;" />
              <!-- </div> -->
              <div class="card_contain" style="background: rgba(250, 250, 250, 1);">
                  <div class="card_detail" >
                  <div class="card_title" >{{item.title}}</div>
                </div>
                <div class="card_time">
                  <p class="card_month">{{`${item.month}-${item.day}`}}</p>
                  <p class="card_year">{{item.year}}</p>
                </div>
              </div>
              
            </div>
            </div>
            </el-col>
          </el-row>
          <div class="pageContent_card">
            <div v-for="(item,index) in dataList" :key="index" class="card_sp" @click="checkDetail">
             
                <img :src="item.imgUrl" style="width:100%;border-radius: 4px 4px 0px 0px;display:block;z-index:100;" />
            <div class="card_contain" >
                 <div class="card_detail">
                <div class="card_title">{{item.title}}</div>
              </div>
              <div class="card_time">
                <p class="card_month">{{`${item.month}-${item.day}`}}</p>
                <p class="card_year">{{item.year}}</p>
              </div>
            </div>
             
            </div>
          </div>
          <!-- <Row>
          <Col
            :lg="{span:8}"
            :md="{span:24}"
            v-for="(item,index) in dataList"
            :key="index"
            style="padding:0 0.15rem;margin-bottom:0.3rem"
          >
            <div @click="checkDetail" class="detailItem">
              <Card style="width:100%;cursor:pointer;">
                <div slot="title" style="text-align:left">
                  <div class="date" style="margin-bottom:0.17rem;">
                    <span class="month">{{item.month}}</span>/
                    <span class="day">{{item.day}}</span>
                  </div>
                  <div class="title">{{item.title}}</div>
                </div>
                <span href="#" slot="extra" class="year">{{item.year}}</span>
                <div>
                  <img :src="item.imgUrl" style="height:100%;width:100%;" />
                </div>
              </Card>
            </div>
          </Col>
          </Row>-->
          <div class="page_nation">
            <!-- <Page
            :total="total"
            :page-size="query.size"
            :current="query.page"
            @on-change="changePage"
            show-total
            show-elevator
            style="font-size:0.14rem"
            />-->
            <el-pagination background layout="prev, pager, next" :total="total"></el-pagination>
            <!-- <el-pagination
          
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[9, 18, 27, 49]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
            </el-pagination>-->
          </div>
        </div>
      </div>
      <div v-if="isDetail" class="detail">
        <div class="title">
          <span>山茶油——冰火淬炼出生命之歌冰火淬炼出生命之歌冰火淬炼出生命之歌</span>
        </div>
        <div class="tips">
          <span class="pushTime">发布于 {{pushTime}}</span>
          <span class="readCount">阅读量 {{readCount}}</span>
        </div>
        <div class="remark">{{remark}}</div>
        <div class="bannerContent">
          <img :src="detailBannerUrl" />
        </div>
        <div class="content">{{content}}</div>
        <a @click="rturnback" style="font-size:0.12rem;text-align :center" type="text" class="returnnext">返回上一级</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "information",
  data() {
    return {
      a:1,
      input3: "",
      dataList: [],
      currentPage: 1,
      pagesize: 10,
      total: 0,
      query: {
        page: 1,
        size: 10
      }, //分页数据，可根据接口加查询条件
      isDetail: false,
      pushTime: "2019-05-10",
      readCount: "28k+",
      remark:
        "摘要：善之道茶油，源自中国茶油黄金产区—湘西武陵山区，这里的山茶树隐世而居，千百年来在苍山云雾的滋养下生生不息，繁茂至今，这里被誉为“迄今为止原生态系统保存非常完好的山茶林”。",
      detailBannerUrl: "../../static/img/tu.png",
      content:
        "善之道的选籽是一个充满了希望的罗曼史，我们用选美的眼光甄选山茶籽，脱颖而出后才能成为最终的佼佼者，我们坚持“百年老树，万粒挑一”的标准，精选百年老树 15%的原料，历经一次人工精选三层机选，100 粒中选取 35 粒，只为选出一颗饱满、亮黑、成熟率最好的籽粒，保证每一颗都是“粒”水伊人,保证每一颗都是山茶籽中的皇者。善之道采用国际先进的物理低温活性工艺，坚持低温压榨专利技术，坚持12 道品质管控流程，只萃取第一道珍稀活性山茶油，最大限度保留茶油中的活性物质，保持原始茶油的古朴醇香，全程不添加化学添加物，拒绝调和，100%纯正原生态。在善之道的世界里，茶油是一种轻心、轻居、轻食的轻生活，我们顺应自然，用心营造美好，将生活中最简单的食材，赋予不一样的魅力。我们深信，终有一天，梦想的生活会在每个人的身边绽放。"
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    infocus(){
       this.$refs.btnClick.$el.style.cssText =
                'box-shadow: 0px 1px 9px 1px rgba(172, 126, 57, 0.5);'

      console.log(111)
    },
    rturnback() {
      this.isDetail = false;
    },
    handleCurrentChange() {},
    handleSizeChange(val) {
      this.query.page = page;
      this.getTableData();
    },
    changePage(page) {
      this.query.page = page;
      this.getTableData();
    },
    getTableData() {
      this.service().then(res => {
        this.dataList = res.data;
        this.total = res.total;
      });
    },
    checkDetail() {
      console.log(0);
      this.isDetail = true;
      this.$nextTick(function() {
        window.scrollTo(0, 0);
      });
    },
    service() {
      return new Promise(function(resolve, reject) {
        let res = {};
        res.total = 6; // 100;
        res.data = [
          {
            title: "山茶油——冰火淬炼出生命之歌",
            month: "05",
            day: Math.floor(Math.random() * 30 + 1),
            year: "2019",
            imgUrl: "../../static/img/information1.png"
          },
          {
            title: "发生了什么？？？如今在星巴克买咖啡还需要对暗号？",
            month: "05",
            day: Math.floor(Math.random() * 30 + 1),
            year: "2019",
            imgUrl: "../../static/img/information2.png"
          },
          {
            title: "面对面的沟通场景，该如何设计翻译工具 ",
            month: "05",
            day: Math.floor(Math.random() * 30 + 1),
            year: "2019",
            imgUrl: "../../static/img/information4.png"
          },
          {
            title: "发生了什么？？？如今在星巴克买咖啡还需要对暗号？",
            month: "05",
            day: Math.floor(Math.random() * 30 + 1),
            year: "2019",
            imgUrl: "../../static/img/information3.png"
          },
          {
            title: "面对面的沟通场景，该如何设计翻译工具",
            month: "05",
            day: Math.floor(Math.random() * 30 + 1),
            year: "2019",
            imgUrl: "../../static/img/information2.png"
          },
          {
            title:
              "山茶油——冰火淬炼出的生命之歌山茶油——冰火淬炼出的生命之歌山茶油——冰火淬炼出的生命之歌",
            month: "05",
            day: Math.floor(Math.random() * 30 + 1),
            year: "2019",
            imgUrl: "../../static/img/information4.png"
          }
        ];
        resolve(res);
      });
    }
  }
};
</script>


<style lang="less" >
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background: rgba(201, 160, 99, 1) !important;
  border-radius: 4px !important;
}
@media only screen and (max-width: 750px) {
  .page_nation {
    margin: 0.8rem 0 1rem;
  }
  .information_max {
    margin-top: 1.31rem;
    width: 100%;
   
  }
  .inputsearch {
    width: 100%;
    height: 2.6rem;
    background: rgba(201, 160, 99, 1);
    
  }
  .inputsearch .el-input {
    // margin-top: 0.72rem;
    width: 6.02rem;
    height: 0.58rem !important;
  }
  .banner {
    img {
      width: 100%;
    }
  }
  .infoContent {
    width: 100%;
    margin-top:0.6rem;
   
    // }
    .pageContent {
      width: 100%;
      margin-top:1rem;
      // border:1px solid red;
      .pageContent_card {
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
        flex-wrap: wrap;
        
        .card_sp {
         
          width: 3.41rem;
          height: 4.1rem;
          
          margin: 0.27rem 0.05rem;
          border-radius: 4px 4px 4px 4px;
          // .card_img {
          //   margin: 0;
          //   padding: 0;
          // }
          .card_contain{
            background: #eeeeee;
            height:2.13rem;
           border-radius: 0px 0px 4px 4px;
          //  border:1px solid rgba(238,238,238,1);
          
           padding-top:0.3rem;
          }
          .card_detail {
            font-size: 0.14rem;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 0.21rem;
            padding: 0 0.1rem;
            
          }
        }
      }
      .card_month {
        font-size: 0.36rem;
        font-weight: 400;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        margin-left:0.1rem
      }
      .card_time {
        display: flex;
        justify-content: space-between;
        padding: 0 0.1rem;
        height: 0.3rem;
        line-height: 0.3rem;
        margin-bottom: 0.3rem;
        margin-right:0.1rem
      }

      .card_year {
        font-size: 0.26rem;

        font-weight: 400;
        color: rgba(102, 102, 102, 1);
      }
      .card_title {
        display: -webkit-box; /** 将对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 2; /** 显示的行数 **/
        overflow: hidden; /** 隐藏超出的内容 **/
        text-overflow: ellipsis;
        font-size: 0.26rem;
        font-family: \5b8b\4f53, tahoma, arial, sans-serif;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 0.39rem;
        width: 3.01rem;
        margin: 0 auto 0.4rem;
        max-height: 0.75rem;

        text-align: left;
        // white-space: nowrap
      }
      .month {
        height: 8px;
        font-size: 12px;
        font-family: \5b8b\4f53, tahoma, arial, sans-serif;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 30px;
        text-align: left;
      }
      .day {
        font-size: 0.16rem;
        // font-family:SourceHanSansCN-Medium;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }
      .year {
        font-size: 0.16rem;
        // font-family:SourceHanSansCN-Medium;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }
    }
  }
  .detail {
    
    text-align: left;
    margin-top: 1rem;
    .title {
      font-size: 0.36rem;
      font-family: \5b8b\4f53, tahoma, arial, sans-serif;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      overflow: hidden;
      // white-space: nowrap;
      text-overflow: ellipsis;
      height:1rem;
      width:6.93rem;
      margin:0.7rem auto 0.41rem;
    }
    .tips {
       width:6.93rem;
      margin: 0.31rem auto;
      font-size: 0.24rem;
      // font-family:SourceHanSansCN-Medium;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      .readCount {
        margin-left: 0.4rem;
      }
    }
    .returnnext{
      margin-left:0.4rem;
      font-size:0.26rem !important;
    }
    .remark {
      margin-bottom: 0.2rem;
      border-left: 0.06rem solid #c5d4e3;
      width: 100%;
      min-height: 1rem;
      padding: 0.3rem 0.4rem;
      background: rgba(239, 244, 249, 1);
      font-size: 0.26rem;
      font-family:\5b8b\4f53,tahoma,arial,sans-serif;
      font-weight: 400;
     color:rgba(153,153,153,1);
      line-height: 0.39rem;
    }
    .bannerContent {
      width:7.02rem;
      margin: 0.2rem auto;
      img {
        width: 100%;
      }
    }
    .content {
      font-size: 0.26rem;
       width:7.02rem;
      font-family:\5b8b\4f53,tahoma,arial,sans-serif;
      font-weight: 400;
      text-indent: 2em;
      color: rgba(51, 51, 51, 1);
      line-height: 0.39rem;
      margin: 0.31rem auto;
      text-align: justify;
    }
  }
}
@media only screen and (min-width: 751px) {
  .information_max {
  
    width: 100%;
    margin-top:1rem;
  }
  .page_nation {
    margin: 0.4rem 0 0.57rem;
  }
  .card_month {
    font-size: 0.36rem;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);

    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }
  .card_time {
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    height: 0.3rem;
    line-height: 0.3rem;
  }

  .card_year {
    font-size: 0.14rem;

    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
  .el-input--suffix .el-input__inner .focus{
    // border-color: rgb(201, 160, 99);
    // border-style: solid;
    // border-radius: 4px;
    // background-color: rgb(255, 255, 255);
    box-shadow: 0px 1px 9px 1px rgba(172, 126, 57, 0.5) !important;
   
   
  }
  .inputsearch {
    width: 100%;
    height: 2.6rem;
    background: rgba(201, 160, 99, 1);
    z-index: 1000;
    position: relative;
    .search_contain {
      margin: 0 auto;
     
      // position: relative;
      height: 0.4rem;
      width: 5.9rem;

      .input {
        width: 5.9rem;
        height: 0.4rem;
        font-size: 0.14rem;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
      }
      .inputsearch_img {
        position: absolute;
        background: white;
        top: 0.1rem;
        left: 2.3rem;
        color: white;
      }
    }
  }
  .inputsearch .el-input {
    margin: 0 !important;;
    width: 5.9rem;
    height: 0.4rem !important;
  }
  .el-input__icon {
    margin-right: 60% !important;
  }
  .banner {
    img {
      width: 100%;
    }
  }
  .infoContent {
    margin: 0 auto;
    // .search{
    //     margin:79px 0px 39px 0px;
    // }
    .card_month {
      font-size: 0.24rem;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }

    .pageContent {
      margin: 0 auto;
      width: 62.5%;
      .pageContent_card {
        display: flex;
        justify-content: flex-start;
        box-sizing: border-box;
        flex-wrap: wrap;
        
        .card_sp {
          
          font-family: \5b8b\4f53, tahoma, arial, sans-serif;
          width: 22%;
          height: 2.94rem;
         
          // border:1px solid rgba(238,238,238,1);
          margin: 0.15rem 0.17rem;
          border-radius: 4px 4px 4px 4px;
          .card_img {
            margin: 0;
            padding: 0;
          }
          .card_contain{
            background: rgba(250, 250, 250, 1);
            height:1.33rem;
            padding-top:0.2rem;
            border:1px solid rgba(238,238,238,1);
            }
          .card_detail {
            font-size: 0.14rem;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 0.21rem;
            padding: 0 0.1rem;
            height: 0.6rem;
            
          }
        }
      }
      .card_sp:hover {
        background: rgba(201, 160, 99, 1);
        .card_contain{
           background: rgba(201, 160, 99, 1);
           border:1px solid rgba(201, 160, 99, 1);
        }
        .card_title {
          color: rgba(255, 255, 255, 1) !important;
        }
        .card_month {
          color: rgba(255, 255, 255, 1) !important;
        }
        .card_year {
          color: rgba(255, 255, 255, 1) !important;
        }
      }
      .card_title {
        display: -webkit-box; /** 将对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 2; /** 显示的行数 **/
        overflow: hidden; /** 隐藏超出的内容 **/
        text-overflow: ellipsis;
        text-align: left;
      }
      .month {
        height: 8px;
        font-size: 12px;
        font-family: \5b8b\4f53, tahoma, arial, sans-serif;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 30px;
        text-align: left;
      }
      .day {
        font-size: 0.16rem;
        // font-family:SourceHanSansCN-Medium;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }
      .year {
        font-size: 0.16rem;
        // font-family:SourceHanSansCN-Medium;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }
      .ivu-card:hover {
        border-width: 0.01rem;
        border-color: rgb(220, 220, 220);
        border-style: solid;
        border-radius: 0.02rem;
        background-color: rgb(255, 255, 255);
        box-shadow: 0rem 0.01rem 0.09rem 0.01rem rgba(153, 153, 153, 0.3);
      }
    }
  }
  .detail {
    padding: 0 20%;
    text-align: left;
    margin-top: 1rem;
    .title {
      font-size: 0.36rem;
      font-family: \5b8b\4f53, tahoma, arial, sans-serif;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 0.48rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .title:hover{
        text-overflow:inherit;
        overflow:visible;
        }
    
    .tips {
     
      font-size:0.24rem;
      display: flex;
      font-weight:400;
      color:rgba(153,153,153,1);
      line-height:54px;
     
      .readCount {
        margin-left: 0.4rem;
      }
    }
    .remark {
      margin-bottom: 0.2rem;
      border-left: 0.06rem solid #c5d4e3;
      width: 100%;
      min-height: 1rem;
      padding: 0.3rem 0.4rem;
      background: rgba(254,250,244,1);
      font-size: 0.16rem;
      // font-family:\5b8b\4f53,tahoma,arial,sans-serif;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 0.39rem;
    }
    .bannerContent {
      margin-bottom: 0.2rem;
      width:7.02rem;
      img {
        width: 100%;
      }
    }
    .content {
      font-size: 0.16rem;
      // font-family:\5b8b\4f53,tahoma,arial,sans-serif;
      font-weight: 400;
      text-indent: 2em;
      color: rgba(51, 51, 51, 1);
      line-height: 0.39rem;
      margin-bottom: 1rem;
    }
  }
}
</style>


