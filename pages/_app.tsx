import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { RecoilHistorySyncJSONNext, RecoilURLSyncJSONNext } from 'recoil-sync-next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <RecoilHistorySyncJSONNext>
        <RecoilURLSyncJSONNext
          storeKey='url-json-store'
          location={{ part: 'queryParams' }}
        >
          <Component {...pageProps} />
        </RecoilURLSyncJSONNext>
      </RecoilHistorySyncJSONNext>
    </RecoilRoot>
  )
}

export default MyApp
