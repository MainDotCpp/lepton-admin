const moduleMapping = {
  framework: {
      name: 'system',
      dir: 'src/pages/framework/system',
  },
  customer: {
      name: 'customer',
      dir: 'src/pages/customer',
  },
}

export default function Plopfile(plop) {
  plop.setGenerator('curd', {
    prompts: [
      {
        type: 'list',
        name: 'module',
        message: '模块',
        choices: Object.keys(moduleMapping)
    },
      {
        type: 'input',
        name: 'name',
        message: '业务名',
      },
      {
        type: 'input',
        name: 'comment',
        message: '注释',
      },
    ],
    actions: (data) => {
      console.log(`plop ${data.module} ${data.name} ${data.comment}`)
      data.module = moduleMapping[data.module]
      return [
          {
              type: 'addMany',
              base: '_templates/curd',
              destination: './',
              force: true,
              templateFiles: '_templates/curd',
              data: {
                  basePackage: 'com.leuan.lepton',
              }
          },
        ]
    }})
};