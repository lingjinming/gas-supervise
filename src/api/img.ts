// 导入请求函数
import { request } from './request';
import { defHttp } from '@/utils/http';
import { getUrl } from "@/utils";
import { userStore } from "@/state";




/**
 * 获取图片预览地址,内网的,不能直接用
 * @param id 
 * @returns 
 *   https://10.100.121.10:33444/gcityll/00039a65079347a0aa1dd83e6292bda3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=admin%2F20230911%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230911T022740Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2586e96b6d4cad00209e518c5df048f59cb29214ac7b7ea972da3a3d8d300b8f
 */
export const getImgPreviewUrl = (id:string) => {
  return defHttp.get<string>({
    url: 'gas-supervise/open/file/' + id,
  })
}

/**
 * 根据附件id, 加载文件base64字符串数据
 * @param fileId 文件id,如:064f5c7cbbfd4626bee47e38592ae1e3.jpg
 */
export const loadFileBase64 = async (fileId: string): Promise<string> => {
  const previewUrl = await getImgPreviewUrl(fileId);
  const {path,query} = getUrl(previewUrl);
  

  const buffer = await  defHttp.get<ArrayBuffer>({
    url: `preview_pic/${path}?${query}`,
    responseType: 'arraybuffer',
  },{isTransformResponse: false,withoutToken: true});

  return uni.arrayBufferToBase64(buffer);
}

/**
 * 根据文件id,下载文件,并返回文件临时地址
 * @param fileId 文件id,如:064f5c7cbbfd4626bee47e38592ae1e3.jpg
 * @returns 文件临时地址
 */
export const downloadFile = async (fileId: string) : Promise<string>=> {
  const store = userStore();
  const region = store.auth.activeServer?.region;

  //const previewUrl = await getImgPreviewUrl(fileId);
  //const queryObj = getUrl(previewUrl);
  // https://aiot.citysafety.com/gasguard/gas-supervise/open/download/895131bae2b148f3abcd7dc46a79e534.jpg

  return new Promise<string>((resolve,rej) => {
    uni.downloadFile({
      //url: `https://aiot.citysafety.com/gasguard/preview_pic/${queryObj?.path}`,
      url: `https://aiot.citysafety.com/gasguard/gas-supervise/open/download/${fileId}`,
      header: {
        "x-api-region": region,
      },
      responseType: "arraybuffer",
      success(res) {
        resolve(res.tempFilePath)
      },
      fail(e) {
        rej(e)
      }
    });
  })
  
}


/**
 * 所属区域
*/
export const getImg = (id:string) => {
    return request({
        // responseType:'arraybuffer',
        url: "gas-supervise/open/file/" + id,
        method: "GET"
    })
}