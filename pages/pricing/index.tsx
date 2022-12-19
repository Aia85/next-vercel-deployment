import { MainLayouts } from '../../components/layouts/MainLayouts';
import Link from 'next/link';


export default function PricingPage() {
    return (
        <>
          <MainLayouts>
            <h2>Pricing Page</h2>
            <h1 className="title">
              Ir a <Link href='/'>Home</Link>
            </h1>
            <p>
              Get started by editing&nbsp;
              <code className="code">pricing/contact.tsx</code>
            </p>
          </MainLayouts>
        </>
      )
}
