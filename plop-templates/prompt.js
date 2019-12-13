const { notEmpty } = require('./utils.js');

module.exports = {
  description: '生成vue文件',
  prompts: [
    {
      type: 'checkbox',
      name: 'type',
      message: '页面|组件',
      choices: [
        {
          name: '页面',
          value: 'views',
          checked: false
        },
        {
          name: '组件',
          value: 'components',
          checked: false
        }
      ],
      validate(value) {
        if (value.length !== 1) {
          return '选择一项';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'package',
      message: '请输入src下目录名称',
      validate: notEmpty('package')
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入文件名称',
      validate: notEmpty('name')
    }
  ],
  // eslint-disable-next-line no-unused-vars
  actions: data => {
    const actions = [];
    // eslint-disable-next-line no-constant-condition
    if (data.type.includes('views')) {
      actions.push({
        type: 'add',
        path: `src/{{package}}/{{name}}.vue`,
        templateFile: 'plop-templates/views/index.vue.hbs',
        data: {
          name: '{{properCase name}}'
        }
      });
    }
    // eslint-disable-next-line no-constant-condition
    // eslint-disable-next-line no-constant-condition
    if (data.type.includes('components')) {
      actions.push(
        {
          type: 'add',
          path: `src/{{package}}/{{properCase name}}/{{properCase name}}.vue`,
          templateFile: 'plop-templates/components/index.vue.hbs',
          data: {
            name: '{{properCase name}}'
          }
        },
        {
          type: 'add',
          path: `src/{{package}}/{{properCase name}}/index.js`,
          templateFile: 'plop-templates/components/index.js.hbs',
          data: {
            name: '{{properCase name}}'
          }
        },
        {
          type: 'add',
          path: `src/{{package}}/{{properCase name}}/index.stories.js`,
          templateFile: 'plop-templates/components/index.stories.js.hbs',
          data: {
            name: '{{properCase name}}'
          }
        }
      );
    }
    return actions;
  }
};
