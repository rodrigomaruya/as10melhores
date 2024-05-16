import propTypes from 'prop-types'
import { useRef } from 'react'
import { Link } from 'react-router-dom'


function MenuHamburger({open}){
    const fecharMenu =useRef()

    const fechar=(open)=>{
       open()
    }

    return(
        <div className="w-full  min-h-screen flex flex-grow absolute top-0 left-0 overflow-hidden bg-transparent z-20" >
            <div className="w-5/6 md:w-1/4 bg-white flex flex-col p-4" >
                <h3 className='font-bold text-2xl mb-3'>Lista de Musicas</h3>
                <ul>
                    <li className='pb-2'><Link to={'linkinpark'}>Linkin Park</Link></li>
                    <li className='pb-2'><Link to={'alanis'}>Alanis Morissette</Link></li>
                </ul>
                <h3 className='font-bold text-lg mb-3'>As melhores do ano</h3>
                <ul>
                    <li className='pb-2'><Link to={'anos90'}>As melhores anos 90</Link></li>

                </ul>
            </div>
            <div  className="w-full bg-slate-700 opacity-75" onClick={()=>fechar(open)} ref={fecharMenu}>

            </div>
        </div>
    )
}

export default MenuHamburger

MenuHamburger.propTypes={
    open:propTypes.any
}.isRequired