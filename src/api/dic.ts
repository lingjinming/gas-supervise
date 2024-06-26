// 导入请求函数
import { defHttp } from '@/utils/http';
import { userStore } from "@/state";
import type { DicItem, SysDictionaryResponse ,SysDistrictItem ,SysOrgItem} from './model/SysDictionary'
import { getUserOrgEnterprise } from './gen/GasSuperviseApi';
import type {OrganizationVO} from '@/api/gen/data-contracts'
import type {PortalOrganization} from '@/api/model/UserAuth'


/**
 * 所属区域
*/
export const getDistrict = () => {
  return defHttp.get<SysDistrictItem>({
    url: "gas-supervise/user/me/district"
  })
}

/**
 * 获取中台所有组织机构和用户
 */
export const portalAllOrgAndUser = () => {
  return defHttp.get<{data: PortalOrganization[]}>({
    url: "portal-system/v1/external/user/organization-user-tree"
  },{isTransformResponse: false})
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
let tasks :any[] = [];
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
    tasks.push(resolve);
    taskId = setTimeout(() => {
      let dicTypes = tasks.map(e => e['__dicType']).join(',');
      let execTasks = [...tasks];
      tasks = [];
      getDictList(dicTypes)
      .then(res => {
        execTasks.forEach(r => r(res))
      }).catch(rej)

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
  // 企业用户
  if('ENTERPRISE_USER' === dicType) {
    const result = await portalAllOrgAndUser()
    const userO = mapUserTo(result.data);
    return userO
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
  return item?.map(e => {
    const option: GasOption = {
      text: e.label,
      value: e.value,
      label: e.label
    }
    if(e.children) {
      option.children = mapTo(e.children);
    }
    return option;
  }) || []
  
}


/**
 * 获取用户树
 * 所有用户都应该挂在叶子节点上
 * 如果某个节点下的所有叶子节点都没有用户,则该节点不应该出现在树中
 */
const mapUserTo = (orgList: PortalOrganization[]) : GasOption[] => {
  const list: GasOption[] = [];
  for(let item of orgList) {
    let option: GasOption = {text: item.fullName, label: item.fullName, value: item.id,children:[]}
    // 是否有子部门
    if(item?.children?.length) {
      let children = mapUserTo(item.children)
      if(children.length) {
        option.children?.push(...children)
      }
    } 
    // 当前部门用户
    if(item?.userList?.length) {
      let userList = item.userList.map(u => ({text: u.name, label: u.name, value: u.userId}));
      option.children?.push(...userList)
    }
    if(option.children?.length) {
      list.push(option)
    }
  }
  return list;
}