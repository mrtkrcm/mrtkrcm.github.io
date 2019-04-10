import Head from 'next/head'

import 'semantic-ui-css/semantic.min.css'
import 'nprogress/nprogress.css'

export default React.memo(() => (
  <Head>
    <meta charSet='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=0' />
    <link rel='shortcut icon' href={`/static/favicon/${getEnvConfig.mch.cms.theme}/favicon.ico`} />
  </Head>
))
