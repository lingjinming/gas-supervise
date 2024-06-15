import type { PropType } from 'vue'

export type ActionType = {
  name: string;
};

export const GasActionSheetProps = {
  actions: {
    type: Object as  PropType<ActionType[]>,
    required: true
  },
  show: {
    type: Boolean,
    default: false
  },
  cancelText: {
    type: String,
    default: '取消'
  }
}

