import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties, FC } from 'react';


const style:CSSProperties = {
  color: '#FF9500',
  textDecoration: 'underline',  
}

interface Props {
  text:string;
  href:string;
}

export const ActiveLink:FC<Props> = ({ text, href }) => {

  const { asPath } = useRouter();

  return (
    <Link legacyBehavior href={href}>
      {/* Si la ruta es igual al href, renderiza el estilo */}
      <a style={asPath === href ? style : undefined}>{text}</a>
      {/* <a>{text}</a>     */}
    </Link>
  )
}

