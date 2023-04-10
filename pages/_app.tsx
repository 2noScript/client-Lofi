import { AppPropsWithLayout } from '@/configs/app'
import { EmptyLayout } from '@/layouts'
import '@/styles/global.scss'
import { SWRConfig } from 'swr'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout
	return (
		<SWRConfig value={{}}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	)
}
