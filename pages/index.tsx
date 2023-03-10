
import { Inter } from '@next/font/google'
import Link from 'next/link';
import { MainLayouts } from '../components/layouts/MainLayouts';

const inter = Inter({ subsets: ['latin'] })


export default function HomePage() {
  return (
    <>
      <MainLayouts>
        <h2>Home Page</h2>
        <h1 className="title">
          Ir a <Link href='/about'>About</Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code className="code">pages/index.tsx</code>
        </p>
      </MainLayouts>
    </>
  )
}
