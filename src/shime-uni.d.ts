import GasAttachVue from '@/components/gas-attach/gas-attach.vue'
import GasCascaderVue from './components/gas-cascader/gas-cascader.vue';
import GasCheckGroupVue from './components/gas-check-group/gas-check-group.vue';
import GasPanelVue from './components/gas-panel/gas-panel.vue';
import GasPickerVue from './components/gas-picker/gas-picker.vue';
import GasTableVue from './components/gas-table/gas-table.vue';
import GasUploaderVue from './components/gas-uploader/gas-uploader.vue';
export {}
declare module "vue" {
  type Hooks = App.AppInstance & Page.PageInstance;
  interface ComponentCustomOptions extends Hooks {}
  export interface GlobalComponents {
    GasAttach: typeof GasAttachVue;
    GasCascader: typeof GasCascaderVue;
    GasCheckGroup: typeof GasCheckGroupVue;
    GasPanel: typeof GasPanelVue;
    GasPicker: typeof GasPickerVue;
    GasTable: typeof GasTableVue;
    GasUploader: typeof GasUploaderVue;
  }
}