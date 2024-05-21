// import background from '../image/background.jpg'
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';
import MenuHamburger from '../../components/menu';
import './home.css'

function Home(){

    const [isopen,setIsOpen]=useState(false)
  
    const menuOpen=()=>{
        
        setIsOpen(!isopen)
    }
    const fechar=()=>{
        setIsOpen(false)
    }
    
    return(
        <div>
            <div className="bg">
                <nav className='p-2 max-w-5xl  m-auto'>
                        <button className='rounded-lg flex justify-center bg-neutral-900 p-2' onClick={(e)=>menuOpen(e)}>
                            <TiThMenu size={33} color='white'/>
                        </button>
                </nav>
                <header className='max-w-7xl m-auto'>
                    <div>
                        <h1 className='font-bold text-4xl text-center text-white mt-8 mb-4'>Musica || Filme</h1>
                        <p className='text-center font-bold text-base text-white my-10 p-4'>Aqui você encontra as 10 melhores músicas de vários artistas.</p>
                    </div>
                </header>
            
            </div>
        

                {isopen &&(
                    <MenuHamburger open={fechar}/>
                )}
      
        </div>
        
    )
}

export default Home