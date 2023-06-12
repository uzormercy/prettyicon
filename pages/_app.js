import '@/styles/globals.css'
import {getLayout} from "@/components/Layouts/LayoutConfiguration";
import {Fragment} from "react";

export default function App({ Component, pageProps, router }) {

  const layout = getLayout(router);

  return(
      <Fragment>
        {layout({children: <Component {...pageProps} />})}
      </Fragment>
  )
}
