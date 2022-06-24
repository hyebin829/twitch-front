import { atom } from 'recoil'
import store from 'store'

export const StreamerState = atom<string | undefined>({
  key: '#streamerState',
  default: '',
})

export const ThemeState = atom({
  key: '#themeState',
  default: store.get('timeline-theme') || 'light',
})
