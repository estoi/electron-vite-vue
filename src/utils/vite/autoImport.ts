/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 */
import AutoImport from 'unplugin-auto-import/vite'

export const AutoImportDeps = () => {
    return AutoImport({
        imports: [
            'vue',
            'pinia',
            'vue-router',
            {
                'naive-ui': [
                    'useDialog',
                    'useMessage',
                    'useNotification',
                    'useLoadingBar',
                    'NIcon',
                    'NButton',
                    'NInput',
                    'NSelect',
                    'NTag',
                    'NSpace',
                    'NText',
                    'NDatePicker',
                    'NAvatar',
                    'NEllipsis',
                    'NCheckBox',
                ],
            },
        ],
    })
}
