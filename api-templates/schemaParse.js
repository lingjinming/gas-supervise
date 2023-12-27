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
        mackSchemaPropsRequired(schema);
        const resultDataSchema = getDataRefSchema(schema,schemas);
        if(resultDataSchema) {
          // 处理data的引用类型中的枚举,添加别名
          makeEnumsAlias(resultDataSchema);
          // 给data的引用类型全部添加required
          mackSchemaPropsRequired(resultDataSchema);
        }
      }
    }
    return spec;

  })
  
}


function getDataRefSchema(schema,schemas) {
  const props = schema['properties'];
  const data = props['data'];
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



/**
 * 给schema中的props添加枚举类型的别名
 */
function makeEnumsAlias(schema) {
  const props = schema['properties'];
  for (const key in props) {
    const prop = props[key];
    if(prop.enum) {
      appendAlias(key,prop,props)
    } else if('orgId,districtId'.includes(key)) {
      appendAlias(key,prop,props)
    }
  }
}

function appendAlias(key,prop,props) {
  props['_'+key] = {
    type: 'string',
    description: prop.description,
  }
}

function mackSchemaPropsRequired(schema) {
  const propKeys = Object.keys(schema['properties']);
  schema['required'] = propKeys;
}



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