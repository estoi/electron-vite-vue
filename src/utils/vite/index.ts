import vue from '@vitejs/plugin-vue'

import { ConfigProgressPlugin } from './progress'
import { ConfigCompressPlugin } from './compress'
import { ConfigUnoCSSPlugin } from './unocss'
import { AutoRegistryComponents } from './component'
import { AutoImportDeps } from './autoImport'

export function createVitePlugins() {
    const vitePlugins: any[] = [
        // vue支持
        vue(),
    ]

    // 构建项目时显示进度条
    vitePlugins.push(ConfigProgressPlugin())
    // 压缩代码
    vitePlugins.push(ConfigCompressPlugin())
    // unocss
    vitePlugins.push(ConfigUnoCSSPlugin())
    // 自动引入组件
    vitePlugins.push(AutoRegistryComponents())
    // 自动引入依赖
    vitePlugins.push(AutoImportDeps())

    return vitePlugins
}
