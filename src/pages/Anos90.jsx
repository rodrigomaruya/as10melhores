import Anos9 from '../image/melhores90.jpg'
import { IoArrowBackOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import api from '../api';
import { useEffect,useState } from 'react';


export default function Anos90(){
    const [get,setGet]=useState([])
   
    useEffect(()=>{
        const get=async()=>{
            try{
                const response=await api.get('/anos90')
                setGet(response.data)

            }catch(error){
                console.log(error)
            }
        }

        get()
    },[])



    return(
        <div className="w-full min-h-dvh bg-gray-800">
            
                <header className="bg-gradient-to-b from-gray-700 to-gray-800 h-200 flex  flex-col ">
                    <div className=' flex mx-auto w-full bg-gray-800 fixed'>
                        <Link to={'/'} className='p-2 max-w-5xl w-full mx-auto'>
                            <IoArrowBackOutline size={25} color='white'/><span className='text-white font-bold'>Home</span>
                        </Link>
                    </div>
                    <div className='max-w-xl flex justify-center items-center m-auto mt-10'>
                        <img src={Anos9} alt="logo" className='w-full '/>
                    </div>    
                    <h1 className='text-slate-500 font-serif pb-10 text-center font-bold text-lg'>As 10 melhores </h1>
                </header>
            
            
            <section className='flex flex-col md:grid md:grid-cols-2 md:gap-2  md:max-w-5xl mx-auto px-1'>
            {/*--------conteudo--------*/}
            {get.map((get)=>(
                <div className='bg-white py-1 my-1 rounded-sm' key={get._id}>
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