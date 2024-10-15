import { defineStore } from 'pinia';
import { setCache, getCache ,removeCache} from '@/utils/cache'
import { getConfig } from "@/api/uaa";
import {fetchDictionary} from '@/api/dic'
import type { SysUserInfo ,OAuth2Token} from '@/api/model/UserAuth';
import { loadJs } from '@/utils';

export interface Server {
  // title in login page
  TITLE: string;
  BASE_URL: string;
  LOGIN_URL: string;
  APPID: string;
  APPKEY: string;
}

interface UserStoreType {
  auth: {
    token: OAuth2Token|undefined,
    servers: Server[],
    activeServer: Server | undefined
  },
  userInfo: SysUserInfo | undefined,
  // 字典缓存
  dictionary: {
    [key in string]: GasOption[]
  }
}

export const userStore = defineStore('app-store', {
  state: (): UserStoreType => {
    return {
      auth: {
        // 登陆后获取的token信息
        token: undefined,
        // 可用的服务器列表
        servers: [],
        // 用户选择的服务器
        activeServer: undefined
      },
      // 用户信息
      userInfo: undefined,
      dictionary: {

      }
    } 
  },
  getters: {
    // 是否已经登录
    isLogin: (state) => !!state.auth?.token,
    // 是否是企业用户
    isOrgUser: (state) => state.userInfo?.organizationVO.orgType === '1',
    // 是否是政府用户
    isGovUser: (state) => state.userInfo?.organizationVO.orgType === '0',
    // 按 服务器 编码,获取服务器配置
    getServer:(state) => (region: string) => state.auth.servers?.[0] || undefined

  },
  actions: {
    async loadServers() {
      await loadJs('./static/conf.js')
      let serverList = getConfig();
      this.auth.servers =  serverList;
      setCache('SERVER_LIST',serverList);

      this.setServer(this.auth.servers[0]);
      return this.auth.servers
    },
    // 获取数据字典
    async fetchDictionary(dicType: string) {
      const cacheDic = this.dictionary[dicType];
      if(!cacheDic) {
        // concurrent fetch
        this.dictionary[dicType] = [];
        const fetched = await fetchDictionary(dicType) || [];
        this.dictionary[dicType] = fetched ;
        return fetched;
      }
      return cacheDic;

    },
    // 从缓存恢复配置
    restoreStore() {
      const cacheToken = getCache('AUTH_TOKEN');
      // 判断token是否已经过期
      if(cacheToken?.expire_at) {
        const now = new Date().getTime();
        if(now > cacheToken.expire_at) {
          console.log('data expired, clear!!');
          this.clearCache();
          return;
        }
      }
      this.auth.token = cacheToken;
      this.auth.activeServer = getCache('SERVER_CONFIG');
      this.userInfo = getCache('USER_INFO');
    },
    // 设置登录token
    setToken(token: OAuth2Token | undefined) {
      if(token) {
        // 计算过期时长
        const expire_at = new Date().getTime() + token.expires_in * 1000;
        token.expire_at = expire_at;

        setCache('AUTH_TOKEN', token);
        this.auth.token = token!;
      }
    },
    clearCache() {
      removeCache('AUTH_TOKEN');
      removeCache('SERVER_CONFIG');
      removeCache('USER_INFO');
      this.auth.token = undefined;
      this.auth.activeServer = undefined;
      this.userInfo = undefined;
      this.dictionary = {};
    },
    setServer(server: any) {
      setCache('SERVER_CONFIG',server);
      this.auth.activeServer = server;
    },
    setUserInfo(userInfo: SysUserInfo) {
      setCache('USER_INFO',userInfo);
      this.userInfo = userInfo;
    }

  }
})




