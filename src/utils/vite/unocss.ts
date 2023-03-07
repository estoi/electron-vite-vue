/**
 * @name ConfigUnoCSSPlugin
 * @description 构建项目时显示进度条
 */

import UnoCSS from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export const ConfigUnoCSSPlugin = () => {
    return UnoCSS({
        presets: [presetUno(), presetAttributify(), presetIcons()],
    })
}
