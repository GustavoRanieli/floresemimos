import React from 'react'
import Logo from '../assents/logotipo_novo.png'
import { useMediaQuery } from 'react-responsive';

const Nav = () => {
  // Defina pontos de quebra para a resolução da tela
  const isMobile = useMediaQuery({ maxWidth: 867 });
  const isTablet = useMediaQuery({ minWidth: 868, maxWidth: 1460 });
  const isDesktop = useMediaQuery({ minWidth: 1500 });

  return (
    <header className='py-5 flex '>
      {isMobile && <img className='w-40 ml-20 ' src={Logo} alt="Logo Floricultura" />}
      {isTablet && <img className='w-40 ml-52 ' src={Logo} alt="Logo Floricultura" />}
      {isDesktop && <img className='w-40 ml-96 ' src={Logo} alt="Logo Floricultura" /> }
    </header>
  )
}

export default Nav