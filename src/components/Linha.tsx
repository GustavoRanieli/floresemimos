import React from 'react'
import { useMediaQuery } from 'react-responsive';



const Linha = () => {
    const isMobile = useMediaQuery({ maxWidth: 867 });
    const isTablet = useMediaQuery({ minWidth: 868, maxWidth: 1460 });
    const isDesktop = useMediaQuery({ minWidth: 1500 });

  return (
    <div className='mt-20 my-font p-5 bg-lime-500'>
        {isMobile &&
            <div className="text-center">
                <div >
                    <h1 className=' text-2xl text-white font-bold'>-10 minutos</h1>
                    <p className='text-white font-medium mt-2'>de distância das Maternidades<br></br> Santa Maria e Santa Joana</p>
                </div>

                <div className='mt-10'>
                    <h1 className=' text-2xl text-white font-bold'>+5</h1>
                    <p className='text-white font-medium mt-2'>Anos atuando no ramo de<br></br> floricultura e presentes</p>
                </div>

                <div className='mt-10'>
                    <h1 className=' text-2xl text-white font-bold'>-2h</h1>
                    <p className='text-white font-medium mt-2'>Seu  presente  vai ser entregue para<br></br>pessoa amada.</p>
                </div>
            </div>
        }



        {isTablet &&
            <div className="grid grid-cols-3 text-center">
                <div>
                    <h1 className=' text-2xl text-white font-bold'>-10 minutos</h1>
                    <p className='text-white font-medium mt-2'>de distância das Maternidades<br></br> Santa Maria e Santa Joana</p>
                </div>

                <div>
                    <h1 className=' text-2xl text-white font-bold'>+5</h1>
                    <p className='text-white font-medium mt-2'>Anos atuando no ramo de<br></br> floricultura e presentes</p>
                </div>

                <div>
                <h1 className=' text-2xl text-white font-bold'>-2h</h1>
                    <p className='text-white font-medium mt-2'>Seu  presente  vai ser entregue para<br></br> a peessoa amada.</p>
                </div>
            </div>
        }


        {isDesktop &&
            <div className="grid grid-cols-3 text-center">
                <div>
                    <h1 className=' text-4xl text-white font-bold'>-10 minutos</h1>
                    <p className='text-white font-medium mt-2'>de distância das Maternidades<br></br> Santa Maria e Santa Joana</p>
                </div>

                <div>
                    <h1 className=' text-4xl text-white font-bold'>+5</h1>
                    <p className='text-white font-medium mt-2'>Anos atuando no ramo de<br></br> floricultura e presentes</p>
                </div>

                <div>
                <h1 className=' text-4xl text-white font-bold'>-2h</h1>
                    <p className='text-white font-medium mt-2'>Seu  presente  vai ser entregue para<br></br>pessoa amada.</p>
                </div>
            </div>
        }
    </div>
  )
}

export default Linha