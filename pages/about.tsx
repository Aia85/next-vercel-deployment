import { Inter } from '@next/font/google'
import Link from 'next/link'
import { MainLayouts } from '../components/layouts/MainLayouts'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { ReactElement } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function AboutPage() {
  return (
    <>
          <h2>About Page</h2>
          <h1 className="title">
            Ir a <Link href='/'>Home</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/about.tsx</code>
          </p>  
    </>
  )
}

//Se usa cuando queremos incluir múltiples Layouts
AboutPage.getLayout = function getLayout (page:ReactElement) {
  return (
    <MainLayouts>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayouts>
  )
}
