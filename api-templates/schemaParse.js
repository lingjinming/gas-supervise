const http = require('http');


// 导出语法换成require
async function  schemaParse(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        let jsonData = JSON.parse(data);
        resolve(jsonData);
      });
    })
  }).then(spec => {
    const schemas = spec.components.schemas

    for(let schemaName in schemas) {
      let schema = schemas[schemaName];
      let resultType = getResultType(schemaName,schema)
      if(resultType > 0) {
        makeSchemaPropsRequired(schema,schemas);
      }
    }
    return spec;
  })
}

/**
 * 递归处理属性,添加required,同时处理枚举类型,添加下划线别名
 */
function makeSchemaPropsRequired(schema,schemas) {
  let check = schema['__递归检测']
  if(check) {
    return;
  }
  schema['__递归检测']  = true
  const props = schema['properties'];
  // 全部添加required
  const propKeys = Object.keys(props);
  schema['required'] = propKeys;

  // 遍历处理枚举类型,添加下划线别名
  for (const key in props) {
    const prop = props[key];
    // 1 枚举类型
    if(prop.enum) {
      appendAlias(key,prop,props)
    } else if('orgId,districtId'.includes(key)) {
      appendAlias(key,prop,props)
    }
    // 2.引用类型
    let refData = getDataRefSchema(prop,schemas)
    if(refData) {
      makeSchemaPropsRequired(refData,schemas)
    }
  }
}




function getDataRefSchema(data,schemas) {
  let dataRef = data['$ref'];
  if(!dataRef) {
    if(data['type'] === 'array' && data['items']) {
      dataRef =  data['items']['$ref']
    }
  }
  if(dataRef) {
    const dataRefSchemaName = dataRef.split('/').pop();
    return  schemas[dataRefSchemaName];
  }
}





function appendAlias(key,prop,props) {
  props['_'+key] = {
    type: 'string',
    description: prop.description,
  }
}




/**
 * 获取接口响应类型
 * 0: 非标准响应
 * 1: 标准响应
 * 2: 分页标准响应
 */
function getResultType(schemaName,schema) {
  if(schemaName.startsWith('Result') || schemaName.startsWith('PageResult')) {
    const props = schema['properties'];
    if(props['code'] && props['data']  && props['message'] && props['success']) {
      return props['total'] ? 2 : 1;
    }
  }
  return 0;
}

module.exports = {schemaParse};