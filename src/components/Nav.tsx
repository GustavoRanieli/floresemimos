import React from 'react'
import Logo from '../assents/logotipo_novo.png'

type Props = {}

const Nav = (props: Props) => {
  return (
    <header className='py-5 flex ml-96'>
        <img className='w-40 ' src={Logo} alt="Logo Floricultura" />
    </header>
  )
}

export default Nav