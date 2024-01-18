import type {BaseResponse} from './BaseModel'
export interface DicItem {
  pid:         string;
  id:          string;
  label:       string;
  value:       string;
  order:       number;
  hasChildren: boolean;
  notes1:      string;
  systemFlag:  string;
  text:        string;
  children?: DicItem[]
}

export type SysDictionaryResponse  = BaseResponse<Record<string,DicItem[]>>


// 行政区划数据结构
export interface SysDistrictItem {
  cmKid: string;
  parentId: number;
  parentName: string;
  parentCode: string;
  objLevel: number;
  name: string;
  code: number;
  objX: string;
  objY: string;
  children ?: SysDistrictItem[];
  text?: string;
  value?: number;
}


// 组织机构响应
export interface SysOrgItem {
  id: string;
  parentOrg: string;
  fullName: string;
  shortName: string;
  districtCode: string;
  sort: number;
  fax: string;
  orgType: string;
  text: string;
}