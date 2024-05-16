import background from '../image/background.jpg'
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';
import MenuHamburger from '../components/menu';

function Home(){

    const myStyle={
        
        display:' block',
        position: "absolute",
        backgroundImage: `linear-gradient(to bottom,rgba(6,18,30,0.1),#06121e),url(${background})`,
        left: 0,
        top: 0,
        width: '100%',
        height: '280px',
        zIndex: '-1' ,
        backgroundSize: 'cover',
        backgroundPosition: '50% 0',
        backgroundRepeat: 'no-repeat',
        opacity: 0.9,
    }
  
    

    const [isopen,setIsOpen]=useState(false)
  
    const menuOpen=()=>{
        
        setIsOpen(!isopen)
    }
    const fechar=()=>{
        setIsOpen(false)
    }
    
    return(
        <>
        <div style={myStyle} className='md:h-80'>
               <nav className='p-6 max-w-7xl  m-auto'>
                    <button className=' rounded-lg flex justify-center bg-neutral-900 p-2' onClick={(e)=>menuOpen(e)}>
                        <TiThMenu size={33} color='white'/>
                    </button>
               </nav>
            <header className='max-w-7xl m-auto'>
                <div>
                    <h1 className='font-bold text-4xl text-center text-white mt-8'>Musica || Filme</h1>
                </div>
            </header>
            {isopen &&(
                <MenuHamburger open={fechar}/>
            )}
        </div>
    
            <section className='pt-72 flex flex-col w-full border min-h-screen bg-gradient-to-t from-red-900 to-rose-500 -z-10 absolute'>
                <div className='max-w-7xl  h-full mx-auto'>
                    <h1 className='text-center font-bold text-base text-white'>Aqui você encontra as 10 melhores músicas de vários artistas. </h1>

                </div>
            </section>

      
        </>
    )
}

export default Home