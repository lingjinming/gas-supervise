<template>
  <van-swipe-cell :right-width="(info.state === 'WAIT_AUDIT' && !isOrg) ? 160 : 0">
    <van-skeleton title avatar row="2" :loading="data.loading">
      <view class="hidden-box" @click.stop="showFlow(info.uid as string)">
        <view class="tit">
          <view>
            <van-tag :type="getTagType(info.level!)">
              {{ info._level }}
            </van-tag>
            <text class="name">{{ info._subjectType + '-' + info._dangerType }}</text>
          </view>
          <text class="ago">{{ info.ago }}</text>
        </view>
        <view class="con">
          <text>{{ info.remark || '暂无描述' }}</text>
        </view>
        <view class="addr">
          <van-icon name="location" />
          {{ info.address }}
        </view>

        <view class="bottom">
          <view>
            <van-icon name="user-o" :size="18" />
            由<text class="publisher">{{ info.checkBy }}</text>发布
          </view>
          <template v-if="'HANDLED,WAIT_AUDIT'.includes(info.state!)">
            <view class="state handled"> {{ info._state }} </view>
          </template>
          <template v-else>
            <view hover-stop-propagation v-if="isOrg" @click.stop="navigatoReform(info)">
              <van-button plain hairline round size="mini" type="primary">去整改</van-button>
            </view>
            <template v-else>
              <view class="state wait-handle"> 待整改 </view>
            </template>
          </template>
        </view>
      </view>
    </van-skeleton>
    <view slot="right" class="right" >
      <view class="done" @click="showAuditForm(true)">消除</view>
      <view class="del" @click="showAuditForm(false)">驳回</view>
    </view>
  </van-swipe-cell>
  <!-- 审核弹窗 -->
  <van-popup :show="data.showAudit" position="bottom" custom-style="height: 40%;" @close="data.showAudit = false">
    <view class="audit">
      <view class="title">{{ data.isPass ? '隐患整改通过' : '隐患整改驳回' }}</view>
      <view class="input">
        <textarea v-model="data.audit.auditRemark" :placeholder="data.isPass ? '请输入隐患整改通过批示' : '请输入驳回原因'">

        </textarea>
      </view>
      <view class="btns">
        <button @click="data.showAudit = false">取消</button>
        <button @click="submitAudit">确认</button>
      </view>
    </view>
  </van-popup>
</template>
<script setup lang="ts">
import type { HidangerPgaeVO } from '@/api/model/HidangerPage';
import type { PropType } from 'vue'
import { reactive } from 'vue';
import { userStore } from "@/state";
import { hidangerAudit } from '@/api/hidden'
import type {AuditCreateReq} from '@/api/model/HidangerAudit'
import { EventType } from '@/enums/eventType'

const props = defineProps({
  info: {
    type: Object as PropType<HidangerPgaeVO>,
    default: {
      uid: ''
    }
  }
})
const store = userStore();
const isOrg: boolean = store.isOrgUser;
uni.request
const data = reactive({
  loading: false,
  showAudit: false,
  isPass: false,
  audit: <AuditCreateReq>{
    auditRemark: '',
    auditResult: 'PASS',
    riskIds: [] as string[]
  }
})

// 展示审核弹窗
const showAuditForm = (isPass: boolean) => {
  data.isPass = isPass;
  data.showAudit = true;
}

// 提交审核记录
const submitAudit = async () => {
  const request = data.audit;
  request.auditResult = data.isPass ? 'PASS' : 'NOT_PASS';
  request.riskIds = [props.info.uid!]
  console.log(request);
  
  await hidangerAudit(request)
  data.showAudit = false;
  // 让列表刷新
  uni.$emit(EventType.DANGER_PAGE_REFRESH)
}

setTimeout(() => {
  data.loading = false;
}, 500);

// 去整改
const navigatoReform = (info: HidangerPgaeVO) => {
  uni.navigateTo({
    url: `/pages/hiddenReform/index?uid=${info.uid}&checkDate=${info.checkDate}`
  })
}
// 查看流程
const showFlow = (uid: string) => {
  uni.navigateTo({
    url: `/pages/hiddenDetail/index?uid=${uid}`
  })
}

const getTagType = (level: string) => {
  if (level === 'ZD') {
    return 'danger';
  }
  if (level === 'JD') {
    return 'warning'
  }
  return 'primary'
}

</script>


<style lang="scss" scoped>
.hidden-box {
  margin: 0 30rpx 30rpx;
  background: #fff;
  border-radius: 4rpx;
  padding: 30rpx;
  border-radius: 6rpx;

  .tit {
    margin-bottom: 25rpx;
    @include flex-between;

    .name {
      margin-left: 13rpx;
      font-size: 30rpx;
      font-family: Microsoft YaHei;
      font-weight: 600;
      color: #222222;
    }

    .ago {
      color: #989898;
    }
  }

  .con {
    color: #222222;
    margin-bottom: 20rpx;

    .name {
      color: $uni-color-primary;
    }
  }

  .addr {
    color: #4B5B6C;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 23rpx;
  }

  .bottom {
    @include flex-between;

    .publisher {
      font-weight: 600;
      margin: 0 10rpx;
    }

    .gohandle {
      width: 144rpx;
      height: 62rpx;
      line-height: 62rpx;
      border: 1rpx solid $uni-color-primary;
      border-radius: 31rpx;
      margin-right: 0;
      font-size: 26rpx;
      color: $uni-color-primary;
      font-weight: 500;
    }

    .state {
      color: $uni-color-success;
      position: relative;

      &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: -26rpx;
        content: " ";
        height: 16rpx;
        width: 16rpx;
        border-radius: 10rpx;

      }
    }

    .state.handled {
      color: $uni-color-success;

      &::before {
        background-color: $uni-color-success;
      }
    }

    .state.wait-handle {
      color: $uni-color-warning;

      &::before {
        background-color: $uni-color-warning;
      }
    }
  }
}

.right {
    height: 100%;
    @include flex-between;
    width: 320rpx;
    view {
      @include flex-center;
      width: 50%;
      height: 100%;
      color: #fff;
    }
    .done {
      background: $uni-color-success;
    }
    .del {
      background: $uni-color-error;
    }
  }

.audit {
  .title {
    text-align: center;
    font-weight: 700;
    font-size: 35rpx;
  }
  .input {
    border: 1rpx solid #ccc;
    height: 65%;
    margin: 20rpx;
  }
  .btns {
    @include flex-between;
    button {
      border: 0px;
      width: 333rpx;
      height: 88rpx;
      line-height: 88rpx;
      border-radius: 10px;
    }
  }
}
</style>
