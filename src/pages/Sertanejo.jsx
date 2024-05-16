import logo from '../image/sertanejo.png'
import { IoArrowBackOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import api from '../api';
import { useEffect,useState } from 'react';


export default function Sertanejo(){
    const [get,setGet]=useState([])
   
    useEffect(()=>{
        const get=async()=>{
            const response=await api.get('/sertanejo')
            console.log(response.data)
            setGet(response.data)
        }

        get()
    },[])



    return(
        <div className="w-full min-h-dvh bg-gray-800">
            
                <header className="bg-gradient-to-b from-gray-700 to-gray-800 h-200 flex justify-center flex-col ">
                    <div className='max-w-5xl flex mx-auto w-full mt-3 pt-1 pl-3'>
                        <Link to={'/'} className='w-full'>
                            <IoArrowBackOutline size={25} color='white'/><span className='text-white font-bold'>Home</span>
                        </Link>
                    </div>
                    <div className='min-w-80 max-w-xl flex justify-center items-center mx-auto p-3 '>
                        <img src={logo} alt="logo" className='w-full max-h-64'/>
                    </div>    
                    <h1 className='text-slate-500 font-serif pb-10 text-center font-bold text-lg'>As 10 melhores </h1>
                </header>
            
            
            <section className='flex flex-col md:grid md:grid-cols-2 md:gap-2 max-w-4xl mx-auto '>
            {/*--------conteudo--------*/}
            {get.map((get)=>(
                <div className='flex justify-center flex-col items-center px-1 bg-white mb-3 m-1 rounded-md' key={get._id}>
                    <div className='w-full p-2'>
                        <iframe 
                        width="100%" 
                        height="315" 
                        src={`https://www.youtube.com/embed/${get.clip_url}?si=_LAopUUQ733XIuSj`} 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        ></iframe>

                    </div>
                    <h2 className='py-2 text-black text-center'>{get.title}</h2>
                </div>

            ))}
   
            </section>
        </div>
    )
}