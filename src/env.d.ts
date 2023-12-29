/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}


type GasOption = {
  text: string;
  value: string;
  label?: string;
}


interface Event {
  detail: any
}
type Rules<T> = {
  [key in keyof T] ?: {
    required?: boolean,
    email?: boolean,
    tel?:boolean,
    url?:boolean,
    date?:boolean,
    dateISO?:boolean,
    number?:boolean,
    digits?:boolean,
    idcard?:boolean,
    equalTo?:key,
    contains?:string,
    minlength?:number,
    maxlength?:number,
    rangelength?:[number,number],
    min?:number,
    max?:number,
    range?: [number,number],
  }
}

 type Messages<T> = {
  [key in keyof T] ?: {
    required?: string,
    email?: string,
    tel?:string,
    url?:string,
    date?:string,
    dateISO?:string,
    number?:string,
    digits?:string,
    idcard?:string,
    equalTo?:string,
    contains?:string,
    minlength?:string,
    maxlength?:string,
    rangelength?:string,
    min?:string,
    max?:string,
    range?: string,
  }
}

class WxValidateType <T>{
  constructor(rules: Rules<T>, messages: Messages<T>);
  checkForm(data: any): boolean;
  valid(): boolean;
  size():number;
  validationErrors(): {msg: string,param: string,value: string}[];
  errorList: {msg: string,param: string,value: string}[];
}