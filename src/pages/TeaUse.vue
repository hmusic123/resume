<template>
  <div style="width:100%;">
    <div class="max_use_part1 min_use_part1">
      <!-- <img src="../../static/my_img/bg.png" /> -->
      <div
        class="max_use_btn min_use_btn"
        :class="active==0?'max_active_btn':null"
        @click="clickto(0)"
      >食用功效</div>
      <div
        class="max_use_btn min_use_btn"
        :class="active==1?'max_active_btn':null"
        @click="clickto(1)"
      >其他用途</div>
    </div>
    <div class="max_use_part2 min_use_part2" v-if="active==0">
      <div class="max_use_part2_title min_use_part2_title">《中国药典》</div>
      <div class="max_use_part2_nian min_use_part2_nian">（1995年版）</div>
      <div class="max_use_part2_title1 min_use_part2_title1">将茶油作为药用油收载，茶油因其富含多种营养成分，内服、外用都有很好的效用。</div>
      <div>
        <img
          src="../../static/my_img/xianduan.png"
          alt
          style="width:1.67rem;margin:0.53rem auto 0.57rem"
        />
      </div>
      <div class="max_use_part2_my_contain min_use_part2_my_contain">
        <div class="max_use_part2_my_1 min_use_part2_my_1">
          <p class="max_use_part2_my_1_src min_use_part2_my_1_src">清热化湿</p>
          <p class="max_use_part2_my_1_src min_use_part2_my_1_src">杀虫解毒</p>
        </div>

        <div class="max_use_part2_my_2 min_use_part2_my_2">
          <p class="max_use_part2_my_1_src min_use_part2_my_1_src">延缓衰老</p>
          <p class="max_use_part2_my_1_src min_use_part2_my_1_src">预防高血压</p>
        </div>

        <div class="max_use_part2_my_3 min_use_part2_my_3">
          <p class="max_use_part2_my_1_src min_use_part2_my_1_src">可治愈习惯性便秘</p>
          <p class="max_use_part2_my_1_src min_use_part2_my_1_src">治疗急性蛔虫阴塞性肠梗阻</p>
        </div>
        <div class="max_use_part2_my_4 min_use_part2_my_4">
          <p class="max_use_part2_my_1_src min_use_part2_my_1_src">清胃润肠</p>
          <p class="max_use_part2_my_1_src min_use_part2_my_1_src">治痧气腹痛</p>
        </div>
        <div class="max_use_part2_my_5 min_use_part2_my_5">
          <p class="max_use_part2_my_1_src min_use_part2_my_1_src">预防动脉硬化</p>
          <p class="max_use_part2_my_1_src min_use_part2_my_1_src">预防心血管系统疾病</p>
        </div>
        <!-- <img src="../../static/my_img/1.png" alt />
        <img src="../../static/my_img/2.png" alt />
        <img src="../../static/my_img/3.png" alt />
        <img src="../../static/my_img/4.png" alt />
        <img src="../../static/my_img/5.png" alt />-->
      </div>
      <div class="max_use_part3 min_use_part3" v-if="active==0">
        <div class="max_use_part3_1 min_use_part3_1">
          <div class="max_use_part3_heng min_use_part3_heng">
            <div class="max_use_part3_waiyuan min_use_part3_waiyuan">
              <div class="max_use_part3_neiyuan min_use_part3_neiyuan">童</div>
            </div>
            <div class="max_use_part3_src min_use_part3_src">
              <p>
                可
                <br />促
                <br />进
                <br />骨
                <br />骼
                <br />等
                <br />身
                <br />体
                <br />发
                <br />育
                <br />；
              </p>
              <p>
                可
                <br />利
                <br />气
                <br />通
                <br />便
                <br />、
                <br />消
                <br />火
                <br />助
                <br />消
                <br />化
                <br />，
              </p>
              <p>
                对
                <br />婴
                <br />幼
                <br />儿
                <br />：
              </p>
            </div>
            <div class="max_use_part3_last min_use_part3_last">
              <img src="../../static/my_img/ertong.png" alt style="width:100%" />
            </div>
          </div>
        </div>

        <div class="max_use_part3_1 min_use_part3_1">
          <div class="max_use_part3_heng min_use_part3_heng">
            <div class="max_use_part3_waiyuan min_use_part3_waiyuan">
              <div class="max_use_part3_neiyuan min_use_part3_neiyuan">壮</div>
            </div>
            <div class="max_use_part3_src min_use_part3_src">
              <p>
                调
                <br />节
                <br />作
                <br />用
                <br />，
                <br />保
                <br />持
                <br />充
                <br />沛
                <br />精
                <br />力
                <br />；
              </p>
              <p>
                可
                <br />通
                <br />肠
                <br />便
                <br />去
                <br />肠
                <br />毒
                <br />，
                <br />加
                <br />强
                <br />双
                <br />向
              </p>
              <p>
                对
                <br />青
                <br />壮
                <br />年
                <br />：
              </p>
            </div>
            <div class="max_use_part3_last min_use_part3_last">
              <img src="../../static/my_img/zhuangnian.png" alt style="width:100%" />
            </div>
          </div>
        </div>
        <div class="min_chacha">
          <i class="el-icon-close" style="font-size:0.88rem;color:rgba(204,204,204,1);"></i>
        </div>
        <div class="max_use_part3_1 min_use_part3_1">
          <div class="max_use_part3_heng min_use_part3_heng">
            <div class="max_use_part3_waiyuan min_use_part3_waiyuan">
              <div class="max_use_part3_neiyuan min_use_part3_neiyuan">孕</div>
            </div>
            <div class="max_use_part3_src min_use_part3_src">
              <p>
                对
                <br />胎
                <br />儿
                <br />的
                <br />正
                <br />常
                <br />发
                <br />育
                <br />十
                <br />分
                <br />有
                <br />益
              </p>
              <p>
                孕
                <br />期
                <br />食
                <br />用
                <br />可
                <br />增
                <br />加
                <br />母
                <br />乳
                <br />，
              </p>
              <p>
                对
                <br />孕
                <br />妇
                <br />：
              </p>
            </div>
            <div class="max_use_part3_last min_use_part3_last">
              <img src="../../static/my_img/yunfu.png" alt style="width:100%" />
            </div>
          </div>
        </div>

        <div class="max_use_part3_1 min_use_part3_1">
          <div class="max_use_part3_heng min_use_part3_heng">
            <div class="max_use_part3_waiyuan min_use_part3_waiyuan">
              <div class="max_use_part3_neiyuan min_use_part3_neiyuan">老</div>
            </div>
            <div class="max_use_part3_src min_use_part3_src">
              <p>
                延
                <br />缓
                <br />动
                <br />脉
                <br />粥
                <br />样
                <br />硬
                <br />化
                <br />；
              </p>
              <p>
                预
                <br />防
                <br />高
                <br />血
                <br />压
                <br />、
                <br />心
                <br />脑
                <br />血
                <br />管
                <br />病
                <br />，
              </p>
              <p>
                对
                <br />对
                <br />中
                <br />老
                <br />年
                <br />：
              </p>
            </div>

            <div class="max_use_part3_last min_use_part3_last">
              <img src="../../static/my_img/laonian.png" alt style="width:100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max_use_part4" v-if="active==0">
      <div class="max_use_part4_title">茶油特色食谱</div>
      <div class="max_use_patr4_caipu">
        <img src="../../static/my_img/liangbanmian.png" alt style="width:7.68rem;" />
        <!-- <div class="max_use_patr4_img" >
          <img src="../../static/my_img/liangbanmian.png" alt style="width:7.68rem"/>
        </div>-->
        <div class="max_use_patr4_src">
          <div class="max_use_patr4_title">茶油凉拌面</div>
          <div class="max_use_patr4_line"></div>
          <div class="max_use_patr4_title1">食材</div>
          <div class="max_use_patr4_srcript">面条（1把）、葱花（适量）、蒜末（适量）、红葱酥（适量）、 茶油（1匙）、酱油（1匙）、乌醋（半匙）</div>
          <div class="max_use_patr4_title1">做法</div>
          <div class="max_use_patr4_srcript">
            1.准备食材（如有个人喜好，也可将拌料混合煎炸一下）
            <br />2.将面条烫熟;
            <br />3.所有材料混合，并加入调味料，用筷子拌匀！
            <br />4.完成上桌!
            <br />
          </div>
        </div>
      </div>

      <div class="max_use_patr4_caipu">
        <div class="max_use_patr4_src" style="width:8rem;">
          <div class="max_use_patr4_title">茶油红参鸡汤</div>
          <div class="max_use_patr4_line"></div>
          <div class="max_use_patr4_title1">食材</div>
          <div class="max_use_patr4_srcript">母鸡（半只）、红参（一小根）、茶油（适量）、盐（适量）、生姜（适量）、大葱（适量）、白酒（适量）</div>
          <div class="max_use_patr4_title1">做法</div>
          <div class="max_use_patr4_srcript">
            1.准备母鸡半只并切块
            <br />2.锅中放入生姜和大葱段，添加适量清水烧开，水开后放入鸡块焯水。
            <br />3.锅中放入少许茶油，将鸡油切成块，放入锅中煸出油来。
            <br />4.放入焯好水的鸡块，中火翻炒。
            <br />5.炒干水分后放入生姜和大葱段
            <br />6.沿着锅边淋入一勺料酒，大火翻炒
            <br />7.一次性添加足量的清水，大火烧开。
            <br />8.水开后转入汤煲中，放入红参。大火烧开后转小火煲2个小时左右。
            <br />出锅前半小时放盐，出锅前10分钟放枸杞。关火后可放少许香菜或香葱。
            <br />
          </div>
        </div>
        <img src="../../static/my_img/hongshenji.png" alt style="width:7.68rem;" />
        <!-- <div class="max_use_patr4_img" style="width:7.68rem;" >
            <img src="../../static/my_img/hongshenji.png" alt style="width:100%;"/>
        </div>-->
      </div>

      <div class="max_use_patr4_caipu">
        <img src="../../static/my_img/chayouji.png" style="width:7.68rem;" />

        <div class="max_use_patr4_src" style="height:5.72rem;">
          <div class="max_use_patr4_title">辣味茶油鸡</div>
          <div class="max_use_patr4_line"></div>
          <div class="max_use_patr4_title1">食材</div>
          <div
            class="max_use_patr4_srcript"
            style="margin-left:0.3rem"
          >去骨鸡腿、茶油（一大匙）、姜片、盐、米酒（2/10杯）、辣椒粉（适量）</div>
          <div class="max_use_patr4_title1">做法</div>
          <div class="max_use_patr4_srcript" style="margin-left:0.3rem">
            1.去骨鸡腿肉切块备用
            <br />2.取锅爆香竹姜片，放入鸡肉翻炒
            <br />3.同锅加入米酒、适量水，盖上锅盖将鸡肉闷煮至熟成，斟酌以盐、辣椒粉调味即可
            <br />4.摆盘上桌
            <br />
          </div>
        </div>
      </div>

      <div class="max_use_patr4_caipu">
        <div class="max_use_patr4_src" style="height:7.49rem;">
          <div class="max_use_patr4_title">鲫鱼豆腐菌菇汤</div>
          <div class="max_use_patr4_line"></div>
          <div class="max_use_patr4_title1">食材</div>
          <div class="max_use_patr4_srcript">鲫鱼（一条）、嫩豆腐（2块）、鹿茸菇（适量）、姜丝（适量）、茶油（适量）、香菜（适量）、盐（适量）</div>
          <div class="max_use_patr4_title1">做法</div>
          <div class="max_use_patr4_srcript">
            1.鲫鱼清洗干净，要把鱼肚内壁粘附着的黑色薄膜清理干净，否则鱼汤会很腥，黑色薄膜用小刀轻轻刮掉即可；其他配料备好。
            <br />2.不粘锅加热，倒两茶匙茶油，加少许姜片，然后把鲫鱼放入锅内小火把两面煎至微黄。
            <br />3.煮锅内加入适量热水，煮开后把煎好的鲫鱼放入锅内。盖上盖子，中小火煮15分钟。
            <br />4.5分钟后，打开盖子看到鱼汤变淡白色，加入豆腐块儿和鹿茸菇，再煮10分钟，最后根据个人口味加少许盐，调味即可。
            <br />5.摆盘出锅
          </div>
          <!-- <div class="max_use_patr4_img">
            <img src="../../static/my_img/juntangji.png" style="width:100%"/>
          </div>-->
        </div>
        <img src="../../static/my_img/juntangji.png" style="width:7.68rem;" />
      </div>
    </div>

    <div class="max_other" v-if="active==1">
      <div style="width:3rem;height:3rem;margin:0.7rem auto 0;">
        <img src="../../static/my_img/shiliang.png" style="width:100%;margin-left:0.2rem" />
      </div>

      <!-- <div style="border:1px solid red;width:1.6rem">
        <p class="max_other_1" style="margin:0.82rem auto 0.29rem;width:3rem;">[ 驱蚊止痒 ]</p>
        <p class="max_other_2" style="width:3rem;margin:0 auto">
          可抗紫外线，防止晒斑
          <br />去皱、防止头癣、体癣、头屑、脱发
        </p>
      </div>
      <div style="border:1px solid red">
        <p class="max_other_1" style="margin:1.01rem auto 0.29rem">[ 作为药膏 ]</p>
        <p class="max_other_2">
          可调制各种药膏、药丸
          <br />也可浸泡蜈蚣、螃蟹涂治疮伤
        </p>
      </div>
      <div style="border:1px solid red"></div>
      <p class="max_other_1" style="margin:1.01rem auto 0.29rem">[ 作为洗护品的配剂 ]</p>
      <p class="max_other_2" style="margin-bottom:1.71rem">
        可做洗发剂和护法素中的配剂使用
        <br />能防止皮肤瘙痒、慢性湿疹
      </p>-->
      <div class="max_other_contain" v-if="active==1">
        <div class="max_other_contain1" v-for="(item,index) in array" :key="index">
          <p class="max_other_1">{{ item.title }}</p>
          <p class="max_other_2">
           {{item.src}}
          </p>
        </div>
      </div>
    </div>

    <!-- 小屏幕 -->
    <div class="min_use_part4" v-if="active==0">
      <div class="min_use_part4_title">茶油特色食谱</div>
      <div class="min_use_patr4_caipu">
        <img src="../../static/my_img/liangbanmian.png" alt style="width:100%" />
        <!-- <div class="max_use_patr4_img" >
          <img src="../../static/my_img/liangbanmian.png" alt style="width:7.68rem"/>
        </div>-->
        <div class="min_use_patr4_src" style="height:7.69rem">
          <div class="min_use_patr4_title">茶油凉拌面</div>
          <div class="min_use_patr4_line"></div>
          <div class="min_use_patr4_title1">食材</div>
          <div class="min_use_patr4_srcript">面条（1把）、葱花（适量）、蒜末（适量）、红葱酥（适量）、 茶油（1匙）、酱油（1匙）、乌醋（半匙）</div>
          <div class="min_use_patr4_title1" style="margin:0.79rem 0 0.49rem 0.44rem">做法</div>
          <div class="min_use_patr4_srcript" style="margin-bottom:0.5rem">
            1.准备食材（如有个人喜好，也可将拌料混合煎炸一下）
            <br />2.将面条烫熟;
            <br />3.所有材料混合，并加入调味料，用筷子拌匀！
            <br />4.完成上桌!
          </div>
        </div>
      </div>

      <div class="min_use_patr4_caipu">
        <img src="../../static/my_img/hongshenji.png" alt style="width:100%" />
        <div class="min_use_patr4_src" style="height:10.89rem">
          <div class="min_use_patr4_title">茶油红参鸡汤</div>
          <div class="min_use_patr4_line"></div>
          <div class="min_use_patr4_title1">食材</div>
          <div class="min_use_patr4_srcript">母鸡（半只）、红参（一小根）、茶油（适量）、盐（适量）、生姜（适量）、大葱（适量）、白酒（适量）</div>
          <div class="min_use_patr4_title1" style="margin:0.79rem 0 0.49rem 0.44rem">做法</div>
          <div class="min_use_patr4_srcript">
            <p>1.准备母鸡半只并切块</p>2.锅中放入生姜和大葱段，添加适量清水烧开，水开后放入鸡块焯水。
            <br />3.锅中放入少许茶油，将鸡油切成块，放入锅中煸出油来。
            <br />4.放入焯好水的鸡块，中火翻炒。
            <br />5.炒干水分后放入生姜和大葱段
            <br />6.沿着锅边淋入一勺料酒，大火翻炒
            <br />7.一次性添加足量的清水，大火烧开。
            <br />8.水开后转入汤煲中，放入红参。大火烧开后转小火煲2个小时左右。
            <br />出锅前半小时放盐，出锅前10分钟放枸杞。关火后可放少许香菜或香葱。
          </div>
        </div>

        <!-- <div class="max_use_patr4_img" style="width:7.68rem;" >
            <img src="../../static/my_img/hongshenji.png" alt style="width:100%;"/>
        </div>-->
      </div>

      <div class="min_use_patr4_caipu">
        <img src="../../static/my_img/chayouji.png" style="width:100%" />

        <div class="min_use_patr4_src" style="height:7.5rem;">
          <div class="min_use_patr4_title">辣味茶油鸡</div>
          <div class="min_use_patr4_line"></div>
          <div class="min_use_patr4_title1">食材</div>
          <div class="min_use_patr4_srcript">去骨鸡腿、茶油（一大匙）、姜片、盐、米酒（2/10杯）、辣椒粉（适量）</div>
          <div class="min_use_patr4_title1" style="margin:0.79rem 0 0.49rem 0.44rem">做法</div>
          <div class="min_use_patr4_srcript">
            1.去骨鸡腿肉切块备用
            <br />2.取锅爆香竹姜片，放入鸡肉翻炒
            <br />3.同锅加入米酒、适量水，盖上锅盖将鸡肉闷煮至熟成，斟酌以盐、辣椒粉调味即可
            <br />4.摆盘上桌
          </div>
        </div>
      </div>

      <div class="min_use_patr4_caipu">
        <img src="../../static/my_img/juntangji.png" style="width:100%" />
        <div class="min_use_patr4_src" style="height:10.12rem;">
          <div class="min_use_patr4_title">鲫鱼豆腐菌菇汤</div>
          <div class="min_use_patr4_line"></div>
          <div class="min_use_patr4_title1">食材</div>
          <div class="min_use_patr4_srcript">鲫鱼（一条）、嫩豆腐（2块）、鹿茸菇（适量）、姜丝（适量）、茶油（适量）、香菜（适量）、盐（适量）</div>
          <div class="min_use_patr4_title1" style="margin:0.79rem 0 0.49rem 0.52rem">做法</div>
          <div class="min_use_patr4_srcript">
            1.鲫鱼清洗干净，要把鱼肚内壁粘附着的黑色薄膜清理干净，否则鱼汤会很腥，黑色薄膜用小刀轻轻刮掉即可；其他配料备好。
            <br />2.不粘锅加热，倒两茶匙茶油，加少许姜片，然后把鲫鱼放入锅内小火把两面煎至微黄。
            <br />3.煮锅内加入适量热水，煮开后把煎好的鲫鱼放入锅内。盖上盖子，中小火煮15分钟。
            <br />4.5分钟后，打开盖子看到鱼汤变淡白色，加入豆腐块儿和鹿茸菇，再煮10分钟，最后根据个人口味加少许盐，调味即可。
            <br />5.摆盘出锅
          </div>
          <!-- <div class="max_use_patr4_img">
            <img src="../../static/my_img/juntangji.png" style="width:100%"/>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      active: 0,
      array: [
        {
          title: "[ 驱蚊止痒 ]",
          src: "可防止蚊虫叮咬，具有很好的止痒止痛消除虫疱效果。"
        },
        {
          title: "[ 活血化淤 ]",
          src: "可活血化瘀、消红褪肿，防止伤口感染，特别适合婴幼儿摔伤、碰伤。"
        },
        {
          title: "[ 治疗轻伤 ]",
          src: "可治疗烧伤、烫伤、破皮、刀伤等，不去皮，不起水泡，不留疤痕。"
        },
        {
          title: "[ 消除胀气 ]",
          src: "轻敷茶油于肝脏部位，可以消除腹部胀气。"
        },
        {
          title: "[ 泡药 ]",
          src: "在我国传统的中药配方中常以茶油来调制各种药膏、药丸"
        },
        {
          title: "[ 消炎止痒 ]",
          src: "可治疗红肿、奶藓、尿疹、湿疹；亦可预防幼儿皮肤病。"
        },
        {
          title: "[ 预防皮肤病 ]",
          src: "可治疗皮肤干燥、皴裂、瘙痒、一些体癣等皮肤病，可预防妊娠纹。"
        },
        {
          title: "[ 祛湿疹 ]",
          src: "可治疗成人湿疹，长期坚持使用，可以帮助逐步消除体内湿疹。"
        },
        {
          title: "[ 排毒养颜 ]",
          src: "与温开水、蜂蜜混合后，每日饮用可减少患妇科病的机率。"
        },
        {
          title: "[ 美容护肤 ]",
          src: "可袪细纹、消黑眼圈、袪痘，亦可替代防晒霜、唇膏和身体乳。"
        }
      ]
    };
  },
  methods: {
    clickto(e) {
      this.active = e;
    }
  }
};
</script>

<style >

@media only screen and (max-width: 750px) {
    
  .max_other {
    margin: 0.77rem auto 0;
  }
  .max_other_contain {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top:1rem
   
  }
  .max_other_contain1 {
     
     width:4.39rem;
      text-align: center;
    margin:0 auto 1rem;
  }
  .max_other_1 {
    width: 100%;

    font-size: 0.36rem;
    text-align: center;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
  .max_other_2 {
    width: 100%;
    text-align: center;
    font-size: 0.26rem;

    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }
  .max_use_part4 {
    display: none;
  }
  .min_use_part1 {
    width: 100%;

    margin-top: 1rem;
    background: url("../../static/my_img/bg.png") no-repeat center;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.64rem;
  }
  .min_use_btn {
    width: 1.6rem;
    height: 0.58rem;
    /* background:rgba(201,160,99,1); */
    border-radius: 0.06rem;
    margin: 0 0.81rem;
    font-size: 0.26rem;
    color: white;
    font-weight: 400;
    text-align: center;
    line-height: 0.58rem;
    border: 2px solid rgba(255, 255, 255, 0.6);
    box-sizing: border-box;
  }
  .min_active_btn {
    background: rgba(201, 160, 99, 1);
    border: 2px solid rgba(201, 160, 99, 1);
  }
  .min_use_part2 {
    margin: 0.69rem auto 0.53rem;
    width: 6.8rem;
  }
  .min_use_part2_title {
    width: 100%;
    font-size: 0.36rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    text-align: center;
  }
  .min_use_part2_nian {
    width: 100%;
    text-align: center;
    font-size: 0.2rem;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    margin: 0.19rem 0 0.4rem;
  }
  .min_use_part2_title1 {
    font-size: 0.26rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    width: 100%;
    text-align: center;
    line-height: 0.39rem;
    margin-bottom: 0.52rem;
  }
  .min_use_part2_my_contain {
    width: 6.8rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .min_use_part2_my_1_src {
    font-size: 0.26rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    width: 100%;
    height: 50%;
    line-height: 100%;
    box-sizing: border-box;
    margin:0;
  }
  .min_use_part2_my_1 {
    width: 2.45rem;
    background: url("../../static/my_img/1.png") no-repeat center;
    background-size: 2.45rem 0.83rem;
    height: 0.83rem;
    margin: 0 auto 0.81rem;
    text-align: center;

    padding-top: 0.1rem;
  }
  .min_use_part2_my_2 {
    width: 2.45rem;
    background: url("../../static/my_img/2.png") no-repeat center;
    height: 0.83rem;

    text-align: center;
    background-size: 2.45rem 0.83rem;
    margin: 0 auto 0.81rem;
    padding-top: 0.1rem;
  }
  .min_use_part2_my_3 {
    width: 4.88rem;
    background: url("../../static/my_img/3.png") no-repeat center;
    height: 0.83rem;
    background-size: 4.88rem 0.83rem;
    text-align: center;
    margin: 0 auto 0.81rem;
    padding-top: 0.1rem;
  }
  .min_use_part2_my_4 {
    width: 2.45rem;
    background: url("../../static/my_img/4.png") no-repeat center;
    height: 0.83rem;
    background-size: 2.45rem 0.83rem;
    text-align: center;
    margin: 0 auto 0.81rem;
    padding-top: 0.1rem;
  }
  .min_use_part2_my_5 {
    width: 3.66rem;
    background: url("../../static/my_img/5.png") no-repeat center;
    height: 0.83rem;
    background-size: 3.66rem 0.83rem;
    text-align: center;
    margin: 0 auto 0.81rem;
    padding-top: 0.1rem;
  }
  .min_use_part3 {
    display: flex;
    width: 6.8rem;
    justify-content: space-around;
    margin: 1rem auto 0;
    flex-wrap: wrap;
  }
  .min_use_part3_1 {
    height: 8.38rem;
    width: 1.2rem;
    position: relative;
  }
  .min_use_part3_waiyuan {
    width: 1.2rem;
    height: 1.2rem;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    border: 3px solid rgba(102, 102, 102, 1);
    position: absolute;
    top: 0;
    left: 0;
  }
  .min_use_part3_neiyuan {
    width: 1rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;

    font-size: 0.48rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    border-radius: 50%;
    border: 1px solid rgba(102, 102, 102, 1);
  }
  .min_use_part3_src {
    display: flex;
    height: 1.91rem;
    font-size: 0.26rem;
    width: 0.62rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    justify-content: space-between;
    margin: 0 auto;
    position: absolute;
    top: 1.68rem;
    left: 0.05rem;
  }
  .min_use_part3_src > p {
    margin-right: 0.13rem;
  }
  .min_use_part3_last {
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    bottom: 0rem;
    left: -0.01rem;
  }
  .min_chacha {
    width: 100%;
    text-align: center;
    margin: 0.5rem 0;
  }
  .min_use_part4 {
    margin-top: 1.6rem;
    width: 6.8rem;
    margin: 1.6rem auto 2.01rem;
    box-sizing: border-box;
  }
  .min_use_part4_title {
    width: 100%;

    height: 0.38rem;
    font-size: 0.4rem;
    font-weight: 900;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin-bottom: 0.71rem;
  }
  .min_use_patr4_caipu {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .min_use_patr4_img {
    width: 7.68rem;
    margin: 0;
    padding: 0;

    /* width:768px; */
  }
  .min_use_patr4_src {
    width: 100%;
    background: rgba(250, 250, 250, 1);
  }
  .min_use_patr4_title {
    width: 100%;
    font-size: 0.36rem;
    font-weight: 900;
    color: rgba(201, 160, 99, 1);
    text-align: center;
    margin-top: 0.49rem;
  }
  .min_use_patr4_line {
    width: 0.36rem;
    height: 0.02rem;
    background: rgba(201, 160, 99, 1);
    border-radius: 0.01rem;
    margin: 0.21rem auto 0.4rem;
  }
  .min_use_patr4_title1 {
    width: 1rem;
    height: 0.5rem;
    background: rgba(201, 160, 99, 1);
    border-radius: 0.04rem;
    text-align: center;
    line-height: 0.5rem;
    color: white;
    font-size: 0.26rem;
    margin: 0.2rem 0.44rem;
  }
  .min_use_patr4_srcript {
    width: 5.99rem;

    font-size: 0.26rem;
    margin: 0 auto;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 0.39rem;
    text-align: left;
  }
  .min_use_patr4_srcript1 {
    width: 5.99rem;

    font-size: 0.26rem;
    margin: 0 auto;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 0.29rem;
    text-align: justify;
  }
}

@media only screen and (min-width: 751px) {
  .max_other {
    margin: 0.39rem auto 0;
  }
  .max_other_contain {
    width: 62.5%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 1.3rem auto 0;
  }
  .max_other_contain1 {
   
    margin-bottom:1rem;
  
  }
  .max_other_contain1:nth-child(even) {
    margin:0 0.6rem 1rem;
  }
  .max_other_contain1:nth-child(6) {
    margin:0 0.6rem 1rem 0.3rem!important;
  }
  .max_other_contain1:nth-child(1) {
    margin:0 0rem 1rem 0.3rem!important;
  }
  .max_other_contain1:nth-child(10) {
    margin:0 0 1rem 0.6rem!important;
  }
  .max_other_1 {
    width: 1.8rem;
    font-size: 0.2rem;
    text-align: center;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
  .max_other_2 {
    width: 1.6rem;
    text-align: justify;
    font-size: 0.14rem;
    font-weight: 400;
    margin: 0.28rem auto 0;
    border: 1px solid white;
    color: rgba(102, 102, 102, 1);
  }
  .min_use_part4 {
    display: none;
  }
  .min_chacha {
    display: none;
  }
  .max_use_part1 {
    width: 100%;
    margin-top: 1rem;

    background: url("../../static/my_img/bg.png") no-repeat center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 100% 100%;
    height: 2.64rem;
  }
  .max_use_btn {
    width: 2.6rem;
    height: 0.79rem;
    /* background:rgba(201,160,99,1); */
    border-radius: 0.06rem;
    margin: 0 0.81rem;
    font-size: 0.36rem;
    color: white;
    font-weight: 400;
    text-align: center;
    line-height: 0.79rem;
    border: 2px solid rgba(255, 255, 255, 0.6);
    box-sizing: border-box;
  }
  .max_use_btn:hover {
    /* border: 2px solid rgba(255, 255, 255,1); */
    background: rgba(201, 160, 99, 0.6);
  }
  .max_use_part2 {
    margin-top: 0.74rem;
    width: 100%;
  }
  .max_use_part2_title {
    width: 100%;
    font-size: 0.2rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    text-align: center;
  }
  .max_use_part2_nian {
    width: 100%;
    text-align: center;
    font-size: 0.14rem;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }
  .max_use_part2_title1 {
    font-size: 0.14rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    width: 100%;
    text-align: center;
    margin-top: 0.15rem;
    margin-bottom: 0.52rem;
  }
  .max_use_part2_my_contain {
    width: 62.5%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .max_use_part2_my_1_src {
    font-size: 0.14rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    width: 100%;
    height: 50%;
    line-height: 100%;
    margin:0;
    
    box-sizing: border-box;
  }
  .max_use_part2_my_1_src:nth-child(1){
      margin:  0.04rem 0 !important;
     
  }
  .max_use_part2_my_1 {
    width: 1.36rem;
    background: url("../../static/my_img/1.png") no-repeat center;
    background-size: 1.36rem 0.47rem;
    height: 0.47rem;

    text-align: center;
  }
  .max_use_part2_my_2 {
    width: 1.37rem;
    background: url("../../static/my_img/2.png") no-repeat center;
    height: 0.47rem;
    text-align: center;
    background-size: 1.37rem 0.47rem;
  }
  .max_use_part2_my_3 {
    width: 2.5rem;
    background: url("../../static/my_img/3.png") no-repeat center;
    height: 0.47rem;
    background-size: 2.5rem 0.47rem;
    text-align: center;
  }
  .max_use_part2_my_4 {
    width: 1.37rem;
    background: url("../../static/my_img/4.png") no-repeat center;
    height: 0.47rem;
    background-size: 1.37rem 0.47rem;
    text-align: center;
  }
  .max_use_part2_my_5 {
    width: 2.04rem;
    background: url("../../static/my_img/5.png") no-repeat center;
    height: 0.47rem;
    background-size: 2.04rem 0.47rem;
    text-align: center;
  }
  .max_use_part3 {
    display: flex;
    width: 62.5%;
    justify-content: space-around;
    margin: 1rem auto 0;
  }
  .max_use_part3_1 {
    height: 5.97rem;

    width: 1rem;
    position: relative;
  }
  .max_use_part3_waiyuan {
    width: 1rem;
    height: 1rem;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    border: 3px solid rgba(102, 102, 102, 1);
    position: absolute;
    top: 0;
    left: 0;
  }
  .max_use_part3_neiyuan {
    width: 0.88rem;
    height: 0.88rem;
    text-align: center;
    line-height: 0.88rem;

    font-size: 0.4rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    border-radius: 50%;
    border: 1px solid rgba(102, 102, 102, 1);
  }
  .max_use_part3_src {
    display: flex;
    height: 1.91rem;
    font-size: 0.14rem;
    width: 0.62rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    justify-content: space-between;
    margin: 0 auto;
    position: absolute;
    top: 1.5rem;
    left: 0.15rem;
  }
  .max_use_part3_last {
    width: 1rem;
    height: 1rem;
    position: absolute;
    bottom: 0rem;
    left: 0rem;
  }
  .max_use_part4 {
    margin-top: 1.6rem;
    width: 62.5%;
    margin: 1.6rem auto 2.01rem;
  }
  .max_use_part4_title {
    width: 100%;

    height: 0.38rem;
    font-size: 0.4rem;
    font-weight: 900;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin-bottom: 0.71rem;
  }
  .max_use_patr4_caipu {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    /* border:1px solid blue; */
    background: rgba(250, 250, 250, 1);
  }
  .max_use_patr4_img {
    width: 7.68rem;
    margin: 0;
    padding: 0;

    /* width:768px; */
  }
  .max_use_patr4_src {
    width: 4.32rem;
    height: 100% !important;
    background: rgba(250, 250, 250, 1);
  }
  .max_use_patr4_title {
    width: 100%;
    font-size: 0.3rem;
    font-weight: 900;
    color: rgba(201, 160, 99, 1);
    text-align: center;
    margin-top: 0.38rem;
  }
  .max_use_patr4_line {
    width: 0.3rem;
    height: 0.02rem;
    background: rgba(201, 160, 99, 1);
    border-radius: 0.01rem;
    margin: 0.21rem auto;
  }
  .max_use_patr4_title1 {
    width: 0.6rem;
    height: 0.3rem;
    background: rgba(201, 160, 99, 1);
    border-radius: 0.04rem;
    text-align: center;
    line-height: 0.3rem;
    color: white;
    font-size: 0.14rem;
    margin: 0.2rem 0.3rem;
  }
  .max_use_patr4_srcript {
    width: 3.72rem;

    font-size: 0.14rem;
    margin: 0 0.3rem;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 0.29rem;
    text-align: left;
  }
  .max_use_patr4_srcript1 {
    width: 3.72rem;
    height: 0.73rem;
    font-size: 0.14rem;
    margin: 0 auto;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 0.29rem;
    text-align: justify;
  }
}
.max_active_btn {
  background: rgba(201, 160, 99, 1);
  border: 2px solid rgba(201, 160, 99, 1) !important;
}
.max_active_btn:hover {
  background: rgba(194, 154, 94, 1) !important;
}
</style>