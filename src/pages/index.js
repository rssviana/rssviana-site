import Link from 'next/link'

import { withRouter } from 'next/router';

const Index = () => {
  return (
    <>
      <h1>Teste com Next JS funcionando!</h1>
      <Link href="/others">
        <a>Others</a>
      </Link>
    </>
  )
}

export default withRouter(Index)