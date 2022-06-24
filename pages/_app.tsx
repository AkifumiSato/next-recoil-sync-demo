import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { RecoilURLSyncJSON } from 'recoil-sync'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <RecoilRoot>
      <RecoilURLSyncJSON
        location={{ part: 'queryParams' }}
        browserInterface={{
          getURL: () => `http://localhost:3000${router.asPath}`,
        }}
      >
        <Component {...pageProps} />
      </RecoilURLSyncJSON>
    </RecoilRoot>
  )
}

export default MyApp
