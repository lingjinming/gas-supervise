
import { getFileExt,isImageFile } from '@/utils'
import { downloadFile} from "@/api/img";

export type  AcceptType = 'image' | 'media' | 'file';

export type FileStatus = 'uploading' | 'done' | 'failed' | 'down';

export type  LocalFile = {  
  id?:string,
  status?: FileStatus,
  type: AcceptType; 
  name: string; 
  size: number; 
  time: number; 
  url?: string;
  tempFilePath?: string;
  // 图片附件时
  thumb?: string;
  extname?: string;
}

// 接口返回的附件格式
export type FileObj = {
  id: string;
  name: string;
  url?: string;
}


export const adapterFile = (rawFiles: FileObj[],accept: AcceptType):[LocalFile[],Promise<void> []] => {
  let tasks: Promise<void>[] = [];
  let files = rawFiles.map((item) => {
    let id = item.id;
    let name = item.name;
    let url = item.url;
    let extname = getFileExt(item.name)
    let file : LocalFile =  {  extname,id, name, status: 'uploading', type: accept, size: 0,  time: 0, url: url,tempFilePath: url, thumb: url}
    if(url) {
      file.status = 'done';
    } else if(isImageFile(id)) {
      let task = downloadFile(id).then(tempPath => {
        file.url = tempPath;
        file.tempFilePath = tempPath;
        file.thumb = tempPath;
        file.status = 'down';
      });
      tasks.push(task);
    }
    return file;
  });
  return [files,tasks];
}