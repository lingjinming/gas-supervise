import type { PropType } from 'vue'
/**
 *   modelValue: string;
  label: string;
  type: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
 */
export const gasFieldProps = {
  modelValue: {
    //type: [Number, String, Boolean],
    // 字符串 或者 字符串数组
    type: [String, Array] as PropType<string | string[]>,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  maxlength: {
    type: Number,
    default: 150,
  },
  rightIcon: {
    type: String,
    default: '',
  },
}