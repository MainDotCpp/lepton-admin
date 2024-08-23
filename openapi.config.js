const { generateService } = require('@umijs/openapi')

const methodMapping = {
  export: 'exportExcel',
}
generateService({
  schemaPath: 'http://localhost:5555/v3/api-docs', // 可以是.json文件，也可以是远程json地址
  requestLibPath: 'import {request} from "@/utils/request"',
  serversPath: './src',
  apiPrefix: '"/api"',
  enumStyle: 'enum',
  dataFields: ['data'],
  hook: {
    customFunctionName: (data) => {
      let path = data.path
      path = path.replaceAll(/\/\{.*?\}/g, '')
      const method = path.split('/').at(-1)
      return methodMapping[method] || method
    },
    customTypeName: (data) => {
      return data.operationId
    },
    customFileNames: data => data.tags,
  },
})
