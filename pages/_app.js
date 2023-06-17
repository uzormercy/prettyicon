import '@/styles/globals.scss'
import { GetLayout } from '@/components/Layouts/LayoutConfiguration'
export default function App({ Component, pageProps, router }) {
  const layoutConfig = GetLayout(router.pathname);
  const { layout: FetchedLayout, config } = layoutConfig
  return (<FetchedLayout title={config?.title}>
    <Component {...pageProps} />
  </FetchedLayout>);
}