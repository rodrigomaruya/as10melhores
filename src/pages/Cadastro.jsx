import api from "../api"
import {useRef,useState,useEffect} from 'react'
import { FaRegTrashAlt } from "react-icons/fa";


function Cadastro(){

    const ref_title=useRef('')
    const ref_clip_url=useRef('')
    const [valor,setValor]=useState('vazio')
    const [valorDelete,setValorDelete]=useState('vazio')
    const [get,setGet]=useState([])
    const [open,setOpen]=useState(false)
    
    function extrairIdDoYoutube(url) {
        let videoId = null;
    
        if (url.includes("youtu.be/")) {
            // URL curta: https://youtu.be/abc123XYZ
            videoId = url.split('/').pop();
        } else if (url.includes("youtube.com/watch?v=")) {
            // URL completa: https://www.youtube.com/watch?v=abc123XYZ
            videoId = url.split('v=')[1];
            // Remove quaisquer parâmetros adicionais na URL
            videoId = videoId.split('&')[0];
        } else if (url.includes("youtube.com/embed/")) {
            // URL embed: https://www.youtube.com/embed/abc123XYZ
            videoId = url.split('/embed/')[1];
        }
    
        return videoId;
    }
    

    
    
    
    const enviar=async()=>{
        console.log(ref_title.current.value)
        if(!ref_title.current.value || !ref_clip_url.current.value || valor==='vazio'){
            alert('Preencha os campos')
        }else{
            const create=await api.post(`/add${valor}`,{
                title:ref_title.current.value,
                clip_url:extrairIdDoYoutube(ref_clip_url.current.value)
            })
            JSON.stringify(create) 

            
        }       
        ref_clip_url.current.value=""
        ref_title.current.value=""
    }

    const deletar=async(id)=>{
        console.log(id)
        try{
            await api.delete(`/${id}`)
            const allClip=get.filter(get=>get._id!=id)  
            setGet(allClip)
        }catch(err){
            console.log(err)
        }
    }

   
    useEffect(()=>{
        
        const get=async()=>{
            if(valorDelete=='vazio'){
                setOpen(true)
                setGet([])
            }else if(valorDelete != 'vazio'){
                setOpen(false)
                try{
                    const response=await api.get(`/${valorDelete}`)
                    console.log(response.data)
                    setGet(response.data)

                }catch(error){
                    console.log(error)
                }
            }
        }
    

        get()
       
    },[valorDelete,open])





    return(
        <div className=" w-full min-h-screen flex justify-center items-start bg-cyan-800">
            <div className="max-w-5xl w-full">
                <section className=" w-full flex flex-col justify-center items-center">
                    <h1 className="p-3 text-white font-bold">Cadastro</h1>
                    <div className="w-full flex justify-center p-3">
                        <select name="linkinpark" id="option" className="border w-80" onChange={(e)=>setValor(e.target.value)}>

                            <option value='vazio'>Escolha o album</option>
                            <option value="linkinpark">Linkin Park</option>
                            <option value="alanis">Alanis Morissette</option>
                            <option value="anos90">Anos 90</option>
                            <option value="sertanejo">Sertanejo</option>
                            
                        </select>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex justify-center p-3">
                            <span className="w-36 text-white font-bold p-1">Title: </span>
                            <input type="text" className="p-1" ref={ref_title}/>
                        </div>
                        <div className="w-full flex justify-center p-3">
                            <span className="w-36 text-white font-bold p-1">Link do youtube: </span>
                            <input type="text" className="p-1" ref={ref_clip_url}/>
                        </div>
                        <div className="w-full flex justify-center p-3 b">
                            <button className="bg-white px-36 py-1" onClick={enviar}>Enviar</button>
                        </div>
                    </div>
                </section>
                {/*=============*/ }
                <section className="flex flex-col  w-full">
                    <h2 className="text-center py-3 text-white">Selecione uma lista para deletar</h2>
                    <select value={valorDelete} id="option" className="border w-80 m-auto" onChange={(e)=>setValorDelete(e.target.value)}>
                        <option value='vazio'>Escolha o album</option>
                        <option value="linkinpark">Linkin Park</option>
                        <option value="alanis">Alanis Morissette</option>
                        <option value="anos90">Anos90</option>
                        <option value="sertanejo">Sertanejo</option>
                    </select>
                    {open && (
                        <h2 className="text-center text-white font-bold py-2 ">Nenhum titulo encontrado</h2>
                    )}
                    {get.map((get)=>(
                        <div className="flex justify-between items-center mt-5 p-3 " key={get._id}>
                            <h2 className="font-bold text-base text-white ">{get.title}</h2>
                            <button onClick={()=>deletar(get._id)}><FaRegTrashAlt color="white" size={20} /></button>
                        </div>
                    ))}
                  
                </section>
            </div>
        </div>
    )
}

export default Cadastro