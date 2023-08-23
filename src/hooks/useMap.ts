import { getDistrictId } from "@/utils/qqMapUtil";
type ChooseLocationReturnType = {
  success: false;
} | {
  success: true;
  lat: number;
  lon: number;
  address: string;
  districtId: string;
}

type UserMapReturnType = {
  chooseLocation: () => Promise<ChooseLocationReturnType>
}

export const useMap = (): UserMapReturnType => {


  const chooseLocation = async (): Promise<ChooseLocationReturnType> => {
    const hasPermission = await requireUserPermission("scope.userLocation");
    if(!hasPermission) {
      return {success: false}
    }
    return new Promise((res,rej) => {
      uni.chooseLocation({
        success: async function (location) {
          const { code } = await getDistrictId(location.latitude, location.longitude)
          res({
            success: true,
            lon: location.latitude,
            lat: location.latitude,
            address: location.address,
            districtId:code
          })
        },
        fail: function (fail) {
          res({success: false})
        },
      });
    })
  }


  return {
    chooseLocation
  }

}


const requireUserPermission = (scope: string) => {
  return new Promise<boolean>((res,rej) => {
    uni.authorize({
      scope,
      success: ()=> {
        res(true)
      },
      fail: () => {
        res(false);
      }
    })
  })
}