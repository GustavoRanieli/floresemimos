import React from 'react';
import Flor from '../assents/flor.png';
import { useMediaQuery } from 'react-responsive';



const Intro = () => {
// Defina pontos de quebra para a resolução da tela
const isMobile = useMediaQuery({ maxWidth: 867 });
const isTablet = useMediaQuery({ minWidth: 868, maxWidth: 1460 });
const isDesktop = useMediaQuery({ minWidth: 1500 });

  return (
    <div>
      {/* Modo Mobile */}
      {isMobile &&
        <div className='bg-fundo bg-contain'>
        
          <div className='py-20 z-10 col-span-1 text-center'>
              <h1 className='text-2xl font-bold my-font'>Em cada flor, um pedacinho de amor. Surpreenda quem você ama com nossas opções.</h1>
              <p className='text-lg my-5 font-normal my-font'>Nas proximidades da Maternidade Santa Joana e Santa Maria. Diversos produtos para atender todas suas necessidades!.</p>
              <a href=""><button className=' shadow-lg my-2 bg-lime-500 p-3 rounded-lg text-white font-bold my-font'>Quero saber mais!</button></a>
          </div>

          {/* <div className='z-10'>
              <img className='ml-52 h-[32rem]' src={Flor} alt="Flor" />
          </div> */}
        </div>
      }

      {/* Modo Tablet */}
      {isTablet &&
        <div className='grid grid-cols-2 bg-fundo bg-contain'>
        
          <div className='ml-52 py-20 z-10 col-span-1'>
              <h1 className='text-2xl font-bold my-font'>Em cada flor, um pedacinho de amor. Surpreenda quem você ama com nossas opções.</h1>
              <p className='text-lg my-5 font-normal my-font'>Nas proximidades da Maternidade Santa Joana e Santa Maria. Diversos produtos para atender todas suas necessidades!.</p>
              <a href=""><button className=' shadow-lg my-2 bg-lime-500 p-3 rounded-lg text-white font-bold my-font'>Quero saber mais!</button></a>
          </div>

          <div className='z-10'>
              <img className='ml-36 h-[25rem]' src={Flor} alt="Flor" />
          </div>
        </div>
      }

      {/* Modo Desktop */}
      {isDesktop &&
       <div className='grid grid-cols-2 bg-fundo bg-contain'>
        
        <div className='ml-52 py-20 z-10 col-span-1'>
            <h1 className='text-2xl font-bold my-font'>Em cada flor, um pedacinho de amor. Surpreenda quem você ama com nossas opções.</h1>
            <p className='text-lg my-5 font-normal my-font'>Nas proximidades da Maternidade Santa Joana e Santa Maria. Diversos produtos para atender todas suas necessidades!.</p>
            <a href=""><button className=' shadow-lg my-2 bg-lime-500 p-3 rounded-lg text-white font-bold my-font'>Quero saber mais!</button></a>
        </div>

        <div className='z-10'>
            <img className='ml-52 h-[32rem]' src={Flor} alt="Flor" />
        </div>
    </div>}
      
    </div>
  )
}

export default Intro