import Link from 'next/link'

import { withRouter } from 'next/router';

const Others = () => {
  return (
    <>
      <h1>Silence is Golden !</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </>
  )
}

export default withRouter(Others)