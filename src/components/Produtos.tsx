import React from 'react';
import buque from '../assents/buque.jpeg';
import linha from '../assents/linhadeflores.png';
import balao from '../assents/balao.jpeg';
import flor from '../assents/flor.jpeg';
import brinquedo from '../assents/brinquedo.jpeg';
import roupa from '../assents/roupa.jpeg';
import wave from '../assents/wave.svg'
import { useMediaQuery } from 'react-responsive';




const Produtos = () => {
    // Defina pontos de quebra para a resolução da tela
    const isMobile = useMediaQuery({ maxWidth: 867 });
    const isTablet = useMediaQuery({ minWidth: 868, maxWidth: 1460 });
    const isDesktop = useMediaQuery({ minWidth: 1500 });


  return (

    <div>
        <div className='bg-fundo bg-cover pt-10'>
        {/* Mobile */}
        {isMobile && 
            <div>
                <div className='justify-center text-center my-font'>
                    <h1 className='font-bold text-2xl'>Tudo o que você precisa em um só lugar</h1>
                    <img className=' w-52 text-center mx-auto' src={linha} alt="" />
                </div>
                

                <div className='my-20 text-center p-10'>

                    <div className=' border-2 shadow-md shadow-lime-600 w-5/6 px-10 py-3 rounded-lg mx-auto bg-white my-5'>
                        <img className='rounded-full h-56 mx-auto my-5' src={flor} alt="" />
                        <h1 className=' font-bold text-lg my-1 text-lime-600'>Flores</h1>
                        <p>Presenteie seus amigos e familiares com nossas flores, mergulhando-os em cores vivas e belas, criando memórias perfumadas que durarão para sempre.</p>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20suas%20flores."><button className='mt-10 bg-lime-500 p-2 rounded-lg text-white font-bold text-base w-40'>Saiba mais</button></a>
                    </div>

                    <div className=' border-2 shadow-md shadow-lime-600 w-5/6 px-10 py-3 rounded-lg mx-auto bg-white my-5'>
                        <img className='rounded-full h-56 mx-auto my-5' src={brinquedo} alt="" />
                        <h1 className=' font-bold text-lg my-1 text-lime-600'>Brinquedos</h1>
                        <p>Explore um mundo de descobertas e alegria para os pequenos! Nossos brinquedos para bebês são projetados para estimular o aprendizado e a diversão, tornando cada momento especial.</p>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20seus%20brinquedos."><button className='mt-10 bg-lime-500 p-2 rounded-lg text-white font-bold text-base w-40'>Saiba mais</button></a>
                    </div>

                    <div className=' border-2 shadow-md shadow-lime-600 w-5/6 px-10 py-3 rounded-lg mx-auto bg-white my-5'>
                        <img className='rounded-full mx-auto my-5 h-56' src={balao} alt="" />
                        <h1 className=' font-bold text-lg my-1 text-lime-600'>Balões Personalizados</h1>
                        <p>Dê asas à sua celebração com balões personalizados que tornam cada ocasião única e inesquecível. Crie memórias coloridas e alegres com nossas criações exclusivas.</p>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20seus%20bal%C3%B5es."><button className='mt-16 bg-lime-500 p-2 rounded-lg text-white font-bold text-base w-40'>Saiba mais</button></a>
                    </div>

                    <div className=' border-2 shadow-md shadow-lime-600 w-5/6 px-10 py-3 rounded-lg mx-auto bg-white my-5'>
                        <img className='rounded-full h-56 mx-auto my-5 ' src={roupa} alt="" />
                        <h1 className=' font-bold text-lg my-1 text-lime-600'>Roupas infantis</h1>
                        <p>Vista seus pequeninos com estilo e conforto! Descubra nossa coleção de roupas infantis, onde a moda encontra a diversão. Deixe-os brilhar com peças encantadoras e cheias de personalidade.</p>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20suas%20roupinhas."><button className='mt-10 bg-lime-500 p-2 rounded-lg text-white font-bold text-base w-40 '>Saiba mais</button></a>
                    </div>

                </div>

                <div className='mx-auto space-x-20'>
                    <div className=' w-3/4 my-auto my-font ml-28 '>

                        <div>
                            <h1 className='font-bold text-2xl'>Sempre com foco na qualidade de nossos produtos!</h1>
                            <img className=' w-52 text-center mx-auto' src={linha} alt="" />
                        </div>

                        <p className=' font-normal mt-5'>Com mais de 5 anos no mercado, nosso foco é sempre entregar o melhor produto para você!</p>
                        <ul className='mt-10 list-image-svgFlor list-inside text-base marker:pt-80'>
                            <li className=' align-text-top'>+Qualidade</li>
                            <li className=' align-text-top'>Cuidado</li>
                            <li className=' align-text-top'>Melhores produtos</li>
                            <li className=' align-text-top'>Entrega rápida</li>
                        </ul>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os!"><button className='mt-5 bg-lime-500 p-2 font-bold text-white rounded-lg'>Quero saber mais!</button></a>

                    </div>

                    <div>
                        <img src={buque} alt="" className='w-2/4 rounded-full mx-auto my-auto mt-20' />
                    </div>
                </div>
            </div>
        }


        {/* Tablets */}
        {isTablet && 
            <div>
                <div className='justify-center text-center my-font'>
                    <h1 className='font-bold text-2xl'>Tudo o que você precisa em um só lugar</h1>
                    <img className=' w-2/6 text-center mx-auto' src={linha} alt="" />
                </div>
                

                <div className='grid grid-cols-2 gap-2 my-20 mx-auto text-center p-20'>

                    <div className=' border-2 shadow-md shadow-lime-600  px-10 py-3 rounded-lg  bg-white'>
                        <img className='rounded-full h-56 mx-auto my-5' src={flor} alt="" />
                        <h1 className=' font-bold text-lg my-1 text-lime-600'>Flores</h1>
                        <p>Presenteie seus amigos e familiares com nossas flores, mergulhando-os em cores vivas e belas, criando memórias perfumadas que durarão para sempre.</p>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20suas%20flores."><button className='mt-20 bg-lime-500 p-2 rounded-lg text-white font-bold text-base w-40'>Saiba mais</button></a>
                    </div>

                    <div className=' border-2 shadow-md shadow-lime-600 px-10 py-3 rounded-lg bg-white'>
                        <img className='rounded-full h-56 mx-auto my-5' src={brinquedo} alt="" />
                        <h1 className=' font-bold text-lg my-1 text-lime-600'>Brinquedos</h1>
                        <p>Explore um mundo de descobertas e alegria para os pequenos! Nossos brinquedos para bebês são projetados para estimular o aprendizado e a diversão, tornando cada momento especial.</p>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20seus%20brinquedos."><button className='mt-10 bg-lime-500 p-2 rounded-lg text-white font-bold text-base w-40'>Saiba mais</button></a>
                    </div>

                    <div className=' border-2 shadow-md shadow-lime-600 px-10 py-3 rounded-lg bg-white'>
                        <img className='rounded-full mx-auto my-5 h-56' src={balao} alt="" />
                        <h1 className=' font-bold text-lg my-1 text-lime-600'>Balões Personalizados</h1>
                        <p>Dê asas à sua celebração com balões personalizados que tornam cada ocasião única e inesquecível. Crie memórias coloridas e alegres com nossas criações exclusivas.</p>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20seus%20bal%C3%B5es."><button className='mt-16 bg-lime-500 p-2 rounded-lg text-white font-bold text-base w-40'>Saiba mais</button></a>
                    </div>

                    <div className=' border-2 shadow-md shadow-lime-600 px-10 py-3 rounded-lg bg-white'>
                        <img className='rounded-full h-56 mx-auto my-5 ' src={roupa} alt="" />
                        <h1 className=' font-bold text-lg my-1 text-lime-600'>Roupas infantis</h1>
                        <p>Vista seus pequeninos com estilo e conforto! Descubra nossa coleção de roupas infantis, onde a moda encontra a diversão. Deixe-os brilhar com peças encantadoras e cheias de personalidade.</p>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20suas%20roupinhas."><button className='mt-10 bg-lime-500 p-2 rounded-lg text-white font-bold text-base w-40 '>Saiba mais</button></a>
                    </div>

                </div>

                <div className='grid grid-cols-2 w-3/4 mx-auto space-x-20'>
                    <div className=' w-4/4 my-auto my-font '>

                        <div>
                            <h1 className='font-bold text-2xl'>Sempre com foco na qualidade de nossos produtos!</h1>
                            <img className=' w-52 text-center mx-auto' src={linha} alt="" />
                        </div>

                        <p className=' font-normal mt-5'>Com mais de 5 anos no mercado, nosso foco é sempre entregar o melhor produto para você!</p>
                        <ul className='mt-10 list-image-svgFlor list-inside text-base marker:pt-80'>
                            <li className=' align-text-top'>+Qualidade</li>
                            <li className=' align-text-top'>Cuidado</li>
                            <li className=' align-text-top'>Melhores produtos</li>
                            <li className=' align-text-top'>Entrega rápida</li>
                        </ul>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os!"><button className='mt-5 bg-lime-500 p-2 font-bold text-white rounded-lg'>Quero saber mais!</button></a>

                    </div>

                    <div>
                        <img src={buque} alt="" className='rounded-full ml-20 my-auto' />
                    </div>
                </div>
            </div>
        }


        {/* Desktop */}
        {isDesktop && 
            <div>

                <div className='justify-center text-center my-font'>
                    <h1 className='font-bold text-2xl'>Tudo o que você precisa em um só lugar</h1>
                    <img className=' w-52 text-center mx-auto' src={linha} alt="" />
                </div>
                

                <div className='grid grid-cols-4 gap-4 my-20 space-x-20 text-center p-10'>

                    <div className=' border-2 shadow-md shadow-lime-600 w-5/6 px-4 py-10 rounded-lg ml-10 bg-white'>
                        <img className='rounded-full h-56 mx-auto my-5' src={flor} alt="" />
                        <h1 className=' font-bold text-lg my-1 text-lime-600'>Flores</h1>
                        <p>Presenteie seus amigos e familiares com nossas flores, mergulhando-os em cores vivas e belas, criando memórias perfumadas que durarão para sempre.</p>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20suas%20flores."><button className='mt-20 bg-lime-500 p-2 rounded-lg text-white font-bold text-base w-40'>Saiba mais</button></a>
                    </div>

                    <div className=' border-2 shadow-md shadow-lime-600 px-10 py-3 rounded-lg bg-white'>
                        <img className='rounded-full h-56 mx-auto my-5' src={brinquedo} alt="" />
                        <h1 className=' font-bold text-lg my-1 text-lime-600'>Brinquedos</h1>
                        <p>Explore um mundo de descobertas e alegria para os pequenos! Nossos brinquedos para bebês são projetados para estimular o aprendizado e a diversão, tornando cada momento especial.</p>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20seus%20brinquedos."><button className='mt-10 bg-lime-500 p-2 rounded-lg text-white font-bold text-base w-40'>Saiba mais</button></a>
                    </div>

                    <div className=' border-2 shadow-md shadow-lime-600 px-10 py-3 rounded-lg bg-white'>
                        <img className='rounded-full mx-auto my-5 h-56' src={balao} alt="" />
                        <h1 className=' font-bold text-lg my-1 text-lime-600'>Balões Personalizados</h1>
                        <p>Dê asas à sua celebração com balões personalizados que tornam cada ocasião única e inesquecível. Crie memórias coloridas e alegres com nossas criações exclusivas.</p>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20seus%20bal%C3%B5es."><button className='mt-16 bg-lime-500 p-2 rounded-lg text-white font-bold text-base w-40'>Saiba mais</button></a>
                    </div>

                    <div className=' border-2 shadow-md shadow-lime-600 px-10 py-3 rounded-lg bg-white'>
                        <img className='rounded-full h-56 mx-auto my-5 ' src={roupa} alt="" />
                        <h1 className=' font-bold text-lg my-1 text-lime-600'>Roupas infantis</h1>
                        <p>Vista seus pequeninos com estilo e conforto! Descubra nossa coleção de roupas infantis, onde a moda encontra a diversão. Deixe-os brilhar com peças encantadoras e cheias de personalidade.</p>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20suas%20roupinhas."><button className='mt-10 bg-lime-500 p-2 rounded-lg text-white font-bold text-base w-40 '>Saiba mais</button></a>
                    </div>

                </div>

                <div className='grid grid-cols-2 w-3/4 mx-auto space-x-20'>
                    <div className=' w-3/4 my-auto my-font ml-28 '>

                        <div>
                            <h1 className='font-bold text-2xl'>Sempre com foco na qualidade de nossos produtos!</h1>
                            <img className=' w-52 text-center mx-auto' src={linha} alt="" />
                        </div>

                        <p className=' font-normal mt-5'>Com mais de 5 anos no mercado, nosso foco é sempre entregar o melhor produto para você!</p>
                        <ul className='mt-10 list-image-svgFlor list-inside text-base marker:pt-80'>
                            <li className=' align-text-top'>+Qualidade</li>
                            <li className=' align-text-top'>Cuidado</li>
                            <li className=' align-text-top'>Melhores produtos</li>
                            <li className=' align-text-top'>Entrega rápida</li>
                        </ul>
                        <a href="https://wa.me/5511968629919?text=Ol%C3%A1,%20vim%20pelo%20Google%20e%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os!"><button className='mt-5 bg-lime-500 p-2 font-bold text-white rounded-lg'>Quero saber mais!</button></a>

                    </div>

                    <div>
                        <img src={buque} alt="" className='w-2/4 rounded-full ml-20 my-auto' />
                    </div>
                </div>
            </div>
        }
        </div>
    </div>
  )
}

export default Produtos