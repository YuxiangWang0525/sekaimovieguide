# 剧场版世界计划中文观影指南

> 本项目为社区玩家自行发起,与官方无关.

## 贡献

我们欢迎任何持客观不同意见或想要丰富内容的玩家完善本指南,请Fork本仓库,修改对应页面后提交Pull Request即可。

请注意本作品内容需要使用Markdown标记语言来编辑

建议使用MarkText或Typora等Markdown编辑器来编辑

## 部署

请注意,本文档使用的VitePress需要经过特殊设置,比如使用rolldown-vite覆盖vite

且需要使用Yarn来进行包管理。

以Linux (Fedora) 为例,请安装必要的环境和依赖

```shell
yum install nodejs npm -y
npm install yarn -g
yarn
# 如当前环境有Hadoop YARN,请使用以下命令代替yarn命令
yarnpkg
```

如果以上命令执行并未报错,执行以下命令来运行开发服务器:

```shell
yarn docs:dev
```

在开发服务器中修改内容 请注意保留原始版权和免责声明(与SEGA、CP、CFM无关)

在确认无误后,执行以下命令编译静态页面

```shell
yarn docs:build
```
