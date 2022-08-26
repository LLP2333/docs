/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // docsSidebar: [{type: 'autogenerated', dirName: '.'}],

  docsSidebar: [
      'intro',
      {
        type: 'category',
        label: '快速安装',
        // collapsible: true,
        // collapsed: true,
        items: [
            {
                type: 'category',
                label: '开源版',
                items: [
                    {
                        id: 'install/os-linux',
                        type: 'doc',
                        label: 'Linux'
                    },
                    {
                        id: 'install/os-windows',
                        type: 'doc',
                        label: 'Windows'
                    },
                    {
                        id: 'install/os-docker',
                        type: 'doc',
                        label: 'Docker'
                    },
                    {
                        id: 'install/os-baota',
                        type: 'doc',
                        label: '宝塔'
                    },
                ]
            },
            {
                type: 'category',
                label: '捐赠版',
                items: [
                    {
                        id: 'install/pro-linux',
                        type: 'doc',
                        label: 'Linux'
                    },
                    {
                        id: 'install/pro-windows',
                        type: 'doc',
                        label: 'Windows'
                    },
                    {
                        id: 'install/pro-docker',
                        type: 'doc',
                        label: 'Docker'
                    },
                    {
                        id: 'install/pro-baota',
                        type: 'doc',
                        label: '宝塔'
                    },
                ]
            }
        ],
      },
      {
          type: 'category',
          label: '更新日志',
          // collapsible: true,
          // collapsed: true,
          items: [
              {
                  id: 'changelog/os',
                  type: 'doc',
                  label: '开源版'
              },
              {
                  id: 'changelog/pro',
                  type: 'doc',
                  label: '捐赠版'
              }
          ]
      },
      {
          type: 'category',
          label: '功能介绍',
          items: [
              {
                  id: 'feature/pwd-folder',
                  type: 'doc',
                  label: '文件夹加密'
              },
              {
                  id: 'feature/md-folder',
                  type: 'doc',
                  label: '文件夹文档'
              },
              {
                  id: 'feature/hidden-file',
                  type: 'doc',
                  label: '隐藏文件/文件夹'
              },
              {
                  id: 'feature/video',
                  type: 'doc',
                  label: '视频播放'
              },
              {
                  id: 'feature/text',
                  type: 'doc',
                  label: '文本预览'
              },
              {
                  id: 'feature/music',
                  type: 'doc',
                  label: '音频播放'
              },
              {
                  id: 'feature/pdf',
                  type: 'doc',
                  label: 'PDF 预览'
              },
              {
                  id: 'feature/log',
                  type: 'doc',
                  label: '系统日志'
              }
          ]
      },
      {
          type: 'doc',
          label: '参数配置',
          id: 'config'
      },
      {
          type: 'doc',
          label: '高级功能',
          id: 'advanced'
      },
      {
          type: 'doc',
          label: '常见问题',
          id: 'question'
      },
      {
          type: 'doc',
          label: '存储源配置示例',
          id: 'example'
      }
  ],
};

module.exports = sidebars;