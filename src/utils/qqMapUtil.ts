import MapSDK from './qqmap-wx-jssdk'

const map = new MapSDK({ key: 'YV5BZ-RY3CZ-OKJXS-Z7JJJ-NFBTV-WXFGF' });

type Location =  {
  latitude: number | string;
  longitude: number | string;
}
type ReverseGeocoderResult = {
  result: {
    ad_info : {
      adcode: string;
    }
  }
}

/**
 * 根据经纬度坐标 获取行政区划编码
 */
export const getDistrictId = (location: Location): Promise<any> => {
  return new Promise((res,rej) => {
    map.reverseGeocoder({
      location,
      success: (data: ReverseGeocoderResult) => {
        res(data.result.ad_info.adcode);
      },
      fail: (error) => {
        rej(error)
      }
    })
  })
}