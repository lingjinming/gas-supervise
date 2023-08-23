const { generateApi, generateTemplates, GenerateApiParamsBase} = require('swagger-typescript-api');
const path = require("path");
const fs = require("fs");

/**
 * @type GenerateApiParamsBase
 */
const options = {
  name: "MySuperbApi.ts",
  // set to `false` to prevent the tool from writing to disk
  output: path.resolve(process.cwd(), "./src/api/generated"),

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
    // 全部都是必填的
    TypeField: (data) => {
      return data.key+":"+data.value;
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
    /**
     * 自定义接口名称
     */
    onFormatRouteName: (routeInfo, templateRouteName) => {
      // 防止关键字
      if(templateRouteName.toLowerCase() === 'delete') {
        return templateRouteName+"Data";
      }
      return templateRouteName;
    },
    // 给枚举类型加上_
    onParseSchema: (rawSchema,schema) => {
     if(schema.type === 'object') {
      for (const key in schema.properties) {
        const prop = schema.properties[key];
         if(prop.enum) {
          append(key,schema,prop)
        } else if('orgId,districtId'.includes(key)) {
          append(key,schema,prop)
        }
      }
     } 
    },
    
    onCreateRoute: (routeData) => {
      
      // 过滤掉不用的接口
      if(routeData.request.path.startsWith('/admin/cache')) {
        return false;
      }
      if(routeData.request.path.startsWith('/v1/portal/application/')) {
        return false;
      }

      // 取路径前两段作为接口文件名
      let namespace = convertPathToCamelCase(routeData.request.path);
      // 处理文件上传
      if(routeData?.requestBodySchema?.dataType === 'multipart/form-data') {
        routeData.request.payload.type = 'FormData';
      }
      routeData.namespace = namespace;

      return routeData;
      
    }
  }

}


function append(key,item,prop) {
  const typeDef = {
    type: 'string',
    description: prop.description+"枚举中文描述",
    '$parsed': prop['$parsed']
  };
  item.properties['_'+key] = typeDef;
  item.content.push({
    type: 'string',
    description:prop.description+"枚举中文描述",
    name: '_'+key,
    value: 'string',
    field:'_'+key+":string"
  })
}

/**
 * 取路径前两段作为接口文件名
 */
function convertPathToCamelCase(path) {
  if (!path) {
    return 'CommonRequest';
  }
  // 行政区划
  if(path.startsWith('/district')) {
    return 'SysDictionary'
  }
  // 处理公共字典
  if(path.startsWith('/dictionary')) {
    return 'SysDictionary'
  }
  // 处理文件
  if(path.startsWith('/file') || path.startsWith('/open')) {
    return 'SysFile'
  }
  // 处理组织机构
  if(path.startsWith('/org')) {
    return 'SysOrganization'
  }
  // 处理用户
  if(path.startsWith('/user')) {
    return 'SysUser'
  }
  // 处理消息提醒
  if(path.startsWith('/notice')) {
    return 'SysNotice'
  }
  if(path.startsWith('/bulletin')) {
    return 'Bulletin'
  }
  path = path.replace(/^\//, '');
  const parts = path.split('/');
  const camelCaseParts = parts.slice(0, 2).map(part => part.charAt(0).toUpperCase() + part.slice(1));
  return camelCaseParts.join('');
}

generateApi(options)
.then(({ files, configuration }) => {
  files.forEach(({ content, name }) => {
    fs.writeFile(path, content);
  });
})


  // generateTemplates({
  //   cleanOutput: false,
  //   output: path.resolve(process.cwd(), "./src/temp"),
  //   httpClientType: "axios",
  //   modular: true,
  //   silent: false,
  //   rewrite: false,
  // })