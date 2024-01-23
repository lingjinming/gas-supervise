// 导入请求函数
import { defHttp } from '@/utils/http';
import { userStore } from "@/state";
import type { DicItem, SysDictionaryResponse ,SysDistrictItem ,SysOrgItem} from './model/SysDictionary'


/**
 * 所属区域
*/
export const getDistrict = () => {
  return defHttp.get<SysDistrictItem>({
    url: "gas-supervise/user/me/district"
  })
}



/**
 * 关联燃气公司
*/
export const getOrg = () => {
  return defHttp.get<SysOrgItem[]>({
    url: "gas-supervise/user/me/org"
  })
}



/**
 * 获取数据字典
 * @param dicType 数据字典类型
 * @returns 数据字典
 */
export const getDictList = (dicType: string) => {
  return defHttp.get<SysDictionaryResponse>({
    url: `gas-supervise/dictionary/list?types=${dicType}`
  },{isTransformResponse: false})
}

let taskId: number;
let tempCache :any[] = [];
/**
 * 防抖函数,如果50ms内接收到了多个查询请求,则使用逗号拼接成一个,同时发送到服务器;
 * thread safe on client
 */
const getDicListDebounce = async (dicType :string) =>{
  return new Promise<SysDictionaryResponse>((resolve,rej) => {
    if(taskId) {
      clearTimeout(taskId);
    }
    resolve['__dicType'] = dicType
    tempCache.push(resolve);
    taskId = setTimeout(() => {

      getDictList(tempCache.map(e => e['__dicType']).join(','))
      .then(res => {
        tempCache.forEach(r => r(res))
      }).catch(rej).finally(() => tempCache = [])

    }, 50);
  })
}

export const  fetchDictionary = async (dicType: string): Promise<GasOption[]> => {
  // 组织机构下拉选
  if('org' === dicType) {
    const list = await getOrg();
    return list.map(o => ({text: o.fullName,value: o.id,label: o.fullName}));
  }
  if('district' === dicType) {
    const result = await getDistrict();
    if(result.children) {
      return result.children.map(o => ({text: o.name,value: o.code+'',label: o.name}));
    }
    return [];
  }
  // 服务器列表下拉选
  if('SERVER_CONFIG' === dicType) {
    const store = userStore();
    const serverList = await store.loadServers();
    return  serverList.map(e => ({ text: e.label, value: e.value }))
  }
  const { data } = await getDicListDebounce(dicType);
  return mapTo(data[dicType])
}

// 递归转换为树形结构
const mapTo = (item: DicItem[]) : GasOption[] => {
  return item.map(e => {
    const option: GasOption = {
      text: e.label,
      value: e.value,
      label: e.label
    }
    if(e.children) {
      option.children = mapTo(e.children);
    }
    return option;
  })
  
}