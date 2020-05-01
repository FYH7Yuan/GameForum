<template>
  <div>
    <ul>
      <li class="_areaArticle" v-for="(item, index) in LunT" :key="index">
        <div class="_article">
            <router-link tag="a" :to="{name: 'Detail', params:{id : item.id}}" class="_rightDetail">{{ item.Article }}</router-link>
        </div>
        <div class="_detail">
          <a class="_detailLeft">
            <img :src="item.Imgurl" alt="" />
          </a>
          <div class="_detailRight">
            <div class="_rightDetail">

              {{ item.Detail }}
            </div>
            <div class="_rightFooter">
              <div class="_detailName">{{ item.GameClass }}</div>
              <div class="_detailOther">
                <span>{{ item.Account }}回复</span>
                <strong> . </strong>
                <span> {{ item.Date }}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      LunT: [
        {
          id: "00001",
          Article: "【魔法设计院】看见依克黎，第二部",
          Imgurl:
            "https://wspic.iyingdi.cn/common/2020/04/27/69235319-495f-4431-91dd-11fb07adb6b2.jpg",
          Detail:
            "虽然我不知道应该写点什么，但是总要写点什么，那要写点啥吗，是的！的确需要写点啥",
          Account: "20",
          Date: "4月88日",
          GameClass: "玩屎小分队"
        },
        {
          id: "00002",
          Article: "【魔法设计院】看见依克黎，第二部",
          Imgurl:
            "https://wspic.iyingdi.cn/common/2020/04/27/69235319-495f-4431-91dd-11fb07adb6b2.jpg",
          Detail:
            "虽然我不知道应该写点什么，但是总要写点什么，那要写点啥吗，是的！的确需要写点啥",
          Account: "20",
          Date: "4月88日",
          GameClass: "玩屎小分队"
        },
        {
          id: "00003",
          Article: "【魔法设计院】看见依克黎，第二部",
          Imgurl:
            "https://wspic.iyingdi.cn/common/2020/04/27/69235319-495f-4431-91dd-11fb07adb6b2.jpg",
          Detail:
            "虽然我不知道应该写点什么，但是总要写点什么，那要写点啥吗，是的！的确需要写点啥",
          Account: "20",
          Date: "4月88日",
          GameClass: "玩屎小分队"
        },
        {
          id: "00004",
          Article: "【魔法设计院】看见依克黎，第二部",
          Imgurl:
            "https://wspic.iyingdi.cn/common/2020/04/27/69235319-495f-4431-91dd-11fb07adb6b2.jpg",
          Detail:
            "虽然我不知道应该写点什么，但是总要写点什么，那要写点啥吗，是的！的确需要写点啥",
          Account: "20",
          Date: "4月88日",
          GameClass: "玩屎小分队"
        },
        {
          id: "00005",
          Article: "【魔法设计院】看见依克黎，第二部",
          Imgurl:
            "https://wspic.iyingdi.cn/common/2020/04/27/69235319-495f-4431-91dd-11fb07adb6b2.jpg",
          Detail:
            "虽然我不知道应该写点什么，但是总要写点什么，那要写点啥吗，是的！的确需要写点啥",
          Account: "20",
          Date: "4月88日",
          GameClass: "玩屎小分队"
        },
        {
          id: "00001",
          Article: "【魔法设计院】看见依克黎，第二部",
          Imgurl:
                  "https://wspic.iyingdi.cn/common/2020/04/27/69235319-495f-4431-91dd-11fb07adb6b2.jpg",
          Detail:
                  "虽然我不知道应该写点什么，但是总要写点什么，那要写点啥吗，是的！的确需要写点啥",
          Account: "20",
          Date: "4月88日",
          GameClass: "玩屎小分队"
        },
        {
          id: "00001",
          Article: "【魔法设计院】看见依克黎，第二部",
          Imgurl:
                  "https://wspic.iyingdi.cn/common/2020/04/27/69235319-495f-4431-91dd-11fb07adb6b2.jpg",
          Detail:
                  "虽然我不知道应该写点什么，但是总要写点什么，那要写点啥吗，是的！的确需要写点啥",
          Account: "20",
          Date: "4月88日",
          GameClass: "玩屎小分队"
        },
      ]
    };
  }
};
</script>
<style lang="scss">
a {
  cursor: pointer;
}

._areaArticle {
  position: relative;
  padding: 20px 0;
  font-size: 14px;
  color: #9b9b9b;
  border-bottom: 1px solid #f3f3f3;

  ._article {
    display: block;
    font-size: 18px;
    color: #4a4a4a;
    min-height: 20px;
    max-height: 42px;
    line-height: 1.2;
    margin-bottom: 15px;
    font-weight: 700;
    transition: color 0.3s;
    overflow: hidden;

    a {
      display: block;
      text-decoration: none;
      color: #333333;

      &:hover {
        color: #3086f2;
      }
    }
  }

  ._detail {
    box-sizing: border-box;

    ._detailLeft {
      display: inline-block;
      vertical-align: top;
      width: 191px;
      height: 109px;
      margin-right: 15px;
      overflow: hidden;

      img {
        transition: scale3d, 0.3s;
        height: 100%;
        width: 100%;

        &:hover {
          transform: scale(1.4);
        }
      }
    }

    ._detailRight {
      position: relative;
      display: inline-block;
      vertical-align: top;
      width: 594px;
      height: 109px;
      cursor: default;

      ._rightDetail {
        cursor: default;
        min-height: 30px;
        overflow: hidden;
      }

      ._rightFooter {
        margin-top: 30px;

        ._detailName {
          height: 14px;
          line-height: 14px;
          float: left;
        }

        ._detailOther {
          float: right;
          height: 14px;
          line-height: 14px;
        }
      }
    }
  }
}
</style>
