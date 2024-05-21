import propTypes from 'prop-types'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
function MenuHamburger({open}){
    const fecharMenu =useRef()

    const fechar=(open)=>{
       open()
    }

    return(
        <div className="w-full min-h-screen fixed top-0 left-0" >
            <div className='flex min-h-screen'>
                <div className="bg1  w-96 bg-white p-2" >
                    <h3 className='font-bold text-3xl mb-12'>Lista de Musicas</h3>
                    <ul>
                        <li className='mb-4 border-b-2'><Link to={'linkinpark'}>Linkin Park</Link></li>
                        <li className='mb-4 border-b-2'><Link to={'alanis'}>Alanis Morissette</Link></li>
                        <li className='mb-4 border-b-2'><Link to={'anos90'}>As melhores anos 90</Link></li>
                        <li className='mb-4 border-b-2'><Link to={'sertanejo'}>As melhores do sertanejo</Link></li>

                    </ul>
                </div>
                <div  className="w-full bg-black opacity-85" onClick={()=>fechar(open)} ref={fecharMenu}>

                </div>

            </div>
        </div>
    )
}

export default MenuHamburger

MenuHamburger.propTypes={
    open:propTypes.any
}.isRequired