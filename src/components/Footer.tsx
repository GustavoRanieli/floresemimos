import React from 'react';
import logo from '../assents/logotipo_novo.png';
import telefone from '../assents/telefone.svg';
import { useMediaQuery } from 'react-responsive';



const Footer = () => {
    const isMobile = useMediaQuery({ maxWidth: 867 });
    const isTablet = useMediaQuery({ minWidth: 868, maxWidth: 1460 });
    const isDesktop = useMediaQuery({ minWidth: 1500 });

  return (
    <footer className='bg-slate-500 mx-auto p-5'>
        {isMobile &&
            <div>
                <img className='text-center h-28 mx-auto p-5' src={logo}/>
                <div className=' mx-auto ml-20'>
                    <div className='my-font'>
                        <h3 className='font-bold'>Endereço:</h3>
                        <p className='text-slate-300 mt-5 font-medium'>Rua do Paraíso, 431 - Bairro Paraíso - São Paulo</p>
                        <div className='flex flex-row'>
                            <span className='mt-1 mr-3 text-black font-bold'>CEP:  </span><p className='text-slate-300 mt-1 font-medium'>  04103-000</p>    
                        </div>
                    </div>

                    <div className='my-font mt-10'>
                        <h3 className='font-bold'>Atendimento:</h3>
                        <div className='flex flex-row'>
                            <img className='mt-5 mr-2' src={telefone} alt="Icon de telefone" /><p className='text-slate-300 mt-5 font-medium'>(11) 9968629919</p>
                        </div>
                    </div>
                </div>
                <iframe className='w-3/4 h-60 mx-auto rounded-lg mt-10' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14627.390117596018!2d-46.6390106!3d-23.5739189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f326433779%3A0xaabff46dedf390a0!2sFlores%20Mimos%20e%20Carinhos!5e0!3m2!1spt-BR!2sbr!4v1703430066341!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
            </div>
        }


        {isTablet &&
            <div>
                <img className='text-center h-28 mx-auto p-5' src={logo} alt="" />
                <div className='grid grid-cols-2 w-4/6 mx-auto space-x-40'>
                    <div className='my-font'>
                        <h3 className='font-bold'>Endereço:</h3>
                        <p className='text-slate-300 mt-5 font-medium'>Rua do Paraíso, 431 - Bairro Paraíso - São Paulo</p>
                        <div className='flex flex-row'>
                            <span className='mt-1 mr-3 text-black font-bold'>CEP:  </span><p className='text-slate-300 mt-1 font-medium'>  04103-000</p>    
                        </div>
                    </div>

                    <div className='my-font'>
                        <h3 className='font-bold'>Atendimento:</h3>
                        <div className='flex flex-row'>
                            <img className='mt-5 mr-2' src={telefone} alt="Icon de telefone" /><p className='text-slate-300 mt-5 font-medium'>(11) 9968629919</p>
                        </div>
                    </div>
                </div>
                <iframe className='w-3/4 h-60 mx-auto rounded-lg mt-10' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14627.390117596018!2d-46.6390106!3d-23.5739189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f326433779%3A0xaabff46dedf390a0!2sFlores%20Mimos%20e%20Carinhos!5e0!3m2!1spt-BR!2sbr!4v1703430066341!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
            </div>
        }


        {isDesktop && 
            <div>
                <img className='text-center h-28 mx-auto p-5' src={logo} alt="" />
                <div className='grid grid-cols-2 w-3/4 mx-auto space-x-52'>
                    <div className='my-font ml-20'>
                        <h3 className='font-bold'>Endereço:</h3>
                        <p className='text-slate-300 mt-5 font-medium'>Rua do Paraíso, 431 - Bairro Paraíso - São Paulo</p>
                        <div className='flex flex-row'>
                            <span className='mt-1 mr-3 text-black font-bold'>CEP:  </span><p className='text-slate-300 mt-1 font-medium'>  04103-000</p>    
                        </div>
                    </div>

                    <div className='my-font'>
                        <h3 className='font-bold'>Atendimento:</h3>
                        <div className='flex flex-row'>
                            <img className='mt-5 mr-2' src={telefone} alt="Icon de telefone" /><p className='text-slate-300 mt-5 font-medium'>(11) 9968629919</p>
                        </div>
                    </div>
                </div>
                <iframe className='w-3/4 h-60 mx-auto rounded-lg mt-10' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14627.390117596018!2d-46.6390106!3d-23.5739189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f326433779%3A0xaabff46dedf390a0!2sFlores%20Mimos%20e%20Carinhos!5e0!3m2!1spt-BR!2sbr!4v1703430066341!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
            </div>
        }
    </footer>
  )
}

export default Footer