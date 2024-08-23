import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  unocss: true,
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
  ignores: ['lambda/', 'lambda/**/', 'scripts', 'scripts/**', 'config', 'config/**', '.history', '**/.history/**', 'public', '**/public/**', 'dist', '**/dist/**', '.umi', '**/.umi/**', 'mock', '**/mock/**'],
})
