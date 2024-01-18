import pages from '../pages.json'
// TODO 不太有必要,直接用原生API算了
const nameUrlMap = pages.pages.reduce((acc, page) => {
  acc[page.name] = page.path
  return acc
}, {})

const subPageNameUrlMap = pages.subPackages.reduce((acc, subPage) => {
  const rootPath = subPage.root;
  subPage.pages.forEach(page => {
    acc[page.name] = `${rootPath}/${page.path}`
  })
  return acc
}, {});

const nameMap = Object.assign({}, nameUrlMap, subPageNameUrlMap)

export type EventType = {
  [key in string]: any
}
export type NavigateToConfig = {
  query?: any,
  emits?: EventType,
  events ?: EventType
}


const queryToString = (query: any|undefined) => {
  if(query) {
    const queryArr = Object.entries(query).map(([key, value]) => `${key}=${value}`)
    return queryArr.join('&')
  }
  return ''
}

export async function useInit () {
  const query = shallowRef<AnyObject | undefined>(undefined);
  const { eventChannel } = await new Promise<{eventChannel: UniApp.EventChannel}>((res,rej) => {
    onLoad((options) => {
      query.value = options;
      const _this = getCurrentInstance();
      // @ts-ignore
      const eventChannel: UniApp.EventChannel = _this!.ctx.getOpenerEventChannel();
      res({eventChannel})
    })
  })
  return {
    query,
    eventChannel
  }
}

export function useRouter() {

  const navigateTo = async (name: string,config ?: NavigateToConfig) => {
    const queryStr = queryToString(config?.query)
    const url =  nameMap[name] + (queryStr ? `?${queryStr}` : '');
    const events = config?.events;
    const result: UniApp.NavigateToSuccessOptions | void = await uni.navigateTo({url,events})
    if(result && config?.emits) {
      Object.entries(config.emits).forEach(([key,value]) => {
        result.eventChannel.emit(key,value)
      })
    }
    return {
      channel: result?.eventChannel
    }
  }

  return {
    navigateTo
  }
}
