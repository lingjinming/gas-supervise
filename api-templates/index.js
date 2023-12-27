const { generateApi, generateTemplates, GenerateApiParamsBase} = require('swagger-typescript-api');
const {schemaParse} = require('./schemaParse');
const path = require("path");
const fs = require("fs");
const _ = require("lodash");

/**
 * @type GenerateApiParamsBase
 */
const options = {
  name: "MySuperbApi.ts",
  // set to `false` to prevent the tool from writing to disk
  output: path.resolve(process.cwd(), "./src/api/gen"),

  // 隐患后端
  // url: 'http://10.5.5.105:8847/gasguard-service-risk-app/v3/api-docs',
  // 监管后端
  //url: 'http://10.5.5.105:8847/gas-supervise/v3/api-docs',
  url: 'http://localhost:23071/v3/api-docs',

  templates: path.resolve(process.cwd(), './api-templates/axios_modular'),
  defaultResponseAsSuccess: true,
  // 是否生成api客户端
  generateClient: true,
  // 生成的api分割为多个文件
  modular: true,
  // 客户端类型
  httpClientType: 'axios', // or "fetch"
  // 按接口信息中的第一个tag分割模块
  moduleNameFirstTag: false,
  // 按路径分割模块
  moduleNameIndex: 0,
  // 生成api类型信息
  generateRouteTypes: false,
  // 只生成一个httpClient
  singleHttpClient: true,
  generateResponses: true,
  toJS: false,
  extractRequestParams: false,
  extractRequestBody: false,
  // true data-contracts.ts 里的请求/响应类型中,抽取枚举,定义为单独的类型
  // false 直接使用联合类型
  extractEnums: true,
  // true-生产枚举类型, false-生成联合类型
  generateUnionEnums: true,
  unwrapResponseData: true,
  prettier: { // By default prettier config is load from your project
    printWidth: 120,
    tabWidth: 2,
    trailingComma: "all",
    parser: "typescript",
  },
  defaultResponseType: "void",
  // 构建前删除上一次构建结果
  cleanOutput: true,
  enumNamesAsValues: true,

  typePrefix: '',
  typeSuffix: '',
  enumKeyPrefix: '',
  enumKeySuffix: '',
  addReadonly: false,
  extractingOptions: {
    requestBodySuffix: ["Payload", "Body", "Input"],
    requestParamsSuffix: ["Params"],
    responseBodySuffix: ["Data", "Result", "Output"],
    responseErrorSuffix: ["Error", "Fail", "Fails", "ErrorData", "HttpError", "BadResponse"],
  },
  /** allow to generate extra files based with this extra templates, see more below */
  extraTemplates: [],
  anotherArrayType: false,
  fixInvalidTypeNamePrefix: "Type",
  fixInvalidEnumKeyPrefix: "Value",
  codeGenConstructs: (constructs) => ({
    ...constructs,
    RecordType: (key, value) => `Record<string, any>`,
    ArrayType: (data) => {
      if('string,number'.includes(data)){
        return `Array<${data}> | ${data}`
      }
      return `Array<${data}>`
    },
    EnumField: (key, value) => `${key} = ${value}`,
    EnumFieldsWrapper: (contents) =>
      _.map(contents, ({ key, value }) => `  ${Ts.EnumField(key, value)}`).join(",\n"),
  }),
  primitiveTypeConstructs: (constructs) => ({
    ...constructs,
    file: () => "FormData",
    string: {
      'date-time': 'string',
      binary: () => "FormData",
    }
  }),
  hooks: {
    onCreateRouteName: (routeNameInfo, rawRouteInfo) =>{
    },

    /**
     * 1. 取全部路径作为接口名称
     * 2. 所有接口定义统一放在一个文件中
     */
    onFormatRouteName: (routeInfo, templateRouteName) => {
      const {
        operationId,
        method,
        route,
        moduleName,
        responsesTypes,
        description,
        tags,
        summary,
        pathArgs,
      } = routeInfo;
      const methodAliases = {
        get: (pathName, pathVarName) => _.camelCase(`get_${pathName}_by_${pathVarName}`),
        post: (pathName, pathVarName) => _.camelCase(`post_${pathName}_by_${pathVarName}`),
        put: (pathName, pathVarName) => _.camelCase(`put_${pathName}_by_${pathVarName}`),
        delete: (pathName, pathVarName) => _.camelCase(`delete_${pathName}_by_${pathVarName}`),
      };
      const createCustomOperationId = (method, route, moduleName) => {
        const regx =  /\{(\w){1,}\}/g;
        // 是否有路径参数
        const hasPathInserts = regx.test(route);
        // 去除路径参数后,按/分割
        const splitedRouteBySlash = _.compact(_.replace(route, /\{(\w){1,}\}/g, "").split("/"));
        let routeParts = splitedRouteBySlash.join("_");
        // 如果有路径参数,转换成 get_xxx_by_xxx
        if(hasPathInserts) {
          const pathInserts = route.match(regx);
          return methodAliases[method](routeParts, pathInserts[0]);
        }
        // 否则,直接请求方法名+全部路径做为接口名称,绝对不会再重复
        return _.camelCase(method+"_"+routeParts);
      };
      return createCustomOperationId(method, route, moduleName);

    },
   
    onParseSchema: (rawSchema,schema) => {

    },
    
    onCreateRoute: (routeData) => {
      // 过滤掉不用的接口
      if(routeData.request.path.startsWith('/admin/cache')) {
        return false;
      }
      if(routeData.request.path.startsWith('/v1/portal/application/')) {
        return false;
      }
      // 处理文件上传
      if(routeData?.requestBodySchema?.dataType === 'multipart/form-data') {
        routeData.request.payload.type = 'FormData';
      }
      routeData.namespace = "GasSuperviseApi";

      return routeData;
      
    }
  }

}



schemaParse(options.url).then(spec => {
  options.spec = spec;
  options.url = undefined;

  generateApi(options)
  .then(({ files, configuration }) => {
    files.forEach(({ content, name }) => {
      fs.writeFile(path, content);
    });
  })

})


// generateApi(options)
// .then(({ files, configuration }) => {
//   files.forEach(({ content, name }) => {
//     fs.writeFile(path, content);
//   });
// })


  // generateTemplates({
  //   cleanOutput: false,
  //   output: path.resolve(process.cwd(), "./src/temp"),
  //   httpClientType: "axios",
  //   modular: true,
  //   silent: false,
  //   rewrite: false,
  // })