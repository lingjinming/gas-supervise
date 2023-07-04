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


/**
 * 当前登录用户详情
 */

export interface SysUserInfo {
  userId:                       string;
  pbfStatus:                    number;
  phoneNumber:                  string;
  userName:                     string;
  name:                         string;
  organizationId:               string;
  sort:                         number;
  idcard:                       string;
  gender:                       string;
  officeNumber:                 string;
  job:                          string;
  contactAddress:               string;
  partTimeOrganization:         string;
  dataSpecific:                 string;
  dataRegional:                 string;
  permissionDistrictCode:       string;
  districtObjType:              string;
  permissionSystemDistrictName: string;
  permissionEnable:             boolean;
  permissionParentDistrictCode: string;
  permissionParentDistrictName: string;
  districtObjLevel:             number;
  /**
   * 用户所属的组织机构信息
   */
  organizationVO:               UserOrganization;
  /**
   * 用户有权访问的机构列表
   */
  partOrganizationVOs:          UserPartOrganization[];
}

export interface UserOrganization {
  id:                           string;
  parentOrg:                    string;
  fullName:                     string;
  shortName:                    string;
  districtCode:                 string;
  sort:                         number;
  unifiedSocialCreditIdentifie: string;
  fax:                          string;
  orgType:                      string;
}

export interface UserPartOrganization {
  id:                           string;
  parentOrg:                    string;
  fullName:                     string;
  shortName:                    string;
  districtCode:                 string;
  sort:                         number;
  unifiedSocialCreditIdentifie: string;
  fax:                          string;
  orgType:                      string;
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