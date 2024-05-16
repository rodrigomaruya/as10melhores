import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import LinkinPark from './pages/LinkinPark'
import Cadastro from './pages/Cadastro'
import Alanis from './pages/Alanis'
import Anos90 from './pages/Anos90'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/linkinPark' element={<LinkinPark/>}> </Route>
                <Route path='/alanis' element={<Alanis/>}> </Route>
                <Route path='/anos90' element={<Anos90/>}> </Route>
                <Route path='cadastro' element={<Cadastro/>}></Route>
            </Routes>
        
        </BrowserRouter>
    )
}

export default RoutesApp