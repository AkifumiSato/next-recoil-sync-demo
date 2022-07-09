import { number } from '@recoiljs/refine'
import { syncEffect } from 'recoil-sync'
import { atomFamilyWithInitialValue } from 'recoil-sync-next'

export const counter = atomFamilyWithInitialValue({
  key: 'counterState',
  effects: [
    syncEffect({ refine: number() }),
  ],
})
