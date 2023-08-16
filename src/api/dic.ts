// 导入请求函数
import { defHttp } from '@/utils/http';
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
  })
}