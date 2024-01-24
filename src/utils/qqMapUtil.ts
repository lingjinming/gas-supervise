import MapSDK from './qqmap-wx-jssdk'



interface ReverseGeocoderResult {
  status:     number;
  message:    string;
  request_id: string;
  result:     Result;
}

 interface Result {
  location:            Location;
  address:             string;
  formatted_addresses: FormattedAddresses;
  address_component:   AddressComponent;
  ad_info:             AdInfo;
  address_reference:   AddressReference;
}

 interface AdInfo {
  nation_code:     string;
  adcode:          string;
  phone_area_code: string;
  city_code:       string;
  name:            string;
  location:        Location;
  nation:          string;
  province:        string;
  city:            string;
  district:        string;
}

 interface Location {
  lat: number;
  lng: number;
}

 interface AddressComponent {
  nation:        string;
  province:      string;
  city:          string;
  district:      string;
  street:        string;
  street_number: string;
}

 interface AddressReference {
  business_area: BusinessArea;
  famous_area:   BusinessArea;
  crossroad:     BusinessArea;
  town:          BusinessArea;
  street_number: BusinessArea;
  street:        BusinessArea;
  landmark_l1:   BusinessArea;
  landmark_l2:   BusinessArea;
}

 interface BusinessArea {
  id:        string;
  title:     string;
  location:  Location;
  _distance: number;
  _dir_desc: string;
}

 interface FormattedAddresses {
  recommend: string;
  rough:     string;
}

const map = new MapSDK({ key: 'YV5BZ-RY3CZ-OKJXS-Z7JJJ-NFBTV-WXFGF' });

type getDistrictIdReturnType = {
  /**
   * 区划编码
   */
  code: string;
  /**
   * 城市名称
   */
  city: string;
  /**
   * 区县名称
   */
  name: string;
}
/**
 * 根据经纬度坐标 获取行政区划编码
 */
export const getDistrictId = (latitude: string|number,longitude:string|number): Promise<getDistrictIdReturnType> => {
  return new Promise((res,rej) => {
    map.reverseGeocoder({
      location:{latitude,longitude},
      success: (data: ReverseGeocoderResult) => {
        const adInfo = data.result.ad_info;
        res({
          code: adInfo.adcode,
          city: adInfo.city,
          name: adInfo.district
        });
      },
      fail: (error) => {
        console.log(error);
        
        rej(error)
      }
    })
  })
};

