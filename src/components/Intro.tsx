import React from 'react';
import Flor from '../assents/flor.png';

type Props = {}

const Intro = (props: Props) => {
  return (
    <div>

      <div className='grid grid-cols-2 bg-fundo bg-contain'>
        
          <div className='ml-52 py-20 z-10 col-span-1'>
              <h1 className='text-2xl font-bold my-font'>Em cada flor, um pedacinho de amor. Surpreenda quem você ama com nossas opções.</h1>
              <p className='text-lg my-5 font-normal my-font'>Nas proximidades da Maternidade Santa Joana e Santa Maria. Diversos produtos para atender todas suas necessidades!.</p>
              <a href=""><button className=' shadow-lg my-2 bg-lime-500 p-3 rounded-lg text-white font-bold my-font'>Quero saber mais!</button></a>
          </div>

          <div className='z-10'>
              <img className='ml-52 h-[32rem]' src={Flor} alt="Flor" />
          </div>
      </div>
    </div>
  )
}

export default Intro