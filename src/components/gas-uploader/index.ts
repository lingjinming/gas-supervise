
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
}

// 接口返回的附件格式
export type FileObj = {
  id: string;
  name: string;
  url?: string;
}

