import { defineStore } from 'pinia';
import { setCache, getCache ,removeCache} from '@/utils/cache'
import { getConfig } from "@/api/uaa";


export const userStore = defineStore('app-store', {
  state: (): UserStoreType => {
    return {
      auth: {
        token: undefined,
        servers: [],
        activeServer: undefined
      },
      userInfo: undefined,
    } 
  },
  getters: {
    // 是否已经登录
    isLogin: (state) => !!state.auth?.token,
    // 获取用户信息
    getUserInfo: (state) => state.userInfo,
    // 是否是企业用户
    isOrgUser: (state) => state.userInfo?.organizationVO.orgType === '1',
    // 获取服务器列表
    getServerList: (state) => state.auth.servers,
    // 按 服务器 编码,获取服务器配置
    getServer:(state) => (region: string) => state.auth.servers.find(s => s.region === region)

  },
  actions: {
    async loadServers() {
      console.log('加载服务器配置...');
      // 加载服务器列表
      const data = await getConfig();
      const serverList = data.regions.map(r => ({label: r.remark,value: r.region,...r}));
      this.auth.servers = serverList;
      setCache('SERVER_LIST',serverList);

    },
    // 从缓存恢复配置
    restoreStore() {
      const cacheToken = getCache('AUTH_TOKEN');
      // 判断token是否已经过期
      if(cacheToken?.expire_at) {
        const now = new Date().getTime();
        if(now > cacheToken.expire_at) {
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
    },
    setServer(server: any) {
      setCache('SERVER_CONFIG',server);
      this.auth.activeServer = server;
    },
    setUserInfo(userInfo: any) {
      setCache('USER_INFO',userInfo);
      this.userInfo = userInfo;
    }

  }
})


interface Server {
  label: string;
  value:string;
  region: string;
  auth_header: string;
}
interface OAuth2Token {
  // 过期时间,毫秒
  expire_at: number;
  // token有效时长,秒
  expires_in: number;
  access_token: string;
  userName: string;
  token_type: 'bearer';
  scope: string;
}

interface UserStoreType {
  auth: {
    token: OAuth2Token|undefined,
    servers: Server[],
    activeServer: Server | undefined
  },
  userInfo: {
    organizationVO: {
      // 0-政府,1-企业,2-监测中心
      orgType: '0' | '1' | '2' 
    }
  } | undefined
}