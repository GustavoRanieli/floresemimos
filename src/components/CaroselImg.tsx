import React from 'react';
import linha from '../assents/linhadeflores.png';
import { useMediaQuery } from 'react-responsive';


let data = [
  {
    imgUrl: require('../assents/balao1.jpeg')
  },
  {
    imgUrl: require('../assents/balao2.jpeg')
  },
  {
    imgUrl: require('../assents/balao3.jpeg')
  },
  {
    imgUrl: require('../assents/balao4.jpeg')
  },
  {
    imgUrl: require('../assents/balao5.jpeg')
  },
  {
    imgUrl: require('../assents/boneca.jpeg')
  },
  {
    imgUrl: require('../assents/boneca2.jpeg')
  },
  {
    imgUrl: require('../assents/buque1.jpeg')
  },
  {
    imgUrl: require('../assents/buque2.jpeg')
  },
  {
    imgUrl: require('../assents/buque3.jpeg')
  },
  {
    imgUrl: require('../assents/buque4.jpeg')
  },
  {
    imgUrl: require('../assents/buque5.jpeg')
  },
  {
    imgUrl: require('../assents/buque6.jpeg')
  },
  {
    imgUrl: require('../assents/buque7.jpeg')
  },
  {
    imgUrl: require('../assents/enfeite1.jpeg')
  },
  {
    imgUrl: require('../assents/enfeite3.jpeg')
  },
  {
    imgUrl: require('../assents/enfeite5.jpeg')
  },
  {
    imgUrl: require('../assents/flor1.jpeg')
  },
  {
    imgUrl: require('../assents/flor2.jpeg')
  },
  {
    imgUrl: require('../assents/flor3.jpeg')
  },
  {
    imgUrl: require('../assents/flor6.jpeg')
  },
  {
    imgUrl: require('../assents/flor7.jpeg')
  },
  {
    imgUrl: require('../assents/enfeite4.jpeg')
  },
  {
    imgUrl: require('../assents/enfeite2.jpeg')
  },
  {
    imgUrl: require('../assents/flor5.jpeg')
  },
]


const CaroselImg = () => {
  const isIviable = useMediaQuery({maxWidth: 450})
  const isMobile = useMediaQuery({minWidth: 451 , maxWidth: 867 });
  const isTablet = useMediaQuery({ minWidth: 868, maxWidth: 1460 });
  const isDesktop = useMediaQuery({ minWidth: 1500 });

  return (
    <div className='bg-fundo bg-contain '>
      {isIviable}
      {isMobile &&
        <div className='pt-20'>
          <div>
              <h1 className='my-font font-bold text-2xl text-center'>Trabalhos Feitos.</h1>
              <img className=' w-52 text-center mx-auto' src={linha} alt="" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-40 pt-10">
              {data.map(({ imgUrl }, index) => (
                <div key={index}>
                  <img
                    className="h-auto w-full max-w-full rounded-lg object-cover object-center"
                    src={imgUrl}
                    alt="gallery-photo"
                  />
                </div>
              ))}
            </div>
        </div>
      }



      {isTablet && 
        <div className='pt-20'>
          <div>
              <h1 className='my-font font-bold text-2xl text-center'>Trabalhos Feitos.</h1>
              <img className=' w-52 text-center mx-auto' src={linha} alt="" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-40 pt-10">
              {data.map(({ imgUrl }, index) => (
                <div key={index}>
                  <img
                    className="h-auto w-full max-w-full rounded-lg object-cover object-center"
                    src={imgUrl}
                    alt="gallery-photo"
                  />
                </div>
              ))}
            </div>
        </div>
      }



      {isDesktop && 
        <div className='pt-20'>
          <div>
              <h1 className='my-font font-bold text-2xl text-center'>Trabalhos Feitos.</h1>
              <img className=' w-52 text-center mx-auto' src={linha} alt="" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-40 pt-10">
              {data.map(({ imgUrl }, index) => (
                <div key={index}>
                  <img
                    className="h-auto w-full max-w-full rounded-lg object-cover object-center"
                    src={imgUrl}
                    alt="gallery-photo"
                  />
                </div>
              ))}
            </div>
        </div>
      }
    </div>
  )
}

export default CaroselImg