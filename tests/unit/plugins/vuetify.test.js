import vuetify from '@/plugins/vuetify'

describe('vuetify.js', () => {
  it('theme should be equal to the expected theme', () => {
    const expectedTheme = {
      primary: '#ee44aa',
      secondary: '#424242',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107'
    }
    const theme = vuetify.framework.theme.themes.light

    expect(theme).toEqual(expectedTheme)
  })

  it('language should be equal to "pt"', () => {
    expect(vuetify.framework.lang.current).toBe('pt')
  })

  it('icon package should be equal to "mdi"', () => {
    expect(vuetify.framework.icons.iconfont).toBe('mdi')
  })
})
