import React from 'react'

type Props = {}

const Linha = (props: Props) => {
  return (
    <div className='mt-20 my-font p-5 bg-lime-500'>
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
                <h1 className=' text-4xl text-white font-bold'></h1>
                <p className='text-white font-medium mt-2'></p>
            </div>
        </div>
    </div>
  )
}

export default Linha