// 导入请求函数
import { defHttp } from '@/utils/http';
import { userStore } from "@/state";
import type { SysDictionaryResponse ,SysDistrictItem ,SysOrgItem} from './model/SysDictionary'


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


export const  fetchDictionary = async (dicType: string): Promise<GasOption[]> => {
  // 组织机构下拉选
  if('org' === dicType) {
    const list = await getOrg();
    return list.map(o => ({text: o.fullName,value: o.id,label: o.fullName}));
  }
  // 服务器列表下拉选
  if('SERVER_CONFIG' === dicType) {
    const store = userStore();
    return  store.auth.servers.map(e => ({
      text: e.label,
      value: e.value
    }))
  }
  const { data } = await getDictList(dicType);
  return data[dicType].map(o => ({text: o.label,value: o.value,label: o.label}));
}