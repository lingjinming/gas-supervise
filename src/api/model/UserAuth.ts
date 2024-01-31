export type OAuth2LoginReq = {
  grant_type: string;
  scope:      string;
  username:   string;
  password:   string;
};


/**
 * 后台服务器配置
 */
export type ServerConfig = {
  /**
   * 地区
   */
  regions: {
    /**
     * 登录时的认证头
     */
    auth_header: string;
    /**
     * 区域编码
     */
    region: string;
    /**
     * 备注
     */
    remark: string;
  } []  
}

// 0-政府,1-企业,2-监测中心
export type OrgType = "0" | "1" | "2"
/**
 * 中台组织机构信息
 */
export interface PortalOrganization {
  id:                           string;
  parentOrg:                    string;
  fullName:                     string;
  shortName:                    string;
  districtCode:                 string;
  sort:                         number;
  name:                         string;
  unifiedSocialCreditIdentifie: string;
  fax:                          string;
  orgType:                      OrgType;
  systemFlag:                   string;
  // 组织下的用户列表
  userList?:                    SysUserInfo[];
  // 下级部门
  children?:                    PortalOrganization[];
}

/**
 * 中台用户信息
 */
export interface SysUserInfo {
  /**
   * 用户id
   */
  userId:                       string;
  /**
   * 用户手机号
   */
  phoneNumber:                  string;
  /**
   * 用户登录名
   */
  userName:                     string;
  /**
   * 用户姓名
   */
  name:                         string;
  /**
   * 用户所属组织id
   */
  organizationId:               string;
  /**
   * 身份证号
  */
  idcard:                       string;
  /**
    * 性别
  */
  gender:                       string;
  /**
   * 联系地址
   */
  contactAddress:               string;
  /**
   * 数据权限: 有权访问的组织机构id列表,逗号分割
   */
  partTimeOrganization:         string;
  /**
   * 数据权限: 有权访问的区域编码列表,逗号分割
   */
  dataRegional:                 string;
  /**
   * 数据权限: 有权访问的专项编码列表,逗号分割
   */
  dataSpecific:                 string;
  /**
   * 用户所属的组织机构信息
   */
  organizationVO:               PortalOrganization;
  /**
   * 用户有权访问的机构列表
   */
  partOrganizationVOs?:         PortalOrganization[];
  officeNumber:                 string;
  sort:                         number;
  job:                          string;
  permissionDistrictCode:       string;
  districtObjType:              string;
  permissionSystemDistrictName: string;
  permissionEnable:             boolean;
  permissionParentDistrictCode: string;
  permissionParentDistrictName: string;
  districtObjLevel:             number;
}






/**
 * 登录接口返回的oauth2
 */
export interface OAuth2Token {
  // 过期时间,毫秒
  expire_at:        number;
  access_token:     string;
  token_type:       string;
  refresh_token:    string;
  expires_in:       number;
  scope:            string;
  name:             string;
  phoneNumber:      string;
  avatar:           null;
  userName:         string;
  systemIdentifier: string;
  openid:           string;
  jti:              string;
}