import { Inter } from '@next/font/google'
import Link from 'next/link'
import { MainLayouts } from '../../components/layouts/MainLayouts'

const inter = Inter({ subsets: ['latin'] })


export default function ContactPage() {
  return (
    <>
      <MainLayouts>
        <h2>Contact Page</h2>
        <h1 className="title">
          Ir a <Link href='/'>Home</Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code className="code">pages/contact.tsx</code>
        </p>
      </MainLayouts>
    </>
  )
}
