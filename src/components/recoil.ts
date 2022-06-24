import { atom } from 'recoil'
import { syncEffect } from 'recoil-sync'
import { number } from '@recoiljs/refine'

export const countState = atom({
  key: 'count',
  default: 0,
  effects: [syncEffect({ refine: number() })],
})
