const moduleMapping = {
  system: {
    name: 'system',
    dir: 'src/pages/framework/system',
  },
  customer: {
    name: 'customer',
    dir: 'src/pages/customer',
  },
  order: {
    name: 'order',
    dir: 'src/pages/order',
  },
  form: {
    name: 'form',
    dir: 'src/pages/form',
  },
}

export default function Plopfile(plop) {
  plop.setHelper('replace', (text, search, replace) => {
    return text.replace(new RegExp(search, 'g'), replace)
  })
  plop.setGenerator('curd', {
    prompts: [
      {
        type: 'list',
        name: 'module',
        message: '模块',
        choices: Object.keys(moduleMapping),
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
      console.log(plop.getActionTypeList())
      return [
        {
          type: 'addMany',
          base: '_templates/curd',
          destination: './',
          templateFiles: '_templates/curd',
          force: true,
          data: {
            basePackage: 'com.leuan.lepton',
          },
        },
        {
          type: 'modify',
          pattern: /return \{(.*?)\}/gs,
          templateFile: '_templates/access.ts.hbs',
          path: 'src/access.ts',
        },
        {
          type: 'modify',
          pattern: /\/\/ 路由定义 START(.*?)\/\/ 路由定义 END/gs,
          templateFile: '_templates/routes.ts.hbs',
          path: 'config/routes/{{module.name}}.ts',
        },
      ]
    },
  })
};
