# 插件系统

> **重要提示**：Yumeri框架目前处于快速迭代阶段，本文档中的API可能随时发生变化。请始终以GitHub仓库中的最新代码为准：https://github.com/yumerijs/yumeri

## 插件系统概述

作为模块化Web应用构建平台，Yumeri的各个操作都通过插件完成。插件系统是Yumeri的核心，提供了强大的扩展能力，使开发者能够根据需求灵活组合各种功能模块。

## 插件的定义

插件的默认形式是npm包，包名前缀为`yumeri-plugin-`，用于识别此为Yumeri的插件。例如，`yumeri-plugin-server`是Yumeri的服务器插件。

## 内置插件

Yumeri框架自带了几个基础插件：

1. **yumeri-plugin-console**：控制台插件，提供日志和调试功能
2. **yumeri-plugin-echo**：回显插件，用于测试和演示
3. **yumeri-plugin-server**：服务器插件，提供Web服务器功能

## 插件的使用

### 配置插件

在Yumeri项目中使用插件，需要在`config.yml`文件中进行配置。打开项目的`config.yml`，在插件配置部分加上自己需要的插件配置，重启Yumeri便可加载。

示例配置：

```yaml
plugins:
  yumeri-plugin-console:
  yumeri-plugin-server:
    value1: 123
  my-custom-plugin  # 自定义插件
```

### 插件加载顺序

在开发模式下，插件会优先从`plugins`文件夹下的ts源代码加载。如果本地`plugins`文件夹中没有找到对应插件，Yumeri会尝试从`node_modules`中加载。在生产环境，Yumeri只会从`node_modules`中加载

## 插件的工作原理

Yumeri插件系统基于依赖注入和模块化设计，每个插件都可以提供特定的功能，并且可以与其他插件进行交互。插件的生命周期由Yumeri核心管理，包括初始化、启用和禁用等阶段。

### 插件的生命周期

1. **加载**：Yumeri启动时，会根据配置加载所需的插件
2. **初始化**：调用插件的`apply`方法，进行初始化
3. **运行**：插件在Yumeri运行期间提供功能
4. **禁用**：当不再需要插件时，调用插件的`disable`方法进行清理

## 插件开发

关于如何开发自己的Yumeri插件，请参考[插件基础](/dev/plugin.md)章节，那里提供了详细的插件开发指南和示例。

## 插件最佳实践

1. **单一职责原则**：每个插件应该专注于提供特定的功能，避免功能过于复杂
2. **良好的错误处理**：插件应该妥善处理可能出现的错误，避免影响整个应用
3. **文档完善**：为插件提供清晰的文档，包括安装、配置和使用方法
4. **版本兼容性**：明确标注插件与Yumeri核心的版本兼容性
5. **测试覆盖**：编写充分的测试，确保插件在各种情况下都能正常工作

## 社区插件

除了内置插件外，Yumeri社区也在不断开发和分享各种实用插件。您可以在npm上搜索`yumeri-plugin-`前缀，查找可用的社区插件。