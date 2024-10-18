<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img v-lazy="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img
          v-lazy="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";

export default {
  name: "SupermallDetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
  },
};
</script>

<style lang="scss" scoped>
div.comment-info {
  padding: 0 10px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
  div.info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    div.header-title {
      font-size: 15px;
    }
    div.header-more {
      font-size: 13px;
      margin-right: 10px;
      i.arrow-right {
        border-top: 1px solid #999;
        border-left: 1px solid #999;
        width: 9px;
        height: 9px;
        background-color: transparent;
        transform: rotate(135deg);
        display: inline-block;
        margin-left: 0.1rem;
      }
    }
  }
  div.info-user {
    padding: 10px 0 5px;
    display: flex;
    align-items: center;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    span {
      font-size: 15px;
      margin-left: 10px;
    }
  }
  
  div.info-detail {
    padding: 0 5px 15px;
    p {
      color: #777;
      line-height: 1.5;
    }
    div.info-other {
      font-size: 12px;
      color: #999;
      margin-top: 10px;
      span.date {
        margin-right: 8px;
      }
    }
    div.info-imgs {
      margin-top: 10px;
      img {
        width: 70px;
        height: 70px;
        margin-right: 5px;
      }
    }
  }
}

</style>
